const menuItems = document.querySelectorAll('.work-menu li');
const projects = document.querySelectorAll('.project');
const cards = document.querySelectorAll('.project-inner');

// 마지막 보이는 project에만 border-bottom 적용
function updateLastBorder() {
  const visibleProjects = [...projects].filter(p => p.style.display !== 'none');
  
  // 모든 project border-bottom 초기화
  projects.forEach(p => p.style.borderBottom = 'none');
  
  // 마지막 보이는 project에만 border-bottom 추가
  if (visibleProjects.length > 0) {
    visibleProjects[visibleProjects.length - 1].style.borderBottom = '1px solid #000';
  }
}

// 초기값: all 활성화 + 첫 번째 카드 표시
function initDefault() {
  projects.forEach(p => p.style.display = 'block');
  cards.forEach(c => c.style.display = 'block');

  cards.forEach(c => c.classList.remove('active'));
  if (cards.length > 0) cards[0].classList.add('active');

  updateLastBorder();
}

initDefault();

// project hover 시 대응하는 project-inner 표시
projects.forEach((project, index) => {
  project.addEventListener('mouseenter', () => {
    cards.forEach(c => c.classList.remove('active'));
    cards[index].classList.add('active');
  });
});

menuItems.forEach(menu => {
  menu.addEventListener('click', () => {

    const filter = menu.dataset.filter;

    // 메뉴 active
    menuItems.forEach(m => m.classList.remove('active'));
    menu.classList.add('active');

    // 필터링
    projects.forEach((project, index) => {
      const category = project.dataset.category;

      if (filter === 'all' || filter === category) {
        project.style.display = 'block';
        cards[index].style.display = 'block';
      } else {
        project.style.display = 'none';
        cards[index].style.display = 'none';
      }
    });

    // 마지막 border-bottom 업데이트
    updateLastBorder();

    // 필터 후 첫 카드 활성화
    const visibleCards = [...cards].filter(c => c.style.display !== 'none');
    cards.forEach(c => c.classList.remove('active'));
    if (visibleCards.length > 0) {
      visibleCards[0].classList.add('active');
    }

  });
});
