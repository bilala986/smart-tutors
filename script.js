const slides = document.querySelector('.slides');
const slide = document.querySelectorAll('.slide');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const dots = document.querySelectorAll('.dot');

let currentIndex = 0;
let totalSlides = slide.length;
let interval = setInterval(autoSlide, 3000);

function updateSlide(index) {
    slides.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach((dot, i) => dot.classList.toggle('active', i === index));
}

function autoSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlide(currentIndex);
}

prev.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlide(currentIndex);
    resetInterval();
});

next.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlide(currentIndex);
    resetInterval();
});

dots.forEach(dot => {
    dot.addEventListener('click', (event) => {
        currentIndex = parseInt(event.target.dataset.index, 10);
        updateSlide(currentIndex);
        resetInterval();
    });
});

function resetInterval() {
    clearInterval(interval);
    interval = setInterval(autoSlide, 5000);
}


//SMOOTH SCROLL
function smoothScroll(event, target) {
    event.preventDefault(); // Prevent default anchor behavior
    document.querySelector(target).scrollIntoView({
        behavior: 'smooth' // Smooth scrolling behavior
    });
}