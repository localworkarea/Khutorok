import Swiper from 'swiper';
import { Navigation, EffectFade, Pagination, EffectCoverflow } from 'swiper/modules';
/*
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
*/

import "./slider.scss";
// Повний набір стилів з node_modules
// import 'swiper/css/bundle';
import 'swiper/css/effect-coverflow';

// Ініціалізація слайдерів
function initSliders() {
	if (document.querySelector('.section-0__slider')) { 
		new Swiper('.section-0__slider', {
			modules: [Navigation, EffectFade, Pagination],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			speed: 600,

			//loop: true,
			//preloadImages: false,
			//lazy: true,

			effect: 'fade',
			fadeEffect: {
  		  crossFade: true
  		},

			pagination: {
				el: '.section-0__slider .swiper-pagination',
				clickable: true,
			},

			navigation: {
				prevEl: '.section-0__slider .swiper-button-prev',
				nextEl: '.section-0__slider .swiper-button-next',
			},
			/*
			breakpoints: {
				640: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
			// Події
			on: {

			}
		});
	}
	if (document.querySelector('.section-3__slider')) { 
  const sliderEl = document.querySelector('.section-3__slider'); // сохраняем родителя

  new Swiper(sliderEl, {
    modules: [Navigation, EffectCoverflow],
    observer: true,
    observeParents: true,
    slidesPerView: 1,
    spaceBetween: 0,
    speed: 600,
    initialSlide: 1,

    // отключаем свайп
    allowTouchMove: false,
    simulateTouch: false,

    effect: 'coverflow',
    coverflowEffect: {
      rotate: 0,          // без поворота
      stretch: "80%",     // сдвиг слайдов по оси X
      depth: 300,         // глубина
      scale: 0.8,         // уменьшение боковых
      modifier: 1,        
      slideShadows: false
    },

    navigation: {
      prevEl: '.section-3__slider .swiper-button-prev',
      nextEl: '.section-3__slider .swiper-button-next',
    },

    on: {
      slideChangeTransitionStart() {
        sliderEl.classList.add('--transition');
      },
      slideChangeTransitionEnd() {
        sliderEl.classList.remove('--transition');
      }
    }
  });
}


	// if (document.querySelector('.swiper')) { 
	// 	new Swiper('.swiper', {
	// 		modules: [Navigation],
	// 		observer: true,
	// 		observeParents: true,
	// 		slidesPerView: 1,
	// 		spaceBetween: 0,
	// 		speed: 800,

	// 		//loop: true,
	// 		//preloadImages: false,
	// 		//lazy: true,

	// 		effect: 'fade',
	// 		pagination: {
	// 			el: '.swiper-pagination',
	// 			clickable: true,
	// 		},

	// 		navigation: {
	// 			prevEl: '.swiper-button-prev',
	// 			nextEl: '.swiper-button-next',
	// 		},
	// 		/*
	// 		breakpoints: {
	// 			640: {
	// 				slidesPerView: 1,
	// 				spaceBetween: 0,
	// 				autoHeight: true,
	// 			},
	// 			768: {
	// 				slidesPerView: 2,
	// 				spaceBetween: 20,
	// 			},
	// 			992: {
	// 				slidesPerView: 3,
	// 				spaceBetween: 20,
	// 			},
	// 			1268: {
	// 				slidesPerView: 4,
	// 				spaceBetween: 30,
	// 			},
	// 		},
	// 		*/
	// 		// Події
	// 		on: {

	// 		}
	// 	});
	// }
}
document.querySelector('[data-fls-slider]') ?
	window.addEventListener("load", initSliders) : null