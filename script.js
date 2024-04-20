let currentSlideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach(slide => {
slide.classList.remove('current-slide', 'next-slide', 'prev-slide');
});

slides[index].classList.add('current-slide');
if (index > 0) {
slides[index - 1].classList.add('prev-slide');
}
if (index < slides.length - 1) {
slides[index + 1].classList.add('next-slide');
}
currentSlideIndex = index;
}

// 다음 슬라이드 표시
function nextSlide() {
    const nextIndex = (currentSlideIndex + 1) % slides.length;
    showSlide(nextIndex);
}

// 이전 슬라이드 표시
function prevSlide() {
    const prevIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
    showSlide(prevIndex);
}


// 초기 슬라이드 표시
showSlide(currentSlideIndex);