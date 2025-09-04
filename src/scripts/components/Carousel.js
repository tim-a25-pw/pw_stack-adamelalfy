import Swiper from 'swiper/bundle';

export default class Carousel {
  constructor(element) {
    this.element = element;
    this.options = {
      slidesPerView: 1,
      spaceBetween: 0,
      pagination: {
        el: this.element.querySelector('.swiper-pagination'),
        type: 'bullets',
        clickable: true,
      },
      navigation: {
        nextEl: this.element.querySelector('.swiper-button-next'),
        prevEl: this.element.querySelector('.swiper-button-prev'),
      },
    };
    this.setOptions();
    this.init();
  }

  setOptions() {
    // Pour vertical Swipers
    if ('vertical' in this.element.dataset) {
      this.options.direction = 'vertical';
    }
  }

  init() {
    const swiper = new Swiper(this.element, this.options);
  }
}
