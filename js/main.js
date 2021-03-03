const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");
// badge
const badgeEl = document.querySelector("header .badges");

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
