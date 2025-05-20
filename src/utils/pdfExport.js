import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

export const exportToPdf = (elementId, filename) => {
  const element = document.getElementById(elementId);
  
  if (!element) {
    console.error(`Element with ID ${elementId} not found`);
    return;
  }
  
  // Create a clone of the element to avoid modifying the original
  const clone = element.cloneNode(true);
  document.body.appendChild(clone);
  clone.style.position = 'absolute';
  clone.style.left = '-9999px';
  clone.style.top = '-9999px';
  
  // Apply print-specific styles to the clone
  const sections = clone.querySelectorAll('section');
  sections.forEach(section => {
    section.style.pageBreakInside = 'avoid';
    section.style.marginBottom = '20px';
  });
  
  const headings = clone.querySelectorAll('h2, h3');
  headings.forEach(heading => {
    heading.style.pageBreakAfter = 'avoid';
    heading.style.marginTop = '15px';
  });
  
  // Add margins for better PDF layout
  clone.style.padding = '15mm';
  clone.style.width = '170mm'; // A4 width minus margins
  
  html2canvas(clone, {
    scale: 2,
    useCORS: true,
    logging: false,
    allowTaint: true,
    windowWidth: 1200, // Fixed width for consistent rendering
    windowHeight: element.scrollHeight,
    x: 0,
    y: 0,
    scrollX: 0,
    scrollY: 0
  }).then(canvas => {
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
      compress: true
    });
    
    // A4 dimensions with margins
    const pageWidth = 210;
    const pageHeight = 297;
    const margin = 10;
    const contentWidth = pageWidth - (2 * margin);
    const contentHeight = pageHeight - (2 * margin);
    
    const imgWidth = contentWidth;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    
    let heightLeft = imgHeight;
    let position = 0;
    
    // Add first page
    pdf.addImage(imgData, 'PNG', margin, margin, imgWidth, imgHeight);
    heightLeft -= contentHeight;
    
    // Add new pages if content overflows
    while (heightLeft > 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, 'PNG', margin, position + margin, imgWidth, imgHeight);
      heightLeft -= contentHeight;
    }
    
    // Remove the clone from the DOM
    document.body.removeChild(clone);
    
    pdf.save(`${filename}.pdf`);
  });
};
