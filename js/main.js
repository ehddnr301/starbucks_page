const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");
// badge
const badgeEl = document.querySelector("header .badges");
// fade
const fadeEls = document.querySelectorAll(".fade-in");
// promotion
const promotionEl = document.querySelector(".promotion");
const promotionToggleBtn = document.querySelector(".toggle-promotion");
let isHidePromotion = false;
// scrollMagic
const spyEls = document.querySelectorAll("section.scroll-spy");

searchEl.addEventListener("click", function () {
  searchInputEl.focus();
});

searchInputEl.addEventListener("focus", function () {
  searchEl.classList.add("focused");
  searchInputEl.setAttribute("placeholder", "통합검색");
});
searchInputEl.addEventListener("blur", function () {
  // focus가 해제되면
  searchEl.classList.remove("focused");
  searchInputEl.setAttribute("placeholder", "");
});

// badges
window.addEventListener(
  "scroll",
  _.throttle(
    function () {
      if (window.scrollY > 500) {
        gsap.to(badgeEl, 0.6, {
          opacity: 0,
          display: "none",
        }); // 애니메이션(요소, 지속시간, 옵션)
      } else {
        gsap.to(badgeEl, 0.6, {
          opacity: 1,
          display: "block",
        });
      }
    },
    300 // 0.3초 단위로 부하를 줘서 함수가 우르르 실행되는것을 방지 = throttle
  )
);

// * fade-in
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * 0.7,
    opacity: 1,
  });
});

// * swiperjs
new Swiper(".notice-line .swiper-container", {
  direction: "vertical",
  autoplay: true,
  loop: true,
});
new Swiper(".promotion .swiper-container", {
  slidesPerView: 3, // 몇개를 한번에 볼지
  spaceBetween: 10, // 간격
  centeredSlides: true, // 중앙시작
  autoplay: {
    delay: 5000,
  },
  loop: true,
  pagination: {
    el: ".promotion .swiper-pagination", // 페이지 번호 요소 선택자
    clickable: true, // 제어 가능
  },
  navigation: {
    prevEl: ".promotion .swiper-prev",
    nextEl: ".promotion .swiper-next",
  },
});

// 프로모션
promotionToggleBtn.addEventListener("click", function () {
  isHidePromotion = !isHidePromotion;
  if (isHidePromotion) {
    // 숨김처리
    promotionEl.classList.add("hide");
  } else {
    promotionEl.classList.remove("hide");
  }
});

// random
function random(min, max) {
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}
// floating
function floatingObject(selector, delay, size) {
  gsap.to(selector, random(1.5, 2.5), {
    y: size,
    repeat: -1,
    yoyo: true,
    ease: Power1.easeInOut,
    delay: random(0, delay),
  });
}
floatingObject(".floating1", 1, 15);
floatingObject(".floating2", 0.5, 15);
floatingObject(".floating3", 1.5, 20);

// scrollMagic
spyEls.forEach(function (spyEl) {
  new ScrollMagic.Scene({
    triggerElement: spyEl, // * 감시 대상
    triggerHook: 0.8,
  })
    .setClassToggle()
    .addTo();
});
