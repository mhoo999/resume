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
  const target = document.querySelector('.container'); // 이력서 전체를 감싸는 div
  if (!target) return;

  html2canvas(target, { scale: 2 }).then(canvas => {
    const imgData = canvas.toDataURL('image/png');
    const pdf = new window.jspdf.jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4'
    });

    // A4 크기(mm)
    const pageWidth = 210;
    const pageHeight = 297;

    // 캔버스 비율에 맞게 이미지 크기 계산
    const imgWidth = pageWidth;
    const imgHeight = canvas.height * imgWidth / canvas.width;

    pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
    pdf.save('resume.pdf');
  });
}

// Devicon CDN의 SVG 아이콘 사용 및 info-container 동적 데이터 예시
window.addEventListener('DOMContentLoaded', function() {
  // 기본 다크모드 적용
  document.body.classList.add('dark-mode');

  // stack icons
  addStackIcon('assets/stack-cpp.svg', 'cpp');
  addStackIcon('assets/stack-csharp.svg', 'csharp');
  addStackIcon('assets/stack-java.svg', 'java');
  addStackIcon('assets/stack-spring.svg', 'spring');
  addStackIcon('assets/stack-python.svg', 'python');
  addStackIcon('assets/stack-mysql.svg', 'mysql');

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
      date: '2024 - 2024',
      desc: '게임 로직 설계 및 UI 개발.'
    },
    {
      company: '아이락 커뮤니케이션',
      title: '기획자',
      date: '2021 - 2023',
      desc: '프로젝트 기획 및 관리, 화면 설계, 요구사항정의서 작성 등'
    }
  ]);

  // Education 섹션 동적 추가 (예시)
  setSection('.education-container', 'Education', [
    {
      school: '청년취업 사관학교',
      degree: 'MSA 기반 자바 개발자 과정',
      date: '2025 - 2025',
      desc: '프론트엔드, 백엔드, 데이터베이스, 클라우드 인프라(AWS) 등 전반적인 개발 환경 구축 및 개발 경험.'
    },
    {
      school: '스파르타 코딩클럽',
      degree: 'Spring 백엔드 개발자 과정',
      date: '2024 - 2025',
      desc: '자바 기본 문법 및 스프링 프레임워크 학습. JPA, Spring Security, JWT 등 활용.'
    },
    // {
    //   school: '청년취업 사관학교',
    //   degree: 'XR 콘텐츠 개발자 과정',
    //   date: '2023 - 2024',
    //   desc: 'Unreal Engine, C++ 기본 문법 학습 및 게임 개발 프로젝트 진행.'
    // }
  ]);
  
  setAboutMe('<b style="font-size: 1.2em;">안녕하세요. 변화에 강한 풀스택 개발자 유명훈입니다.</b><br>프론트엔드부터 백엔드, 클라우드 인프라까지 두루 경험하여 서비스 전반을 다룰 수 있습니다. AI 시대의 개발자는 하나의 기술에 머무르지 않고, 새로운 도구를 빠르게 익히고, 다양한 문제를 유연하게 해결하는 역량이 중요하다고 생각합니다. AI를 개발에 적극 활용하며, 변화에 민첩하게 대응할 수 있도록 성장해 나가고 있습니다.');

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
});

