import { throttle } from "./util.js";

const spyEls = document.querySelectorAll("section.scroll-spy");

window.addEventListener(
  "scroll",
  throttle((e) => {
    const { scrollTop } = e.target.scrollingElement;

    if (scrollTop > 3900) {
      spyEls[3].classList.add("show");
    } else {
      spyEls[3].classList.remove("show");
    }

    if (scrollTop > 2600 && scrollTop < 3900) {
      spyEls[2].classList.add("show");
    } else {
      spyEls[2].classList.remove("show");
    }

    if (scrollTop > 2200 && scrollTop < 3200) {
      spyEls[1].classList.add("show");
    } else {
      spyEls[1].classList.remove("show");
    }

    if (scrollTop > 1700 && scrollTop < 2800) {
      spyEls[0].classList.add("show");
    } else {
      spyEls[0].classList.remove("show");
    }
  }, 200)
);

// * scrollMagic
// spyEls.forEach(function (spyEl) {
//   new ScrollMagic.Scene({
//     triggerElement: spyEl, // * 감시 대상
//     triggerHook: 0.8, // * 화면의 0.8 부분에 보이는 순간 실행
//   })
//     .setClassToggle(spyEls, "show")
//     .addTo(new ScrollMagic.Controller());
// });
