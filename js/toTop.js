// to-top
export const toTopEl = document.querySelector("#to-top");

// * to-top
toTopEl.addEventListener("click", function () {
  gsap.to(window, 0.7, {
    scrollTo: 0,
  });
});
