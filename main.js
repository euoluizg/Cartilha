window.addEventListener('resize', function() {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    
    // Adjust layout based on screen size
    if (screenWidth < 600) {
      // Mobile layout
      document.body.classList.add('mobile');
    } else if (screenWidth < 1200) {
      // Tablet layout
      document.body.classList.add('tablet');
    } else {
      // Desktop layout
      document.body.classList.add('desktop');
    }
  });

  