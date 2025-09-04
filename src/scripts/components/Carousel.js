import Swiper from 'swiper/bundle';

export default class Carousel {
  constructor(element) {
    this.element = element;
    this.options = {
      slidesPerView: 1,
      spaceBetween: 20,
      pagination: {
        el: this.element.querySelector('.swiper-pagination'),
        type: 'bullets',
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
    // Pour Swipers qui split pour viewport plus large que 768px
    if ('split' in this.element.dataset) {
      this.options.breakpoints = {
        768: {
          slidesPerView: 2.5,
        },
      };
    }

    // Pour autoplay Swipers
    if ('autoplay' in this.element.dataset) {
      this.options.autoplay = false;
      this.options.autoplay = {
        delay: 0.01,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
      };
    }

    // pour loop Swipers
    if ('loop' in this.element.dataset) {
      this.options.loop = true;
    }

    // pour loop slides
    if ('slides' in this.element.dataset) {
      // console.log();
      const chiffre = parseInt('slides', 10);
      this.options.slidesPerView = 3.5 || this.options.slidesPerView;
    }
  }

  init() {
    const swiper = new Swiper(this.element, this.options);
  }
}
