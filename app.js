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

// Devicon CDN의 SVG 아이콘 사용
window.addEventListener('DOMContentLoaded', function() {
  addStackIcon('https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg', 'cpp');
  addStackIcon('https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg', 'csharp');
  addStackIcon('https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', 'java');
  addStackIcon('https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg', 'spring');
  addStackIcon('https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', 'python');
  addStackIcon('https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', 'mysql');
}); 