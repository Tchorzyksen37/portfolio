import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

const A4_PX = 794;

// Collect {top, bottom} bands for every text element, relative to the clone top.
function collectElementBands(clone) {
  const cloneTop = clone.getBoundingClientRect().top;
  const bands = [];
  clone.querySelectorAll('p, li, h1, h2, h3').forEach(el => {
    const rect = el.getBoundingClientRect();
    const top = Math.round(rect.top - cloneTop);
    const bottom = Math.round(rect.bottom - cloneTop);
    if (bottom > top && top >= 0) bands.push({ top, bottom });
  });
  return bands;
}

// Find the largest y ≤ idealBreak (and > pageStart) where no element from either
// column straddles the cut. Falls back to idealBreak when nothing better exists.
function safeBreakBefore(elementBands, idealBreak, pageStart) {
  // Candidate positions: every element bottom that sits before the ideal break.
  const candidates = elementBands
    .map(b => b.bottom)
    .filter(y => y > pageStart && y < idealBreak)
    .sort((a, b) => b - a); // descending — check closest to idealBreak first

  for (const candidate of candidates) {
    const straddled = elementBands.some(b => b.top < candidate && b.bottom > candidate);
    if (!straddled) return candidate;
  }

  return idealBreak; // no clean gap found, cut at the ideal position
}

function smartPageBreaks(elementBands, pageHeightPx, totalHeight) {
  const breaks = [0];
  let pageStart = 0;

  while (pageStart + pageHeightPx < totalHeight) {
    const idealBreak = pageStart + pageHeightPx;
    const smartBreak = safeBreakBefore(elementBands, idealBreak, pageStart);
    breaks.push(smartBreak);
    pageStart = smartBreak;
  }

  breaks.push(totalHeight);
  return breaks;
}

function sliceCanvas(source, startY, endY) {
  const offscreen = document.createElement('canvas');
  offscreen.width = source.width;
  offscreen.height = endY - startY;
  offscreen.getContext('2d').drawImage(
    source,
    0, startY, source.width, endY - startY,
    0, 0,      source.width, endY - startY
  );
  return offscreen.toDataURL('image/png');
}

export const exportToPdf = (elementId, filename) => {
  const element = document.getElementById(elementId);
  if (!element) {
    alert(`Error: Could not find content to export (${elementId})`);
    return;
  }

  const clone = element.cloneNode(true);

  clone.style.position = 'absolute';
  clone.style.left = '-9999px';
  clone.style.top = '0';
  clone.style.width = `${A4_PX}px`;
  clone.style.padding = '15px 40px';
  clone.style.boxSizing = 'border-box';
  clone.style.backgroundColor = 'white';
  clone.style.fontSize = '12px';
  clone.style.lineHeight = '1.5';

  // Force two-column layout regardless of current viewport width.
  clone.querySelectorAll('.row').forEach(row => {
    row.style.display = 'flex';
    row.style.flexDirection = 'row';
    row.style.flexWrap = 'nowrap';
  });
  clone.querySelectorAll('.col-sm').forEach(col => {
    col.style.width = '50%';
    col.style.minWidth = '0';
    col.style.flex = '0 0 50%';
    col.style.boxSizing = 'border-box';
  });

  document.body.appendChild(clone);

  // Measure element positions while the clone is in the DOM.
  const bandsClone = collectElementBands(clone);

  html2canvas(clone, {
    scale: 2,
    useCORS: true,
    logging: false,
    allowTaint: true,
    windowWidth: A4_PX,
    x: 0,
    y: 0,
    scrollX: 0,
    scrollY: 0,
  }).then(canvas => {
    document.body.removeChild(clone);

    const MARGIN = 15;
    const CONTENT_W = 210 - 2 * MARGIN;
    const CONTENT_H = 297 - 2 * MARGIN;
    const mmPerPx = CONTENT_W / canvas.width;
    const pageHeightPx = CONTENT_H / mmPerPx;

    // html2canvas scale=2 means canvas pixels = 2 × clone pixels.
    const bandsPx = bandsClone.map(b => ({ top: b.top * 2, bottom: b.bottom * 2 }));

    const breaks = smartPageBreaks(bandsPx, pageHeightPx, canvas.height);

    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
      compress: true,
    });

    for (let i = 0; i < breaks.length - 1; i++) {
      if (i > 0) pdf.addPage();
      const startY = breaks[i];
      const endY = breaks[i + 1];
      pdf.addImage(
        sliceCanvas(canvas, startY, endY),
        'PNG',
        MARGIN,
        MARGIN,
        CONTENT_W,
        (endY - startY) * mmPerPx
      );
    }

    pdf.save(`${filename}.pdf`);
  }).catch(error => {
    console.error('Error generating PDF:', error);
    if (document.body.contains(clone)) document.body.removeChild(clone);
    alert('Error generating PDF. Please try again.');
  });
};
