// ==========================================================================
// 테크 뉴스 카드 슬라이더 제어 로직
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
    const track = document.querySelector(".slider-track");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");
    const slides = document.querySelectorAll(".news-card");
    
    let currentIndex = 0;
    const totalSlides = slides.length;

    function moveSlider() {
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    // 다음 버튼 클릭 이벤트
    nextBtn.addEventListener("click", () => {
        currentIndex++;
        if (currentIndex >= totalSlides) {
            currentIndex = 0;
        }
        moveSlider();
    });

    // 이전 버튼 클릭 이벤트
    prevBtn.addEventListener("click", () => {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = totalSlides - 1;
        }
        moveSlider();
    });
});