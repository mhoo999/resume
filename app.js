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

// Devicon CDN의 SVG 아이콘 사용 및 info-container 동적 데이터 예시
window.addEventListener('DOMContentLoaded', function() {
  // stack icons
  addStackIcon('https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg', 'cpp');
  addStackIcon('https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg', 'csharp');
  addStackIcon('https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', 'java');
  addStackIcon('https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg', 'spring');
  addStackIcon('https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', 'python');
  addStackIcon('https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', 'mysql');

  // info-container 동적 데이터 예시
  setProfileInfo('유명훈', '백엔드 개발자');
  setContactInfo('mhoo999@naver.com', '010-5220-9785');
  setLinks([
    {
        href: 'https://github.com/mhoo999',
        icon: `<img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/github.svg" alt="github" style="width: 24px; height: 24px; filter: invert(1); vertical-align: middle;">`
    }
  ]);
  setDownloadButton('이력서 다운로드 ⬇️', function() {
    alert('다운로드!');
  });
}); 