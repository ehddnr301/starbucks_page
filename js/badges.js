import { toTopEl } from "./toTop.js";
import { throttle } from "./util.js";

const badgeEl = document.querySelector("header .badges");

// badges
window.addEventListener(
  "scroll",
  throttle(
    function () {
      if (window.scrollY > 500) {
        gsap.to(badgeEl, 0.6, {
          opacity: 0,
          display: "none",
        }); // 애니메이션(요소, 지속시간, 옵션)
        gsap.to(toTopEl, 0.2, {
          x: 0,
        });
      } else {
        gsap.to(badgeEl, 0.6, {
          opacity: 1,
          display: "block",
        });
        gsap.to(toTopEl, 0.2, {
          x: 100,
        });
      }
    },
    300 // 0.3초 단위로 부하를 줘서 함수가 우르르 실행되는것을 방지 = throttle
  )
);
