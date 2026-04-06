import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import './index.scss';

// Создаем глобальную переменную
let swiper;

document.addEventListener('DOMContentLoaded', () => {

  swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,

    breakpoints: {
      640: { slidesPerView: 2, spaceBetween: 20 },
      768: { slidesPerView: 3, spaceBetween: 30 },
    }
  });


  document.querySelector('.swiper-button-next').addEventListener('click', () => {
    swiper.slideNext()
  })

  document.querySelector('.swiper-button-prev').addEventListener('click', () => {
    swiper.slidePrev()
  })
});