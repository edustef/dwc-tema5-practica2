"use strict";

var carouselSlide = document.querySelector('.carousel-slide');
var carouselImages = document.querySelectorAll('.carousel-slide img');
var width = carouselImages[0].clientWidth;
var count = 0;
carouselSlide.style.transition = 'transform 0.4s ease-in-out';
document.getElementById('next').addEventListener('click', function () {
  count = loopInRange(0, count + 1, carouselImages.length - 1);
  carouselSlide.style.transform = "translateX(".concat(-width * count, "px)");
});
document.getElementById('prev').addEventListener('click', function () {
  count = loopInRange(0, count - 1, carouselImages.length - 1);
  carouselSlide.style.transform = "translateX(".concat(-width * count, "px)");
});

function loopInRange(min, x, max) {
  if (x > max) {
    return min;
  } else if (x < min) {
    return max;
  }

  return x;
}