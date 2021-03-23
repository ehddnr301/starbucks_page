const spyEls = document.querySelectorAll("section.scroll-spy");

// * scrollMagic
spyEls.forEach(function (spyEl) {
  new ScrollMagic.Scene({
    triggerElement: spyEl, // * 감시 대상
    triggerHook: 0.8, // * 화면의 0.8 부분에 보이는 순간 실행
  })
    .setClassToggle(spyEls, "show")
    .addTo(new ScrollMagic.Controller());
});
