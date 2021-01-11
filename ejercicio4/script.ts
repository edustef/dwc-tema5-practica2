const carouselSlide: HTMLElement = document.querySelector('.carousel-slide');
const carouselImages: NodeListOf<HTMLElement> = document.querySelectorAll('.carousel-slide img');
const carouselCurrentPageEl: HTMLElement = document.querySelector('#current-page');
const carouselTotalPagesEl: HTMLElement = document.querySelector('#total-pages');

const width :number = carouselImages[0].clientWidth;
let count: number = 0;
let totalPages: number = carouselImages.length - 1;
carouselCurrentPageEl.textContent = String(count);
carouselTotalPagesEl.textContent = String(totalPages);

document.getElementById('next').addEventListener('click', () => {
  count = loopInRange(0, count + 1, totalPages);
  carouselSlide.style.transform = `translateX(${-width * count}px)`;
  carouselCurrentPageEl.textContent = String(count);
});

document.getElementById('prev').addEventListener('click', () => {
  count = loopInRange(0, count - 1, totalPages);
  carouselSlide.style.transform = `translateX(${-width * count}px)`;
  carouselCurrentPageEl.textContent = String(count);
});

function loopInRange(min: number, x: number, max: number): number {
  if (x > max) {
    return min;
  } else if (x < min) {
    return max;
  }

  return x;
}