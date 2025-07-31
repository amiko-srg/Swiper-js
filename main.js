const swiper = new Swiper('.mySwiper', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  on: {
    slideChange: function () {
      const activeSlide = swiper.slides[swiper.activeIndex];
      const bgColor = activeSlide.getAttribute('data-bg');
      document.body.style.backgroundColor = bgColor;
    }
  }
});

// Установить фон при загрузке
const initialBg = document.querySelector('.swiper-slide').getAttribute('data-bg');
document.body.style.backgroundColor = initialBg;