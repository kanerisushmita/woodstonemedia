let currentIndex = 0;

const sliderContainer = document.querySelector('.offerings-slider-container');
const cards = document.querySelectorAll('.offerings-card');
const totalCards = cards.length;
const visibleCards = 3;

document.getElementById('offerings-prev').addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalCards - visibleCards;
    updateSliderPosition();
});

document.getElementById('offerings-next').addEventListener('click', () => {
    currentIndex = (currentIndex < totalCards - visibleCards) ? currentIndex + 1 : 0;
    updateSliderPosition();
});

function updateSliderPosition() {
    const transformValue = -(currentIndex * (100 / visibleCards));
    sliderContainer.style.transform = `translateX(${transformValue}%)`;
}

function autoScroll() {
    currentIndex = (currentIndex < totalCards - visibleCards) ? currentIndex + 1 : 0;
    updateSliderPosition();
}

setInterval(autoScroll, 3000);
