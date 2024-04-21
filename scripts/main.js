// Бургер жи есть
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("burger").addEventListener("click", function() {
      document.querySelector(".header").classList.toggle("open")
  });
})
// Закрыть меню при нажатии на Esc
window.addEventListener('keydown', (e) => {
  if (e.key === "Escape") {
      document.querySelector(".header").classList.remove("open")
  }
});

// Закрыть меню при клике вне его
document.getElementById("menu").addEventListener('click', event => {
  event._isClickWithInMenu = true;
});
document.getElementById("burger").addEventListener('click', event => {
  event._isClickWithInMenu = true;
});
document.body.addEventListener('click', event => {
  if (event._isClickWithInMenu) return;
  document.querySelector(".header").classList.remove("open")
});

// Слайдер-1
const slider1 = new Swiper('.slider1', {
  direction: 'horizontal',
  // loop: true,
  speed: 500,
  effect: 'slider', //slider, cards, coverflow, flip, fade, cube (способ перелистывания),
  centeredSlidesBounds: true,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    570: {
      slidesPerView: 2,
    },
    870: {
      slidesPerView: 3,
    },
    1150: {
      slidesPerView: 4,
    },
    1440: {
      slidesPerView: 5,
    },
  }
});

// Слайдер-2
const slider2 = new Swiper('.slider2', {
  direction: 'horizontal',
  // loop: true,
  speed: 500,
  effect: 'slider', //slider, cards, coverflow, flip, fade, cube (способ перелистывания),
  // centeredSlides: true,
  centeredSlidesBounds: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    650: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    870: {
      slidesPerView: 2,
    },
    1150: {
      slidesPerView: 2,
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 46,
    },
  }
});

// Акордеон
const accord = document.querySelector('.accord');
const btn = document.querySelector('.accord__btn');

btn.addEventListener('click', () => {
  accord.classList.toggle('accord_active');
  if (btn.innerText === 'SEE MORE') {
    btn.innerText = 'back';
  } else {
    btn.innerText = 'See More';
  }
});

// ИНИЦИАЛИЗИРОВАТЬ АОС
AOS.init();