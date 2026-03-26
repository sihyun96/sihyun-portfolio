document.addEventListener("DOMContentLoaded", function() {
  const boxes = document.querySelectorAll('.info-box');

  const observerOptions = {
    root: null,
    // 화면 상하 35% 지점에 들어왔을 때 실행 (박스가 하나씩만 보이게 유도)
    rootMargin: '-35% 0px -35% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    // 모바일(너비 767px 이하)에서만 작동하도록 조건문 추가 가능
    if (window.innerWidth > 767) {
      boxes.forEach(b => b.classList.remove('active')); // PC에선 효과 제거
      return;
    }

    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // 현재 화면 중앙에 있는 요소만 active 추가
        boxes.forEach(b => b.classList.remove('active'));
        entry.target.classList.add('active');
      } else {
        entry.target.classList.remove('active');
      }
    });
  }, observerOptions);

  boxes.forEach(box => observer.observe(box));
});

document.addEventListener("DOMContentLoaded", function() {
    const slider = document.getElementById('createSlider');
    const dots = document.querySelectorAll('.dot');
    const steps = document.querySelectorAll('.step-item');
    
    // 1. 인디케이터 업데이트 및 active 효과 제어
    const updateSliderUI = () => {
        const scrollLeft = slider.scrollLeft;
        const width = slider.clientWidth; // offsetWidth 대신 clientWidth 사용
        const activeIndex = Math.round(scrollLeft / width);

        steps.forEach((step, idx) => {
            const box = step.querySelector('.info-box');
            if (idx === activeIndex) {
                if (box) box.classList.add('active');
                if (dots[idx]) dots[idx].classList.add('active');
            } else {
                if (box) box.classList.remove('active');
                if (dots[idx]) dots[idx].classList.remove('active');
            }
        });
    };

    slider.addEventListener('scroll', updateSliderUI);

    // 2. PC 마우스 드래그 스크롤 로직
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener('mousedown', (e) => {
        if (window.innerWidth < 768) return; // 모바일 제외
        isDown = true;
        slider.classList.add('active');
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener('mouseleave', () => {
        isDown = false;
    });

    slider.addEventListener('mouseup', () => {
        isDown = false;
        // 마우스를 떼었을 때 가장 가까운 슬라이드로 자석처럼 붙게 함 (Snap 효과 보정)
        const width = slider.clientWidth;
        const index = Math.round(slider.scrollLeft / width);
        slider.scrollTo({ left: index * width, behavior: 'smooth' });
    });

    slider.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 2; // 스크롤 속도 조절
        slider.scrollLeft = scrollLeft - walk;
    });

    // 초기 실행
    updateSliderUI();
});

// 화살표 함수는 기존 것 유지하되 width 계산만 보정
function moveSlider(direction) {
    const container = document.getElementById('createSlider');
    if (!container) return;
    
    const width = container.clientWidth;
    if (direction === 'next') {
        container.scrollBy({ left: width, behavior: 'smooth' });
    } else {
        container.scrollBy({ left: -width, behavior: 'smooth' });
    }
}


// ************************************

const scrollContainer = document.querySelector('.mobile-scroll-container');
const steps = document.querySelectorAll('.step-item');
const dots = document.querySelectorAll('.dot');

scrollContainer.addEventListener('scroll', () => {
  const scrollLeft = scrollContainer.scrollLeft;
  const width = window.innerWidth;
  
  // 현재 몇 번째 인덱스인지 계산
  const activeIndex = Math.round(scrollLeft / width);
  
  steps.forEach((step, idx) => {
    if(idx === activeIndex) {
      step.classList.add('is-visible');
      dots[idx].classList.add('active');
    } else {
      step.classList.remove('is-visible');
      dots[idx].classList.remove('active');
    }
  });

  
});

function moveSlider(direction) {
  const container = document.getElementById('createSlider');
  // 한 번 이동할 거리 = 아이템 너비 + 간격(gap)
  // 현재 아이템 하나가 차지하는 너비를 계산합니다.
  const itemWidth = container.querySelector('.step-item').offsetWidth + 20; 

  if (direction === 'next') {
    container.scrollBy({ left: itemWidth, behavior: 'smooth' });
  } else {
    container.scrollBy({ left: -itemWidth, behavior: 'smooth' });
  }
}

// 기존 Intersection Observer 로직은 그대로 두어 
// 버튼으로 움직여도 하단 글래스 박스 내용이 자동 업데이트되게 합니다.


// ******************************

document.addEventListener("DOMContentLoaded", function() {
  const manageCards = document.querySelectorAll('.manage-card');

  const manageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      } else {
        entry.target.classList.remove('active');
      }
    });
  }, {
    rootMargin: '-20% 0px -20% 0px', // 화면 중간쯤 왔을 때 켜짐
    threshold: 0.1
  });

  manageCards.forEach(card => manageObserver.observe(card));
});


// 기존 스크립트의 DOMContentLoaded 이벤트 핸들러 안에 이 부분을 추가하세요.
const wsCards = document.querySelectorAll('.ws-card');

const wsObserverOptions = {
    root: null,
    rootMargin: '0px 0px -10% 0px', // 카드가 화면 하단에서 10% 정도 올라왔을 때 실행
    threshold: 0.2
};

const wsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('ws-active');
        } else {
            // 다시 올라갔을 때 애니메이션을 초기화하고 싶지 않다면 아래 줄 삭제 가능
            entry.target.classList.remove('ws-active'); 
        }
    });
}, wsObserverOptions);

wsCards.forEach(card => wsObserver.observe(card));



// ********************************


// Profile 섹션 감시 대상
const pfItems = document.querySelectorAll('.pf-main-phone, .pf-side-item');

const pfObserverOptions = {
    root: null,
    rootMargin: '-20% 0px -20% 0px',
    threshold: 0.1
};

const pfObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('pf-active');
        } else {
            // 섹션을 벗어나면 다시 작아지게 하고 싶을 때 활성화
            entry.target.classList.remove('pf-active'); 
        }
    });
}, pfObserverOptions);

pfItems.forEach(item => pfObserver.observe(item));



// *********************************

// Lounge 섹션 감시 대상
const lgItems = document.querySelectorAll('.lg-item');

const lgObserverOptions = {
    root: null,
    rootMargin: '-10% 0px -10% 0px',
    threshold: 0.1
};

const lgObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('lg-active');
        } else {
            // 스크롤을 다시 올렸을 때 효과를 반복하고 싶다면 활성, 아니면 주석처리
            entry.target.classList.remove('lg-active'); 
        }
    });
}, lgObserverOptions);

lgItems.forEach(item => lgObserver.observe(item));