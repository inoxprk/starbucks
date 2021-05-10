// 검색창 동적 애니메이션 적용
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function(){
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function(){
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder','통합검색');
});

searchInputEl.addEventListener('blur', function(){
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder','');
});

// 푸터의 copyright 부분에 연도를 자동으로 업데이트 해줌
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();