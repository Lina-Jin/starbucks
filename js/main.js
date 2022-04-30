const searchEL = document.querySelector('.search');
const searchInputEL = searchEL.querySelector('input');

searchEL.addEventListener('click', function() {
  searchInputEL.focus();
}); 
searchInputEL.addEventListener('focus', function(){
  searchEL.classList.add('focused');
  searchInputEL.setAttribute('placeholder','통합검색')
});
searchInputEL.addEventListener('blur', function(){
  searchEL.classList.remove('focused');
  searchInputEL.setAttribute('placeholder','')
});

const badgeEL= document.querySelector("header .badges");
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function(){
  console.log(window.scrollY);
  if (window.scrollY > 500) {
    gsap.to (badgeEL, .6, {
      opacity: 0,
      display: 'none',
    });
    gsap.to(toTopEl, .2, {
      x: 0
    });
  } else {
    gsap.to (badgeEL, .6, {
      opacity: 1,
      display: 'block',
    });
    gsap.to(toTopEl, .2, {
      x: 100
    });
  }
},300));
toTopEl.addEventListener('click', function(){
  gsap.to(window, .7, {
    scrollTo:0 //화면의 위치를 0 픽셀 지점으로 옮겨준다
  })
});
// _. throttle(함수, 시간)
// gsap.to(처리할 요소, 애니메이션 지속시간(초), 옵션)

const fadeELs = document.querySelectorAll('.visual .fade-in');
fadeELs.forEach(function (fadeEL, index){
  // gsap.to(처리할 요소, 애니메이션 지속시간(초), 옵션)
  gsap.to(fadeEL, 1, {
    opacity: 1,
    delay: (index + 1) * .7,
  })
})

// new Swiper(요소, 옵션);
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical', // 수직 슬라이드
  autoplay: true, // 자동 재생 여부
  loop: true // 반복 재생 여부
});

new Swiper('.promotion .swiper-container', {
  slidesPerView: 3, // 한번에 보여주는 슬라이드 개수
  spaceBetween: 10, //슬라이드 사이 여백
  centeredSlides: true,//1번 슬라이드 가운데
  autoplay: {
    delay: 5000 //5초 밀리세컨단위
  }, // 자동 재생 여부
  loop: true, // 반복 재생 여부
  pagination:{
    el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
    clickable: true //사용자의 페이지 번호 요소 제어 가능 여부
  },
  navigation: {
    prevEl:'.promotion .swiper-prev',
    nextEl:'.promotion .swiper-next'
  }
}); 
// awards
new Swiper ('.awards .swiper-container', {
  autoplay: true,
  loop: true,
  slidesPerView: 5, // 한번에 보여주는 슬라이드 개수
  spaceBetween: 30, //슬라이드 사이 여백
  navigation: {
    prevEl:'.awards .swiper-prev',
    nextEl:'.awards .swiper-next'
  }
});

// 프로모션 숨김/보임 처리
const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function(){
  isHidePromotion = !isHidePromotion
  if (isHidePromotion) {
    promotionEl.classList.add('hide');
  } else {
    promotionEl.classList.remove('hide');
  }
})

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector, delay, size) {
  gsap.to(selector, random(1.5, 2.5), {
    y: size,
    repeat:-1,
    yoyo: true,
    ease: Power1.easeInOut,
    delay: random(0,delay)
  });
}

floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);

// ScrollMagic 
const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function(spyEl) {
  new ScrollMagic
  .Scene({
    triggerElement: spyEl,
    triggerHook: .8
  })
  .setClassToggle(spyEl, 'show')
  .addTo(new ScrollMagic.Controller());
});

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();//년도출력
