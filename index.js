$('a[href="#"]').on('click', function (e) {
  e.preventDefault();
});


// lottie
// 현재 페이지가 하위 폴더에 있으면 '../', 루트면 './'
const scriptSrc = document.querySelector('script[src*="index.js"]').src;
const scriptDir = scriptSrc.substring(0, scriptSrc.lastIndexOf('/') + 1);
const lottieBase = scriptDir + 'images/lottie/';

const best = lottie.loadAnimation({
  container: document.getElementById('best'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: lottieBase + 'best.json'
});

const smile1 = lottie.loadAnimation({
  container: document.getElementById('smile1'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: lottieBase + 'smile1.json'
});

const smile2 = lottie.loadAnimation({
  container: document.getElementById('smile2'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: lottieBase + 'smile2.json'
});

const smile3 = lottie.loadAnimation({
  container: document.getElementById('smile3'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: lottieBase + 'smile3.json'
});

const flower3 = lottie.loadAnimation({
  container: document.getElementById('flower3'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: lottieBase + 'flower3.json'
});

const flower2 = lottie.loadAnimation({
  container: document.getElementById('flower2'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: lottieBase + 'flower2.json'
});

const flower1 = lottie.loadAnimation({
  container: document.getElementById('flower1'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: lottieBase + 'flower1.json'
});

const lightbulb = lottie.loadAnimation({
  container: document.getElementById('lightbulb'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: lottieBase + 'lightbulb.json'
});

const roket = lottie.loadAnimation({
  container: document.getElementById('roket'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: lottieBase + 'roket.json'
});

const send = lottie.loadAnimation({
  container: document.getElementById('send'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: lottieBase + 'send.json'
});

const keyword = lottie.loadAnimation({
  container: document.getElementById('keyword'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: lottieBase + 'keyword.json'
});

const keyword_slide = lottie.loadAnimation({
  container: document.getElementById('keyword_slide'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: lottieBase + 'keyword_slide.json'
});

const light_fff = lottie.loadAnimation({
  container: document.getElementById('light_fff'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: lottieBase + 'light_fff.json'
});

// 모든 '.miniflower' 요소에 애니메이션을 적용
document.querySelectorAll('.miniflower').forEach((element) => {
  lottie.loadAnimation({
    container: element,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: lottieBase + 'miniflower.json'
  });
});

document.querySelectorAll('.light1').forEach((element) => {
  lottie.loadAnimation({
    container: element,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: lottieBase + 'light1.json'
  });
});

document.querySelectorAll('.light2').forEach((element) => {
  lottie.loadAnimation({
    container: element,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: lottieBase + 'light2.json'
  });
});


// up btn
$(window).on('scroll', function () {
  if (scrollY > 800) {
    $('.up-btn').css({ opacity: 1, pointerEvents: 'auto' });
  } else {
    $('.up-btn').css({ opacity: 0, pointerEvents: 'none' });
  };
});

$('.up-btn').on('click', function (e) {
  e.preventDefault();
  scrollTo({
    behavior: 'smooth',
    top: 0
  });
});

// rolled-over-text
gsap.utils.toArray('.rolled-over-text').forEach((txt) => {
  const txtAni = gsap.timeline({
    scrollTrigger: {
      trigger: txt,
      start: 'bottom bottom',
      end: 'bottom bottom',
      scrub: 1
    }
  });
  txtAni.fromTo(
    txt,
    { opacity: 0, y: 170, overflow: 'hidden' },
    {
      opacity: 1, y: 0,
      ease: "expo.inOut",
      duration: 10
    }
  )
});

// header 사라지고 내려오고
// let prevScroll = window.scrollY;

// const topHt = function () {
//   let currentScroll = window.scrollY;
//   const hTopHt = 400;

//   if (currentScroll === 0) {
//     // 첫 화면으로 돌아갈 때, header를 원래 위치로 복구
//     $('header').css({
//       transform: 'translateY(0)',  // 위치 초기화
//       transform: 'translateX(-50%)',
//       'top': '',  // 원래 위치로 복구
//       'height': '',  // 원래 높이로 복구
//        backgroundColor: 'var(--color-black)',
//        color: 'var(--color-white)'
//     });
//     $('.deco-wrapper').css({
//       height: ''
//     });
//     $('.deco-wrapper svg').css({
//       height: '60px'
//     });
//     $('.menu').css({
//       height: ''
//     });
//     $('header .header-container .menu .global-menu li a').css({
//       height: '', lineHeight: ''
//     });
//     $('header .header-container-right').css({
//        height: ''
//     });
//     $('header .header-container-right h2').css({
//       fontSize:''
//    });
//   } else if (prevScroll > currentScroll) {
//     // 스크롤을 올렸을 때 header가 나타나며 top: 0
//     $('header').css({
//       transform: 'translateY(0)',
//       transform: 'translateX(-50%)',
//       'top': '0',  // top을 0으로 설정
//       height: '50px',
//       opacity:1,
//       backgroundColor: 'var(--color-white)',
//       color: 'var(--color-black)'
//     });
//     $('.deco-wrapper').css({
//       height: '50px', backgroundColor: 'var(--color-black)'
//     });
//     $('.deco-wrapper svg').css({
//       height: '25px'
//     });
//     $('.menu').css({
//       height: '50px'
//     });
//     $('header .header-container .menu .global-menu li a').css({
//       height: '50px', lineHeight: '50px'
//     });
//     $('header .header-container-right').css({
//        height: '50px'
//     });
//     $('header .header-container-right h2').css({
//       fontSize:'18px'
//    });

//   } else {
//     // 스크롤을 내렸을 때 header를 숨김
//     $('header').css({
//       transform: `translateY(-${hTopHt}px)`,
//       transform: 'translateX(-50%)',
//       opacity: 0
//        // header 숨기기
//     });
//   }
//   prevScroll = currentScroll;
// };

let prevScroll = window.scrollY;
const topHt = function () {
  let currentScroll = window.scrollY;

  if (currentScroll === 0) {
    // 첫 화면으로 돌아갈 때, header를 원래 위치로 복구
    $('#header').removeClass('is-compact is-hidden');
  } else if (prevScroll > currentScroll) {
    // 스크롤을 올렸을 때 header가 작아진 채로 top: 0에 나타남 (크기는 layout.css .is-compact)
    $('#header').addClass('is-compact').removeClass('is-hidden');
  } else {
    // 스크롤을 내렸을 때 header를 숨김
    $('#header').addClass('is-hidden');
    closeMenu();
  }
  prevScroll = currentScroll;
};

// 햄버거 메뉴 (1359px 이하)
const closeMenu = function () {
  $('#header').removeClass('is-open');
  $('.menu-btn').attr({ 'aria-expanded': 'false', 'aria-label': '메뉴 열기' });
};

$('.menu-btn').on('click', function () {
  const isOpen = $('#header').toggleClass('is-open').hasClass('is-open');
  $(this).attr({ 'aria-expanded': String(isOpen), 'aria-label': isOpen ? '메뉴 닫기' : '메뉴 열기' });
});



// 메뉴 이동 이벤트
$(window).on('scroll', topHt);
// 메뉴 클릭시 섹션이동
$('.global-menu li a').on('click', function (e) {

  const href = $(this).attr('href');
  closeMenu();

  if (href.startsWith('#')) {
    e.preventDefault();

    const target = $(href);
    const headerHeight = $('header').outerHeight();

    $('html, body').animate({
      scrollTop: target.offset().top - headerHeight
    }, 500);
  }
});

// skill 

// check-box 클릭 이벤트
$('.check-box').on('click', function () {
  // 클릭된 check-box의 상태 확인
  const isActive = $(this).hasClass('active');

  // 모든 check-box와 list-box-txt 비활성화
  $('.check-box').removeClass('active');

  // 현재 클릭된 요소만 활성화 (토글 동작 가능)
  if (!isActive) {
    $(this).addClass('active');
  }
});


// 처음에 모든 skill 리스트를 숨김
$('.list-box-txt').hide();

// HTML-CSS와 Figma 내용은 초기 상태에서 보이도록 설정
$('.list-box-txt.HTML-CSS').show();
$('.list-box-txt.Figma').show();

// 각 체크박스 클릭 이벤트 처리
$('.check-box').each(function (index) {
  $(this).on('click', function () {
    // 모든 list-box-txt 숨기기
    $('.list-box-txt').hide();
    $('.check-list p').css({ backgroundColor: 'transparent' });
    // 현재 클릭한 항목의 list-box-txt만 표시
    $('.list-box-txt').eq(index).toggle();
    $(this).siblings('p').css({ backgroundColor: '#ffcd38' });

    // 접근성: 선택 상태를 스크린리더에 알림
    $('.check-box').attr('aria-pressed', 'false');
    $(this).attr('aria-pressed', String($(this).hasClass('active')));
  });
});

// 마우스 이벤트
// 태블릿·모바일(979px 이하)은 마우스 효과 없이 CSS 고정 그림자 사용
const noMouseMq = window.matchMedia('(max-width: 979px)');
const $movingTitles = $('.main-title,.skill-tool-title .title, .footer-title');

const movingTxt = function (e) {
  if (noMouseMq.matches) return;

  let txtX = e.clientX;
  let txtY = e.clientY;

  // 마우스 위치에 따라 텍스트 위치와 그림자 설정
  $movingTitles.css({
    left: 0 - txtX / 50,
    top: 0 - txtY / 200,
    textShadow: `${-22 + txtX / 100}px ${txtY / 100}px 0px #000`,
  });
};

// 태블릿 이하로 바뀌면 마우스로 바뀐 값 초기화
noMouseMq.addEventListener('change', function () {
  if (noMouseMq.matches) {
    $movingTitles.css({ left: '', top: '', textShadow: '' });
  }
});

// 이벤트 핸들러 등록
$(document).on('mousemove', movingTxt);

// SKILLS TOOLS 박스 높이를 메인 카드 높이와 같게 (979px 이하에서 --main-card-h 사용)
const mainCard = document.querySelector('.main');
if (mainCard && document.querySelector('.skill-tool-title')) {
  new ResizeObserver(function () {
    document.documentElement.style.setProperty('--main-card-h', mainCard.offsetHeight + 'px');
  }).observe(mainCard);
}



