import React, { useEffect, useRef } from 'react';

const NeuralBackground = () => {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Initialize nodes
    const nodes = [];
    const initNodes = () => {
      nodes.length = 0;
      const nodeCount = Math.floor(window.innerWidth * window.innerHeight / 10000);
      for (let i = 0; i < nodeCount; i++) {
        nodes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 2 + 1,
          vx: Math.random() * 2 - 1,
          vy: Math.random() * 2 - 1
        });
      }
    };

    // Handle mouse movement
    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    // Draw function
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Background gradient
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, '#0f2027');
      gradient.addColorStop(0.5, '#203a43');
      gradient.addColorStop(1, '#2c5364');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw nodes
      ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
      
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        
        // Move towards mouse slightly
        const dx = mouseX - node.x;
        const dy = mouseY - node.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist < 200) {
          node.x += dx * 0.005; // Slower movement
          node.y += dy * 0.005; // Slower movement
        } else {
          // Regular movement
          node.x += node.vx * 0.5; // Slower movement
          node.y += node.vy * 0.5; // Slower movement
          
          // Bounce off edges
          if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
          if (node.y < 0 || node.y > canvas.height) node.vy *= -1;
        }
        
        // Draw node
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fill();
        
        // Draw connections
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
        ctx.lineWidth = 0.5;
        
        for (let j = i + 1; j < nodes.length; j++) {
          const node2 = nodes[j];
          const dx = node.x - node2.x;
          const dy = node.y - node2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(node2.x, node2.y);
            ctx.stroke();
          }
        }
      }
      
      animationFrameId = window.requestAnimationFrame(draw);
    };

    // Initialize
    window.addEventListener('resize', () => {
      resizeCanvas();
      initNodes();
    });
    window.addEventListener('mousemove', handleMouseMove);
    
    resizeCanvas();
    initNodes();
    draw();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: -1
      }}
    />
  );
};

export default NeuralBackground;
