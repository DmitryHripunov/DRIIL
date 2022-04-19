
if (document.querySelector('.js-swiper')) {
  document.querySelectorAll('.js-swiper').forEach((n) => {
    // eslint-disable-next-line no-unused-vars
    const benefitsSwiper = new Swiper(n.querySelector('.js-swiper-container'), {
      pagination: {
        el: n.querySelector('.js-swiper-pagination'),
      },
      navigation: {
        nextEl: '.js-swiper-next',
        prevEl: '.js-swiper-prev',
      },
      spaceBetween: 0,
      slidesPerView: 1,
    });
  });
}

