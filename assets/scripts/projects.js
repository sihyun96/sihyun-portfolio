// ***********프로젝트 데이터 (메인 홈 · ourWork 공통)
// 프로젝트 추가/수정은 이 배열만 고치면 두 페이지에 모두 반영됨
// - num      : 프로젝트 번호 (projectN/projectN.html 로 연결)
// - category : ourWork 필터 (web / uiux / react)
// - listName : ourWork 왼쪽 목록에 보이는 이름
// - img      : images/ 폴더의 카드 배경 이미지
// 배열 순서 = ourWork 목록 순서
// 메인 홈에 보일 프로젝트는 index.html 의 data-projects="1,2,3,4" 에서 번호로 지정

const PROJECTS = [
  {
    num: 7,
    category: 'react',
    listName: 'LYT APP PROJECT',
    date: '2025-10',
    title: '라잇 App UI/UX DESIGN',
    desc: '라잇 앱 개발 프로젝트 참여',
    tags: ['#팀프로젝트', '#Web App', '#UI/UX DESIGN', '#PUBLISHING', '#REACT NATIVE'],
    skill: 'Web App',
    img: 'content7-1.png'
  },
  {
    num: 1,
    category: 'uiux',
    listName: 'COMPOSE REDESIGN',
    date: '2024-09',
    title: 'COMPOSE COFFEE UI/UX DESIGN',
    desc: '컴포즈커피 앱 리디자인',
    tags: ['#팀프로젝트', '#UI/UX', '#DESIGN', '#FIGMA'],
    skill: 'UI Design',
    img: 'content1-1.png'
  },
  {
    num: 5,
    category: 'web',
    listName: 'COLAGENCY WEB',
    date: '2025-09',
    title: '콜에이전시 반응형 WEB',
    desc: '반응형 웹 제작',
    tags: ['#실무프로젝트', '#반응형', '#WEB', '#PUBLISHING'],
    skill: 'Web Design',
    img: 'content5-1.png'
  },
  {
    num: 6,
    category: 'web',
    listName: 'COLNPARTNERS WEB',
    date: '2025-10',
    title: '콜앤파트너스 반응형 WEB',
    desc: '반응형 웹 제작',
    tags: ['#실무프로젝트', '#반응형', '#PUBLISHING', '#워드프레스'],
    skill: 'Web Design',
    img: 'content6-1.png'
  },
  {
    num: 2,
    category: 'web',
    listName: 'Daelim REDESIGN',
    date: '2024-12',
    title: '대림 미술관 WEB DESIGN',
    desc: '웹 디자인',
    tags: ['#개인프로젝트', '#WEB', '#REDESIGN', '#PUBLISHING'],
    skill: 'Web Design',
    img: 'content2-1.png'
  },
  {
    num: 4,
    category: 'react',
    listName: 'HBAF REACT',
    date: '2024-12',
    title: 'HBAF REACT',
    desc: '바프 리액트 모바일 페이지',
    tags: ['#개인프로젝트', '#MOBILE', '#REACT', '#PUBLISHING'],
    skill: 'React Mobile',
    img: 'content4-1.png'
  },
  {
    num: 3,
    category: 'web',
    listName: 'DR.BRONNER’S WEB',
    date: '2024-11',
    title: "DR.BRONNER'S WEB DESIGN",
    desc: '닥터브로너스 반응형 웹 디자인',
    tags: ['#개인프로젝트', '#WEB', '#REDESIGN', '#PUBLISHING'],
    skill: 'Web Design',
    img: 'content3-1.png'
  }
];


// ***********렌더링
// 사이트 루트 경로 (이 파일 위치 기준이라 루트/하위 폴더 어디서 불러도 동작)
const SITE_ROOT = document.currentScript.src.replace(/assets\/scripts\/projects\.js.*$/, '');

const findProject = function (num) {
  return PROJECTS.find(function (p) { return p.num === num; });
};

const projectLink = function (p) {
  return SITE_ROOT + 'project' + p.num + '/project' + p.num + '.html';
};

// 카드 안쪽 (메인·ourWork 공통 마크업)
const projectCardHTML = function (p) {
  const tags = p.tags.map(function (t) { return '<li>' + t + '</li>'; }).join('');
  return `
    <a href="${projectLink(p)}">
      <div class="project-container" style="--card-img: url('${SITE_ROOT}images/${p.img}')">
        <div class="txt-box">
          <h4>${p.date}</h4>
          <h3>${p.title}</h3>
          <h4>${p.desc}</h4>
          <ul class="project-title-keyword flex-container">${tags}</ul>
        </div>
      </div>
    </a>
    <div class="project-title">
      <h2>PROJECT${p.num}</h2>
    </div>
    <div class="project-skill flex-container">
      <h3><span class="txt-deco miniflower"></span>${p.skill}</h3>
    </div>`;
};

// 메인 홈: <section data-projects="1,2,3,4"> 의 번호 순서대로 .project-wrapper 칸에 채움
const mainProjectSection = document.querySelector('[data-projects]');
if (mainProjectSection) {
  const nums = mainProjectSection.dataset.projects.split(',').map(function (n) { return Number(n.trim()); });
  const slots = mainProjectSection.querySelectorAll('.project-wrapper');

  slots.forEach(function (slot, i) {
    const p = findProject(nums[i]);
    if (p) {
      slot.innerHTML = projectCardHTML(p);
    } else {
      slot.remove(); // 번호가 없거나 잘못되면 칸 제거
    }
  });
}

// ourWork: 왼쪽 목록 + 오른쪽 카드 (배열 순서대로)
const workList = document.querySelector('.work .project-list');
const workCard = document.querySelector('.work .project-card');
if (workList && workCard) {
  workList.innerHTML = PROJECTS.map(function (p, i) {
    return `
    <a href="${projectLink(p)}">
      <li class="project project${i + 1} ani-fill" data-category="${p.category}">${p.listName}</li>
    </a>`;
  }).join('');

  workCard.innerHTML = PROJECTS.map(function (p, i) {
    return `
    <li class="project-inner project-inner${i + 1}${i === 0 ? ' active' : ''}" data-category="${p.category}">
      ${projectCardHTML(p)}
    </li>`;
  }).join('');
}
