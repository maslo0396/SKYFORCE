import './index.scss'
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

document.addEventListener('DOMContentLoaded', () => {
  // Проверяем наличие Swiper
  const swiperElement = document.querySelector('.swiper');
  
  if (!swiperElement) {
    console.error('Swiper element not found!');
    return;
  }
  
  console.log('Initializing Swiper...'); // Для отладки
  
  try {
    const swiper = new Swiper('.swiper', {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      
      // Пагинация
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      
      // Навигация
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      
      // Адаптивность
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        }
      },
      
      // Дополнительные настройки
      grabCursor: true,
      observer: true,
      observeParents: true,
    });
    
    console.log('Swiper initialized successfully!');
    
  } catch (error) {
    console.error('Swiper initialization error:', error);
  }
});