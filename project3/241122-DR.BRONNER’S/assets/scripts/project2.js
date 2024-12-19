 // a태그 속성 default
 $('a[href="#"]').on('click', function (e) {
  e.preventDefault();
});

// header on
$(window).on('scroll', function() {
  if(scrollY > 0) {
    $('.header-wrapper').addClass('on')
  }else {
    $('.header-wrapper').removeClass('on')
  }
});

// header 사라지고 내려오고
let prevScroll = window.scrollY;

const topHt = function() {
  let currentScroll = window.scrollY;
  const hTopHt = $('.header-wrapper').outerHeight();

  if (prevScroll > currentScroll) {
    $('header').css({ transform: 'translateY(0)' });
  } else {
    $('header').css({ transform: `translateY(-${hTopHt}px)` });
  }
  prevScroll = currentScroll;
};

$(window).on('scroll', topHt);


// 메뉴버튼
$('.btn-wrapper').on('click', function () {
  $('.header-nav').css({ left: 0 });
});

$('.close-btn').on('click', function () {
  $('.header-nav').css({ left: -450 });
});

// 메뉴 리스트
$('.menu-list > li > a').on('click', function (e) {
  e.preventDefault();

  // 클릭된 링크의 바로 아래 sub-menu 선택
  const currentSubMenu = $(this).next('.sub-menu');

  // 다른 열린 sub-menu를 모두 닫음
  $('.menu-list .sub-menu').not(currentSubMenu).removeClass('dropdown');

  // 클릭된 메뉴의 sub-menu를 열거나 닫음
  currentSubMenu.toggleClass('dropdown');
});

// 스와이퍼
const swiper1 = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  freeMode: true,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  breakpoints: {
    700: {
      slidesPerView: 2,  //브라우저가 990보다 클 때
      spaceBetween: 0,
    },
    985: {
      slidesPerView: 3,  //브라우저가 990보다 클 때
      spaceBetween: 30,
    },
    1400: {
      slidesPerView: 4,  //브라우저가 990보다 클 때
      spaceBetween: 50,
    },
    1700: {
      slidesPerView: 5,  //브라우저가 990보다 클 때
      spaceBetween: 50,
    },
  },
});

const swiper2 = new Swiper(".mainSwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true,
  }
});

const swiper3 = new Swiper(".bestSwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const swiper4 = new Swiper(".productSwiper", {
  slidesPerView: 2,
  spaceBetween: 10,
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true,
  }, breakpoints: {
    990: {//브라우저가 990보다 클 때
      slidesPerView: 2,
      spaceBetween: 0,
    }
  }
});

// 위로 버튼
$(window).on('scroll', function () {
  if (scrollY > 1000) {
    $('.go-to-up').css({ opacity: 1, pointerEvents: 'auto' });
  } else {
    $('.go-to-up').css({ opacity: 0, pointerEvents: 'none' });
  }
});

// 클릭하면 부드럽게 위로 스크롤!
$('.go-to-up').on('click', function (e) {
  e.preventDefault();
  scrollTo({
    behavior: 'smooth',
    top: 0
  });
});

gsap.registerPlugin(ScrollTrigger);

// rolled-over-text
gsap.utils.toArray('.rolled-over-text').forEach((txt)=>{
  const txtAni = gsap.timeline({
    scrollTrigger: {
      trigger:txt,
      start: 'bottom bottom',
      end: 'bottom bottom',
      scrub:1
    }
  });
  txtAni.fromTo(
    txt,
    { opacity:0, y:100, overflow:'hidden'},
    { opacity:1, y:0, ease:"expoScale(0.5,7,none)", duration:3}
  )
});

// 흐르는 글자
const text = document.querySelector('.txt-slide .text')
const textWt = text.offsetWidth;
gsap.fromTo(text,
  { x:0 },
  {
    x: -textWt /2,
    duration: 30,
    repeat:-1,
    rase:'linear'
  }
)