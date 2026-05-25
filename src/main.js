import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import './index.scss';

// Только изображения из src/img/swiper/
import photo1 from './img/swiper/photo1.jpg';
import photo2 from './img/swiper/photo2.jpg';
import photo3 from './img/swiper/photo3.jpg';
import photo4 from './img/swiper/photo4.jpg';
import photo5 from './img/swiper/photo5.jpg';
import photo6 from './img/swiper/photo6.png';
import photo7 from './img/swiper/photo7.png';
import photo8 from './img/swiper/photo8.png';
import photo9 from './img/swiper/photo9.png';
import photo10 from './img/swiper/photo10.png';
import photo11 from './img/swiper/photo11.png';
import photo12 from './img/swiper/photo12.png';
import photo13 from './img/swiper/photo13.png';
import photo14 from './img/swiper/photo14.png';
import photo15 from './img/swiper/photo15.png';
import photo16 from './img/swiper/photo16.png';

const imagePaths = [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8, photo9, photo10, photo11, photo12, photo13, photo14, photo15, photo16];

let swiper;

function createSlides() {
  const swiperWrapper = document.querySelector('.swiper-wrapper');
  if (!swiperWrapper) return;
  
  swiperWrapper.innerHTML = '';
  
  imagePaths.forEach((path, index) => {
    const slide = document.createElement('div');
    slide.className = 'swiper-slide job__slide';
    
    const img = document.createElement('img');
    img.src = path;
    img.alt = `Проект ${index + 1}`;
    img.loading = 'lazy';
    
    slide.appendChild(img);
    swiperWrapper.appendChild(slide);
  });
  
  console.log(`✅ Создано ${imagePaths.length} слайдов`);
}

function initSwiper() {
  swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    navigation: false,
    breakpoints: {
      640: { slidesPerView: 2, spaceBetween: 20 },
      768: { slidesPerView: 3, spaceBetween: 30 },
    },
    autoplay: { delay: 4000, disableOnInteraction: false },
  });
}

function setupNavigation() {
  const nextBtn = document.querySelector('.swiper-button-next');
  const prevBtn = document.querySelector('.swiper-button-prev');
  
  if (nextBtn) {
    nextBtn.addEventListener('click', (e) => {
      e.preventDefault();
      swiper?.slideNext();
    });
  }
  
  if (prevBtn) {
    prevBtn.addEventListener('click', (e) => {
      e.preventDefault();
      swiper?.slidePrev();
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  createSlides();
  initSwiper();
  setupNavigation();
});