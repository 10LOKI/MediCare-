document.addEventListener('DOMContentLoaded', () => {
    const slidesContainer = document.querySelector('.slides-container');
    if (!slidesContainer) return;

    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    let currentSlide = 0;
    const totalSlides = slides.length;
    let autoSlideInterval;

    function updateCarousel() {
        slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
    }

    function next() {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateCarousel();
    }

    function prev() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateCarousel();
    }
    
    function startAutoSlide() {
        autoSlideInterval = setInterval(next, 5000);
    }

    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }
    
    nextBtn.addEventListener('click', () => {
        next();
        stopAutoSlide();
        startAutoSlide();
    });

    prevBtn.addEventListener('click', () => {
        prev();
        stopAutoSlide();
        startAutoSlide();
    });
    
    startAutoSlide();
});