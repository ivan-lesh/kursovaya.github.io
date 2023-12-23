let swiper_1505 = document.getElementById('swiper-1505');
let swiper_def = document.getElementById('swiper-def');

function updateSlidesPerView() {
  if (window.screen.width <= 1505) {
    if (!swiper_def.classList.contains('hide')) {
      swiper_def.classList.add('hide');
      swiper_1505.classList.add('active');
    } 
  } else if (swiper_def.classList.contains('hide')) {
    swiper_def.classList.remove('hide');
    swiper_1505.classList.remove('active');
  }
}

window.addEventListener('resize', updateSlidesPerView);
updateSlidesPerView();