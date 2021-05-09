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


// 오른쪽 상단 배지 fade in/out 애니메이션 적용
const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function(){//_.throttle(함수, 시간) > 스크롤시에 무차별적으로 핸들러가 실행되는것을 방지함.
  console.log("scroll!!");
  if(window.scrollY > 500) {
    // badgeEl.style.display = 'none';
    gsap.to(badgeEl, .6, {//gsap.to(적용할 요소, 걸리는 시간, 속성)
      opacity:0,
      display:'none'
    });

    gsap.to(toTopEl,.6, {
      x:0,
    });

  } else {
    // badgeEl.style.display = 'block';
    gsap.to(badgeEl, .6, {
      opacity:1,
      display:'block'
    });

    gsap.to(toTopEl,.6, {
      x:100,
    });
  }
},300));

toTopEl.addEventListener('click', function(){
  gsap.to(window, .7, {
    scrollTo:0
  });
});

//.visual에 커피들이 순차적으로 나타나게끔 애니메이션 적용
const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index){
  gsap.to(fadeEl, 1, {
    delay:(index + 1) * .7,
    opacity:1
  });
});

//공지에 스와이퍼 적용

new Swiper('.notice-line .swiper-container', {//new Swiper(선택자, 속성)
  direction:'vertical',
  autoplay:true,
  loop:true
});

new Swiper('.promotion .swiper-container', {
  slidesPerView: 3,
  spaceBetween:10,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay:5000
  },
  pagination: {
    el: '.promotion .swiper-pagination',
    clickable: true
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion  .swiper-next'
  }
});

new Swiper('.awards .swiper-container', {
  autoplay:true,
  loop:true,
  spaceBetween:10,
  slidesPerView: 5,
  navigation: {
    prevEl:'.awards .swiper-prev',
    nextEl:'.awards .swiper-next',
  }
});

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;

promotionToggleBtn.addEventListener('click', function(){
  isHidePromotion = !isHidePromotion;
  if(isHidePromotion) {
    //숨김 처리
    promotionEl.classList.add('hide');
  } else {
    //보임 처리
    promotionEl.classList.remove('hide');
  }
});

function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector, delay, size) {
  gsap.to(
    selector, 
    random(1.5, 2.5), 
    {
      y:size,
      repeat:-1,
      yoyo:true,
      ease: Power1.easeInOut,
      delay: random(0, delay)
  });
}

floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);

const spyEls = document.querySelectorAll('section.scroll-spy')

spyEls.forEach(function(spyEl){
  new ScrollMagic
  .Scene({
    triggerElement: spyEl,
    triggerHook :.8
  })
  .setClassToggle(spyEl, 'show')
  .addTo(new ScrollMagic.Controller());
});

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();