var splide = new Splide ( '.splide', {
  type : 'loop',
  drag : 'free',
  perPage : 3,
  focus : 'center',
  autoWidth : true,
});

splide.mount();

// VANTA.WAVES Configuration for Fullscreen
VANTA.WAVES({
  el: "#bg", // Targeting the background element
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  color: 0x1a73a4, // Set wave color
  shininess: 150.00,
  waveHeight: 40.00,
  waveSpeed: 0.90,
  scale: 1.00,
  scaleMobile: 1.00,
});

// Ensure the background covers the full page height
window.addEventListener('resize', () => {
  const bg = document.getElementById('bg');
  if (bg) {
    bg.style.width = `${window.innerWidth}px`;
    bg.style.height = `${document.documentElement.scrollHeight}px`;
  }
});

// Initial call to set size
document.addEventListener('DOMContentLoaded', () => {
  const bg = document.getElementById('bg');
  if (bg) {
    bg.style.position = 'absolute';  // Keep it at the top of the page
    bg.style.top = '0';              // Align to the top of the page
    bg.style.left = '0';             // Align to the left
    bg.style.width = `${window.innerWidth}px`;
    bg.style.height = `${document.documentElement.scrollHeight}px`; // Set to full page height, even when scrolled
    bg.style.zIndex = '-1';          // Make sure it's behind the content
  }
});
