// to-top
const toTopEl = document.querySelector("#to-top");

// * to-top
toTopEl.addEventListener("click", function () {
  console.log("tt");
  gsap.to(window, 0.7, {
    scrollTo: 0,
  });
});
