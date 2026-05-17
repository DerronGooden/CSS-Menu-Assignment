/* ============================================
   ORIGINAL VANILLA JAVASCRIPT (COMMENTED OUT)
===============================================

// let currentIndex = 0;
// const slides = document.querySelectorAll(".slide");

// function showSlide(index) {
//     slides.forEach(slide => slide.classList.remove("active"));
//     slides[index].classList.add("active");
// }

// function nextSlide() {
//     currentIndex = (currentIndex + 1) % slides.length;
//     showSlide(currentIndex);
// }

// function prevSlide() {
//     currentIndex = (currentIndex - 1 + slides.length) % slides.length;
//     showSlide(currentIndex);
// }

===============================================
   JQUERY VERSION (REQUIRED FOR ASSIGNMENT)
=============================================== */

let currentIndex = 0;

function showSlide(index) {
    const slides = $(".slide");
    slides.removeClass("active");
    slides.eq(index).addClass("active");
}

function nextSlide() {
    const slides = $(".slide");
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

function prevSlide() {
    const slides = $(".slide");
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
}

// AUTO-SLIDE every 4 seconds
setInterval(nextSlide, 4000);

