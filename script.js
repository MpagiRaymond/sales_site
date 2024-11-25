let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function changeSlide(direction) {
    slides[currentSlide].classList.remove('active');  // Hide current slide
    
    currentSlide = (currentSlide + direction + slides.length) % slides.length;  // Calculate next slide
    
    slides[currentSlide].classList.add('active');  // Show next slide
}

// Auto-change slide every 5 seconds
setInterval(() => changeSlide(1), 5000);
