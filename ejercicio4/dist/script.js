var carouselSlide = document.querySelector('.carousel-slide');
var carouselImages = document.querySelectorAll('.carousel-slide img');
var carouselCurrentPageEl = document.querySelector('#current-page');
var carouselTotalPagesEl = document.querySelector('#total-pages');
var width = carouselImages[0].clientWidth;
var count = 0;
var totalPages = carouselImages.length - 1;
carouselCurrentPageEl.textContent = String(count);
carouselTotalPagesEl.textContent = String(totalPages);
document.getElementById('next').addEventListener('click', function () {
    count = loopInRange(0, count + 1, totalPages);
    carouselSlide.style.transform = "translateX(" + -width * count + "px)";
    carouselCurrentPageEl.textContent = String(count);
});
document.getElementById('prev').addEventListener('click', function () {
    count = loopInRange(0, count - 1, totalPages);
    carouselSlide.style.transform = "translateX(" + -width * count + "px)";
    carouselCurrentPageEl.textContent = String(count);
});
function loopInRange(min, x, max) {
    if (x > max) {
        return min;
    }
    else if (x < min) {
        return max;
    }
    return x;
}
