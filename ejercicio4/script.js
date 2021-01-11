const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

const width = carouselImages[0].clientWidth;
let count = 0;

carouselSlide.style.transition = 'transform 0.4s ease-in-out';

document.getElementById('next').addEventListener('click', () => {
  count = loopInRange(0, count + 1, carouselImages.length - 1);
  carouselSlide.style.transform = `translateX(${-width * count}px)`;
});

document.getElementById('prev').addEventListener('click', () => {
  count = loopInRange(0, count - 1, carouselImages.length - 1);
  carouselSlide.style.transform = `translateX(${-width * count}px)`;
});

function loopInRange(min, x, max) {
  if (x > max) {
    return min;
  } else if (x < min) {
    return max;
  }

  return x;
}