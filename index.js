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

  // 첫 화면: 전체 header / 스크롤 중: 왼쪽에 [햄버거][SH]만 고정 (크기는 layout.css .is-compact)
  $('#header').toggleClass('is-compact', currentScroll > 0);

  // 스크롤을 내리면 열려 있던 메뉴 닫기
  if (currentScroll > prevScroll) closeMenu();
  prevScroll = currentScroll;
};

// 햄버거 메뉴: 전체 메뉴 열기/닫기
const closeMenu = function () {
  $('#header').removeClass('is-open');
  // 메뉴가 닫히면 mouseleave가 안 생길 수 있어서 떠올라 있던 메뉴 칸을 직접 내림
  $('.global-menu .lift-card').each(function () {
    this.style.removeProperty('--face-x');
    this.style.removeProperty('--face-y');
  });
  $('.menu-btn').attr({ 'aria-expanded': 'false', 'aria-label': '메뉴 열기' });
};

$('.menu-btn').on('click', function () {
  const isOpen = $('#header').toggleClass('is-open').hasClass('is-open');
  $(this).attr({ 'aria-expanded': String(isOpen), 'aria-label': isOpen ? '메뉴 닫기' : '메뉴 열기' });
});

// ESC로 메뉴 닫기
$(document).on('keydown', function (e) {
  if (e.key === 'Escape') closeMenu();
});



// 메뉴 이동 이벤트 (새로고침해서 중간 위치로 열려도 바로 맞춤)
$(window).on('scroll', topHt);
topHt();
// 메뉴·로고(HOME) 클릭시 섹션이동
$('.global-menu li a, .header-logo').on('click', function (e) {

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

// view our work 버튼 · lift-card(프로젝트 스킬 박스, contact 링크):
// hover 시 카드가 바닥에서 떠올라 마우스를 따라 움직임
// 기본 위치(오른쪽 위로 들림) + 카드 중심에서 마우스까지 거리의 일부만큼 이동
// 프로젝트 카드는 projects.js가 나중에 그려서 document에 위임
const FACE_LIFT_X = 16;
const FACE_LIFT_Y = -16;
const FACE_FOLLOW = 0.12;
const LIFT_TARGETS = '.view-work-btn, .lift-card';

$(document).on('mousemove', LIFT_TARGETS, function (e) {
  if (noMouseMq.matches) return;

  // 바깥 칸은 제자리에 있고 안쪽 face만 움직이므로 바깥 칸 중심 기준으로 계산
  const rect = this.getBoundingClientRect();
  const dx = e.clientX - (rect.left + rect.width / 2);
  const dy = e.clientY - (rect.top + rect.height / 2);

  this.style.setProperty('--face-x', `${FACE_LIFT_X + dx * FACE_FOLLOW}px`);
  this.style.setProperty('--face-y', `${FACE_LIFT_Y + dy * FACE_FOLLOW}px`);
});

$(document).on('mouseleave', LIFT_TARGETS, function () {
  this.style.removeProperty('--face-x');
  this.style.removeProperty('--face-y');
});
// 큰 제목 입체 그림자: 마우스에 가까운 글자일수록 위로 튀어나옴
// 글자를 왼쪽 위로 올린 만큼 그림자를 늘려서, 그림자 바닥은 제자리에 있고 글자만 솟아오르게 보임
// 기본 두께는 CSS(.shadow-container), 글자별 값은 여기서 inline style로 덮어씀
const SHADOW_BASE = 6;    // 기본 두께 (CSS와 같은 값)
const SHADOW_MAX = 18;    // 마우스 바로 위 글자의 두께
const SHADOW_RADIUS = 350; // 이 거리(px) 안의 글자만 두꺼워짐
const SHADOW_OUTLINE = '0 1px #000, 1px 0 #000, 0 -1px #000, -1px 0 #000';

// 레이어 수를 항상 SHADOW_MAX개로 맞춰야 transition이 부드럽게 이어짐 (남는 레이어는 depth에 겹침)
const buildShadow = function (depth) {
  const layers = [SHADOW_OUTLINE];
  for (let i = 1; i <= SHADOW_MAX; i++) {
    const d = Math.min(i, depth).toFixed(1);
    layers.push(`${d}px ${d}px #000`);
  }
  return layers.join(', ');
};

// 제목 텍스트를 글자별 span으로 나눔 (<br>·공백은 그대로 둠)
const splitChars = function (el) {
  Array.from(el.childNodes).forEach(function (node) {
    if (node.nodeType !== Node.TEXT_NODE) return;
    const frag = document.createDocumentFragment();
    Array.from(node.textContent).forEach(function (ch) {
      if (/\s/.test(ch)) {
        frag.appendChild(document.createTextNode(ch));
        return;
      }
      const span = document.createElement('span');
      span.className = 'shadow-char';
      span.textContent = ch;
      frag.appendChild(span);
    });
    node.replaceWith(frag);
  });
};

document.querySelectorAll('.shadow-container').forEach(splitChars);
const shadowChars = Array.from(document.querySelectorAll('.shadow-char'));

let shadowFrame = null;
const updateShadow = function (mouseX, mouseY) {
  // 위치를 먼저 다 읽고 나서 스타일을 씀 (읽기·쓰기를 섞으면 레이아웃 계산이 반복됨)
  // 글자가 이미 올라가 있으면 그만큼 빼서 원래 자리 기준으로 거리 계산
  const centers = shadowChars.map(function (ch) {
    const r = ch.getBoundingClientRect();
    const lift = parseFloat(ch.style.top) || 0;
    return { x: r.left - lift + r.width / 2, y: r.top - lift + r.height / 2 };
  });
  shadowChars.forEach(function (ch, i) {
    const dist = Math.hypot(mouseX - centers[i].x, mouseY - centers[i].y);
    const near = Math.max(0, 1 - dist / SHADOW_RADIUS);
    const lift = (SHADOW_MAX - SHADOW_BASE) * near;
    ch.style.left = `${-lift}px`;
    ch.style.top = `${-lift}px`;
    ch.style.textShadow = buildShadow(SHADOW_BASE + lift);
  });
};

$(document).on('mousemove', function (e) {
  if (noMouseMq.matches) return;
  // 한 프레임에 한 번만 계산
  if (shadowFrame) return;
  shadowFrame = requestAnimationFrame(function () {
    updateShadow(e.clientX, e.clientY);
    shadowFrame = null;
  });
});

// 태블릿 이하로 바뀌면 글자별 그림자를 지우고 CSS 고정 그림자로
noMouseMq.addEventListener('change', function () {
  if (noMouseMq.matches) {
    shadowChars.forEach(function (ch) {
      ch.style.textShadow = '';
      ch.style.left = '';
      ch.style.top = '';
    });
  }
});

// SKILLS TOOLS 박스 높이를 메인 카드 높이와 같게 (979px 이하에서 --main-card-h 사용)
const mainCard = document.querySelector('.main');
if (mainCard && document.querySelector('.skill-tool-title')) {
  new ResizeObserver(function () {
    document.documentElement.style.setProperty('--main-card-h', mainCard.offsetHeight + 'px');
  }).observe(mainCard);
}



