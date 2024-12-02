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
  $(window).on('scroll', function() {
    if(scrollY>800) {
      $('.up-btn').css({ opacity: 1, pointerEvents: 'auto' });
    } else{
      $('.up-btn').css({ opacity: 0, pointerEvents: 'none'});
    };
   });

   $('.up-btn').on('click', function (e) {
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
    { opacity:0, y:170, overflow:'hidden'},
    { opacity:1, y:0, 
      ease:"expo.inOut", 
      duration:10}
  )
});