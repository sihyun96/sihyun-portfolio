const menuItems = document.querySelectorAll('.work-menu li');
const projects = document.querySelectorAll('.project');
const cards = document.querySelectorAll('.project-inner');

// 초기값: all 활성화 + 첫 번째 카드 표시
function initDefault() {
  // 모든 프로젝트/카드 표시
  projects.forEach(p => p.style.display = 'block');
  cards.forEach(c => c.style.display = 'block');

  // 첫 번째 카드 active
  cards.forEach(c => c.classList.remove('active'));
  if (cards.length > 0) cards[0].classList.add('active');
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

    // 필터 후 첫 카드 활성화
    const visibleCards = [...cards].filter(c => c.style.display !== 'none');

    cards.forEach(c => c.classList.remove('active'));

    if (visibleCards.length > 0) {
      visibleCards[0].classList.add('active');
    }

  });
});