
const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  slidesPerView: 5,
  
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    
    320: {
      slidesPerView: 2,
    },
    
    952: {
      slidesPerView: 3,
    },
    
    1200: {
      slidesPerView: 4,
    },

    1400: {
      slidesPerView: 5,
    },
  }
});
