const promotionEl = document.querySelector(".promotion");
const promotionToggleBtn = document.querySelector(".toggle-promotion");
let isHidePromotion = false;

// * 프로모션
promotionToggleBtn.addEventListener("click", function () {
  isHidePromotion = !isHidePromotion;
  if (isHidePromotion) {
    // 숨김처리
    promotionEl.classList.add("hide");
  } else {
    promotionEl.classList.remove("hide");
  }
});
