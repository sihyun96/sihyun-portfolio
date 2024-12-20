$('a[href="#"]').on('click', function (e) {
  e.preventDefault();
});

// lottie
const best = lottie.loadAnimation({
  container: document.getElementById('best'), // 애니메이션 DOM 요소 (대상)
  renderer: 'svg', // 렌더링 방식:svg, canvas, html
  loop: true, // 반복
  autoplay: true, // 자동재생
  path: './images/lottie/best.json' // 경로
});

const smile1 = lottie.loadAnimation({
  container: document.getElementById('smile1'), // 애니메이션 DOM 요소 (대상)
  renderer: 'svg', // 렌더링 방식:svg, canvas, html
  loop: true, // 반복
  autoplay: true, // 자동재생
  path: './images/lottie/smile1.json' // 경로
});

const smile2 = lottie.loadAnimation({
  container: document.getElementById('smile2'), // 애니메이션 DOM 요소 (대상)
  renderer: 'svg', // 렌더링 방식:svg, canvas, html
  loop: true, // 반복
  autoplay: true, // 자동재생
  path: './images/lottie/smile2.json' // 경로
});

const smile3 = lottie.loadAnimation({
  container: document.getElementById('smile3'), // 애니메이션 DOM 요소 (대상)
  renderer: 'svg', // 렌더링 방식:svg, canvas, html
  loop: true, // 반복
  autoplay: true, // 자동재생
  path: './images/lottie/smile3.json' // 경로
});
const flower3 = lottie.loadAnimation({
  container: document.getElementById('flower3'), // 애니메이션 DOM 요소 (대상)
  renderer: 'svg', // 렌더링 방식:svg, canvas, html
  loop: true, // 반복
  autoplay: true, // 자동재생
  path: './images/lottie/flower3.json' // 경로
});

const flower2 = lottie.loadAnimation({
  container: document.getElementById('flower2'), // 애니메이션 DOM 요소 (대상)
  renderer: 'svg', // 렌더링 방식:svg, canvas, html
  loop: true, // 반복
  autoplay: true, // 자동재생
  path: './images/lottie/flower2.json' // 경로
});

const flower1 = lottie.loadAnimation({
  container: document.getElementById('flower1'), // 애니메이션 DOM 요소 (대상)
  renderer: 'svg', // 렌더링 방식:svg, canvas, html
  loop: true, // 반복
  autoplay: true, // 자동재생
  path: './images/lottie/flower1.json' // 경로
});

const lightbulb = lottie.loadAnimation({
  container: document.getElementById('lightbulb'), // 애니메이션 DOM 요소 (대상)
  renderer: 'svg', // 렌더링 방식:svg, canvas, html
  loop: true, // 반복
  autoplay: true, // 자동재생
  path: './images/lottie/lightbulb.json' // 경로
});

const roket = lottie.loadAnimation({
  container: document.getElementById('roket'), // 애니메이션 DOM 요소 (대상)
  renderer: 'svg', // 렌더링 방식:svg, canvas, html
  loop: true, // 반복
  autoplay: true, // 자동재생
  path: './images/lottie/roket.json' // 경로
});

const send = lottie.loadAnimation({
  container: document.getElementById('send'), // 애니메이션 DOM 요소 (대상)
  renderer: 'svg', // 렌더링 방식:svg, canvas, html
  loop: true, // 반복
  autoplay: true, // 자동재생
  path: './images/lottie/send.json' // 경로
});

const keyword = lottie.loadAnimation({
  container: document.getElementById('keyword'), // 애니메이션 DOM 요소 (대상)
  renderer: 'svg', // 렌더링 방식:svg, canvas, html
  loop: true, // 반복
  autoplay: true, // 자동재생
  path: './images/lottie/keyword.json' // 경로
});

const keyword_slide = lottie.loadAnimation({
  container: document.getElementById('keyword_slide'), // 애니메이션 DOM 요소 (대상)
  renderer: 'svg', // 렌더링 방식:svg, canvas, html
  loop: true, // 반복
  autoplay: true, // 자동재생
  path: './images/lottie/keyword_slide.json' // 경로
});

const light_fff = lottie.loadAnimation({
  container: document.getElementById('light_fff'), // 애니메이션 DOM 요소 (대상)
  renderer: 'svg', // 렌더링 방식:svg, canvas, html
  loop: true, // 반복
  autoplay: true, // 자동재생
  path: './images/lottie/light_fff.json' // 경로
});

// 모든 '.miniflower' 요소에 애니메이션을 적용
document.querySelectorAll('.miniflower').forEach((element) => {
  lottie.loadAnimation({
    container: element,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: './images/lottie/miniflower.json'
  });
});

document.querySelectorAll('.light1').forEach((element) => {
  lottie.loadAnimation({
    container: element,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: './images/lottie/light1.json'
  });
});

document.querySelectorAll('.light2').forEach((element) => {
  lottie.loadAnimation({
    container: element,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: './images/lottie/light2.json'
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
let prevScroll = window.scrollY;

const topHt = function () {
  let currentScroll = window.scrollY;
  const hTopHt = 400;

  if (currentScroll === 0) {
    // 첫 화면으로 돌아갈 때, header를 원래 위치로 복구
    $('header').css({
      transform: 'translateY(0)',  // 위치 초기화
      transform: 'translateX(-50%)',
      'top': '',  // 원래 위치로 복구
      'height': '',  // 원래 높이로 복구
       backgroundColor: 'var(--color-black)',
       color: 'var(--color-white)'
    });
    $('.deco-wrapper').css({
      height: ''
    });
    $('.deco-wrapper svg').css({
      height: '60px'
    });
    $('.menu').css({
      height: ''
    });
    $('header .header-container .menu .global-menu li a').css({
      height: '', lineHeight: ''
    });
    $('header .header-container-right').css({
       height: ''
    });
    $('header .header-container-right h2').css({
      fontSize:''
   });
  } else if (prevScroll > currentScroll) {
    // 스크롤을 올렸을 때 header가 나타나며 top: 0
    $('header').css({
      transform: 'translateY(0)',
      transform: 'translateX(-50%)',
      'top': '0',  // top을 0으로 설정
      height: '50px',
      opacity:1,
      backgroundColor: 'var(--color-white)',
      color: 'var(--color-black)'
    });
    $('.deco-wrapper').css({
      height: '50px', backgroundColor: 'var(--color-black)'
    });
    $('.deco-wrapper svg').css({
      height: '25px'
    });
    $('.menu').css({
      height: '50px'
    });
    $('header .header-container .menu .global-menu li a').css({
      height: '50px', lineHeight: '50px'
    });
    $('header .header-container-right').css({
       height: '50px'
    });
    $('header .header-container-right h2').css({
      fontSize:'18px'
   });

  } else {
    // 스크롤을 내렸을 때 header를 숨김
    $('header').css({
      transform: `translateY(-${hTopHt}px)`,
      transform: 'translateX(-50%)',
      opacity: 0
       // header 숨기기
    });
  }
  prevScroll = currentScroll;
};


// 메뉴 이동 이벤트
$(window).on('scroll', topHt);
// 메뉴 클릭시 섹션이동
$('.global-menu li a').each(function (idx, elem) {
  // console.log(`index: ${idx}, value: ${elem}`);
  $(elem).on('click', function (e) {
    e.preventDefault();

    const getbox = $('section').eq(idx).offset().top - 200;
    scrollTo({
      top: getbox,
      behavior: 'smooth'
    })
  });
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
    // 현재 클릭한 항목의 list-box-txt만 표시
    $('.list-box-txt').eq(index).toggle();
  });
});

// 마우스 이벤트

const movingTxt = function (e) {
  let txtX = e.clientX;
  let txtY = e.clientY;

  // 마우스 위치에 따라 텍스트 위치와 그림자 설정
  $('.main-title, .footer-title').css({
    left: 0 - txtX / 50,
    top: 0 - txtY / 200,
    textShadow: `${-22 + txtX / 100}px ${txtY / 100}px 0px #000`,
  });

  requestAnimationFrame(movingTxt); // 애니메이션 반복
};

// 이벤트 핸들러 등록
$(document).on('mousemove', movingTxt);



