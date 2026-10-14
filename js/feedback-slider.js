
const swiper = new Swiper('.swiper-container', {
  loop: true,
  slidesPerView: 1, // Один слайд на екрані
  spaceBetween: 20, // Відстань між слайдами (якщо вони перемикаються)
  // Навіть на великих екранах примусово залишаємо 1 слайд
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 1,
    }
  },
 pagination: {
    el: '.pagination',
    clickable: true, // Дозволяє клікати на точки
  },
  navigation: {
    nextEl: '.btn-right',
    prevEl: '.btn-left',
  }
});






// const swiper = new Swiper('.swiper-container', {
//   loop: true,
//   slidesPerView: 1, // Один слайд на екрані
//   spaceBetween: 20, // Відстань між слайдами (якщо вони перемикаються)
//   // Навіть на великих екранах примусово залишаємо 1 слайд
//   breakpoints: {
//     320: {
//       slidesPerView: 1,
//     },
//     768: {
//       slidesPerView: 1,
//     },
//     1024: {
//       slidesPerView: 1,
//     }
//   },
//   pagination: {
//     el: '.pagination',
//     bulletClass: 'pagination-button',
//     bulletActiveClass: 'pagination-button-active',
//   },
//   navigation: {
//     nextEl: '.btn-right',
//     prevEl: '.btn-left',
//   }
// });