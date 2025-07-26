// stack-icons 영역에 이미지를 동적으로 추가하는 함수
function addStackIcon(src, alt = '') {
  const stackIcons = document.querySelector('.stack-icons');
  if (!stackIcons) return;
  const iconDiv = document.createElement('div');
  iconDiv.className = 'stack-icon';
  const img = document.createElement('img');
  img.src = src;
  img.alt = alt;
  iconDiv.appendChild(img);
  stackIcons.appendChild(iconDiv);
}

// info-container 내부에 이름, 직함, 연락처, 링크, 버튼 등을 동적으로 추가하는 함수들
function setProfileInfo(name, title) {
  const info = document.querySelector('.profile-info');
  if (!info) return;
  info.innerHTML = `
    <h2>${name}</h2>
    <p>${title}</p>
  `;
}

function setContactInfo(email, phone) {
  const contact = document.querySelector('.contact');
  if (!contact) return;
  contact.innerHTML = `
    <div><b>Email</b> ${email}</div>
    <div><b>Phone</b> ${phone}</div>
  `;
}

function setLinks(links) {
    // links: [{href: '...', icon: '...'}, ...]
    const linksDiv = document.querySelector('.links');
    if (!linksDiv) return;
    linksDiv.innerHTML = '';
    links.forEach(link => {
      const a = document.createElement('a');
      a.href = link.href;
      a.innerHTML = link.icon;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      linksDiv.appendChild(a);
    });
}

function setDownloadButton(text, onClick) {
  const btn = document.querySelector('.download-btn');
  if (!btn) return;
  btn.textContent = text;
  if (onClick) {
    btn.onclick = onClick;
  }
}

function setAboutMe(test) {
    const aboutMe = document.querySelector('.aboutme-container');
    if (!aboutMe) return;
    aboutMe.innerHTML = `
      <div>${test}</div>
    `;
  }

// 범용 섹션 추가 함수 (경력, 교육 등)
function setSection(containerSelector, sectionTitle, items) {
  // containerSelector: 섹션을 넣을 컨테이너 선택자 (예: '.work-container', '.education-container')
  // sectionTitle: 섹션 제목 (예: 'Work Experience', 'Education')
  // items: [{company, title, date, desc} 또는 원하는 구조]
  const container = document.querySelector(containerSelector);
  if (!container) return;
  container.innerHTML = `
    <h2>${sectionTitle}</h2>
    <div class="experience"></div>
  `;
  const listDiv = container.querySelector('.experience');
  items.forEach(item => {
    const itemDiv = document.createElement('div');
    itemDiv.className = 'job'; // 필요에 따라 'education', 'award' 등으로 변경 가능
    itemDiv.innerHTML = `
      <div class="job-company">${item.company || item.school || item.org || ''}</div>
      <div class="job-title">${item.title || item.degree || item.award || ''}</div>
      <div class="job-date">${item.date || ''}</div>
      <div class="job-desc">${item.desc || ''}</div>
    `;
    listDiv.appendChild(itemDiv);
  });
}

function downloadResumeAsPDF() {
  // assets/RESUME.pdf 파일을 직접 다운로드
  const link = document.createElement('a');
  link.href = 'assets/RESUME.pdf';
  link.download = 'RESUME.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// 포트폴리오 아이템 추가 함수
function addPortfolioItems(items) {
  const portfolioItems = document.querySelector('.portfolio-items');
  if (!portfolioItems) return;
  
  items.forEach(item => {
    const itemDiv = document.createElement('div');
    itemDiv.className = 'portfolio-item';
    
    // 모든 태그를 하나의 배열로 통합
    const tags = Array.isArray(item.tags) ? item.tags : [];
    
    itemDiv.innerHTML = `
      <div class="portfolio-item-content">
        <h3>${item.title}</h3>
        <div class="portfolio-summary" style="font-size:0.98em;color:#aaa;margin-bottom:15px;">${item.summary || ''}</div>
        <div class="portfolio-meta">
          ${tags.map(tag => `<span class="portfolio-tag">${tag}</span>`).join('')}
        </div>
        <p>${item.description}</p>
        <div class="portfolio-links">
          ${item.demo ? 
            `<a href="${item.demo}" target="_blank" rel="noopener noreferrer" class="portfolio-link">Demo</a>` : 
            `<button class="portfolio-link disabled" disabled>Demo</button>`
          }
          ${item.github ? 
            `<a href="${item.github}" target="_blank" rel="noopener noreferrer" class="portfolio-link">GitHub</a>` : 
            `<button class="portfolio-link disabled" disabled>GitHub</button>`
          }
        </div>
      </div>
    `;
    portfolioItems.appendChild(itemDiv);
  });
}

// Devicon CDN의 SVG 아이콘 사용 및 info-container 동적 데이터 예시
window.addEventListener('DOMContentLoaded', function() {
  // 기본 다크모드 적용
  document.body.classList.add('dark-mode');

  // stack icons
  addStackIcon('assets/stack-html5.svg', 'html5');
  addStackIcon('assets/stack-css.svg', 'css');
  addStackIcon('assets/stack-javascript.svg', 'javascript');
  // addStackIcon('assets/stack-node-js.svg', 'node-js');
  addStackIcon('assets/stack-react.svg', 'react');
  addStackIcon('assets/stack-java.svg', 'java');
  addStackIcon('assets/stack-spring.svg', 'spring');
  addStackIcon('assets/stack-mysql.svg', 'mysql');
  addStackIcon('assets/stack-oracle.svg', 'oracle');
  addStackIcon('assets/stack-cpp.svg', 'cpp');
  addStackIcon('assets/stack-csharp.svg', 'csharp');
  addStackIcon('assets/stack-python.svg', 'python');
  // addStackIcon('assets/stack-aws.svg', 'aws');
  addStackIcon('assets/stack-docker.svg', 'docker');
  // addStackIcon('assets/stack-kubernetes.svg', 'kubernetes');
  addStackIcon('assets/stack-unreal-engine.svg', 'unreal-engine');

  // info-container 동적 데이터 예시
  setProfileInfo('유명훈', '풀스택 개발자');
  setContactInfo('mhoo999@naver.com', '010-5220-9785');
  setLinks([
    {
        href: 'https://github.com/mhoo999',
        icon: `<img src="assets/link-github.svg" alt="github" style="width: 36px; height: 36px; filter: invert(1);">`
    },
    {
      href: 'https://techoonology.notion.site/Study-8212a4fbbba5427bb463607cb46bfc59?pvs=4',
      icon: `<img src="assets/link-notion.svg" alt="notion" style="width: 36px; height: 36px;">`
    }
  ]);
  setDownloadButton('이력서 다운로드 ⬇️', downloadResumeAsPDF);

  // Work Experience 섹션 동적 추가
  setSection('.work-container', 'Work Experience', [
    {
      company: '네오락',
      title: '게임 개발자',
      date: '2024.09 - 2024.11 (3개월)',
      desc: '- 실시간 전략 시뮬레이션 게임에서 캐릭터 계약, 배치, 전투 참여 UI 전반을 설계 및 개발<br>- 캐릭터 정보를 실시간으로 조회하고, 각 건물/전투에 배치하는 인터페이스 구현<br>- UI 컴포넌트를 모듈화하여 재사용성과 유지보수성 확보'
    },
    {
      company: '아이락 커뮤니케이션',
      title: '기획자',
      date: '2021.06 - 2023.08 (2년 2개월)',
      desc: '- LF 물류센터 WMS 구축 프로젝트에 기획자로 참여, 현장 인터뷰 및 실무 프로세스 분석 수행<br>- 현대자동차 임직원 대상 사내 차량 대여 키오스크 앱 화면 설계 전담<br>- ETRI가 주관하는 산업현장 인공지능 플랫폼 프로젝트에 컨소시엄으로 참여하여 화면 설계를 담당'
    }
  ]);

  // Education 섹션 동적 추가 (예시)
  setSection('.education-container', 'Education', [
    {
      school: '청년취업 사관학교',
      degree: 'MSA 기반 자바 개발자 과정',
      date: '2025.04 - 2025.11 (7개월)',
      desc: '- HTML/CSS/JavaScript, React/Next.js, TypeScript 프론트엔드 개발 방법<br>- 자바 프로그래밍, SpringBoot/SpringMVC/SpringSecurity, 데이터베이스 및 SQL 활용<br>- Linux, Docker, Kubernetes, Jenkins, AWS 서비스 및 배포'
    },
    {
      school: '스파르타 코딩클럽',
      degree: 'Spring 백엔드 개발자 과정',
      date: '2024.12 - 2025.04 (5개월) ',
      desc: '- 자바 문법 및 객체지향 프로그래밍, 자료구조, 데이터베이스<br>- 자바 스프링, JPA, QueryDSL, RESTful API 설계 및 개발<br>- Docker, CI/CD 파이프라인, AWS 클라우드 환경에서의 서비스 배포'
    },
    {
      school: '청년취업 사관학교',
      degree: '언리얼엔진 개발자 과정',
      date: '2023.08 - 2024.03 (7개월)',
      desc: '- C++, 언리얼 엔진 5 기반 3D 콘텐츠 제작 및 최적화<br>- VR 인터랙션, 네트워크 통신, 메타버스 프로젝트 구현<br>- 팀 프로젝트 중심의 실전형 커리큘럼 수료'
    }
  ]);
  
  setAboutMe('<b style="font-size: 1.2em;">안녕하세요. 꾸준히 학습하는 개발자 유명훈입니다.</b><br>프론트엔드부터 백엔드, 클라우드 인프라까지 두루 경험하여 서비스 전반을 다룰 수 있습니다. AI 시대의 개발자는 하나의 기술에 머무르지 않고, 새로운 도구를 빠르게 익혀 다양한 문제를 유연하게 해결하는 역량이 중요하다고 생각합니다. 그래서 저는 AI를 개발에 적극 활용하여 다양한 테스트 프로젝트를 진행하며 경험을 쌓아가고 있습니다. 변화에 민첩하게 대응할 수 있도록 지속해서 성장해 나가고 있습니다.<br>최근에는 MCP 기반 도구들을 활용해 Figma를 제어하는 "Talk to Figma"나 작업을 자동 분해하는 "Task-Master AI" 플러그인 등을 실험하며, AI와 협업하는 개발 워크플로우를 익히고 있습니다.');

  // 라이트/다크 모드 FAB 버튼 기능
  const fab = document.getElementById('theme-fab');
  if (!fab) return;
  fab.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
      fab.style.background = '#fff';
      fab.querySelector('img').style.filter = 'invert(0)';
    } else {
      fab.style.background = '#222';
      fab.querySelector('img').style.filter = 'invert(1)';
    }
  });

  // 포트폴리오 아이템 추가
  addPortfolioItems([
    {
      title: 'Book Manager',
      summary: '도서 관리 시스템 - 프론트엔드와 백엔드 분리 아키텍처',
      tags: ['팀 프로젝트', '4명', 'Spring', 'React', '풀스택'],
      description: '- Java Spring Boot (백엔드), React (프론트엔드)<br>- RESTful API 설계 및 구현으로 프론트엔드와 백엔드 분리<br>- 도서 등록, 조회, 수정, 삭제 기능 구현<br>- 사용자 인증 및 권한 관리 시스템<br>- 데이터베이스 설계 및 연동',
      demo: null,
      github: 'https://github.com/mhoo999/book-manager-backend'
    },
    {
      title: 'Lets-try',
      summary: '반지 시뮬레이션 웹 서비스',
      tags: ['개인 프로젝트', '시뮬레이터', '손가락 인식'],
      description: '- React, Next.js, TypeScript, html2canvas, Supabase, vercel<br>- Google API를 활용한 손가락 인식 기능 구현<br>- html2canvas를 사용한 반지-손가락 이미지 합성<br>- Supabase DB 를 사용하여 반지 이미지 업로드<br>- Versel 배포(서버리스)',
      demo: 'https://lets-try-mu.vercel.app/',
      github: 'https://github.com/mhoo999/lets-try'
    },
    {
      title: '딱 대기',
      summary: '한정 수량의 상품을 세일하여 판매하는 상황을 가정한 주문/이벤트 API 프로젝트',
      tags: ['팀 프로젝트', '4명', 'Redis', '분산락', '동시성 제어'],
      description: '- Java Spring, Redis<br>- 짧은 시간에 다수의 주문이 생성될 경우 발생할 수 있는 동시성 문제 고려<br>- Redis 의 DelayQueue 기능을 하는 Zset 을 사용하여 프로모션의 시작 날짜와 종료 날짜를 체크하여 해당 날짜가 되었을 때 프로모션을 활성화 또는 비활성화<br>- 다중 서버에서 동일한 작업 수행을 방지하기 위해 분산락 기능을<br>사용하여 구현',
      demo: 'https://youtu.be/p4AiTCeyYo4',
      github: 'https://github.com/mhoo999/ddak-daegi'
    },
    {
      title: '배달 어플리케이션',
      summary: '배달의 민족 애플리케이션과 같이 손님과 사장님 계정을 구분하여 주문/리뷰 기능을 구현한 프로젝트',
      tags: ['팀 프로젝트', '5명', 'Spring', 'JWT', '세션'],
      description: '- Java Spring, JWT<br>- 계정 권한에 따른 기능을 분리<br>- 손님 계정은 주문을 진행하고, 리뷰를 작성<br>- 사장님 계정은 가게와 메뉴를 만들고, 주문을 받고 리뷰에 대댓글을 달 수 있도록 개발<br>- 세션 기반 인증/인가 기능을 구현',
      demo: 'https://youtu.be/Qy7XUUgAt7o',
      github: 'https://github.com/mhoo999/delivery-service'
    },
    {
      title: 'Newsfeed',
      summary: '친구 기반 피드 제공 SNS 서비스',
      tags: ['팀 프로젝트', '4명', 'Spring'],
      description: '- Java Spring<br>- 회원가입, 로그인 기능부터 게시물 작성, 댓글 작성 기능<br>- 친구 추가 기능을 만들어 친구 사용자의 게시물만 피드에서 볼 수 있는 기능을 개발',
      demo: 'https://youtu.be/VIdJOUFs28w?si=0__PYSj-xTIPBUwW',
      github: 'https://github.com/mhoo999/news-feed'
    }
  ]);
});



