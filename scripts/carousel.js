
document.addEventListener('DOMContentLoaded', () => 
{
    const slidesContainer = document.querySelector('.slides-container');
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let currentSlide = 0;
    
    function showSlide() {
        const offset = -currentSlide * 100;
        slidesContainer.style.transform = `translateX(${offset}%)`;
    }
    nextBtn.addEventListener('click', () => 
    {
        currentSlide++;
        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }
        showSlide();
    });

    prevBtn.addEventListener('click', () => 
    {
        currentSlide--;
        if (currentSlide < 0) 
        {
            currentSlide = slides.length - 1;
        }
        showSlide();
    });

    setInterval(() => {
        currentSlide++;
        if (currentSlide >= slides.length) 
        {
            currentSlide = 0;
        }
        showSlide();
    }, 5000);
});