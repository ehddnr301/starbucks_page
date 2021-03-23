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
// * awards with swiperjs
new Swiper(".awards .swiper-container", {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: ".awards .swiper-prev",
    nextEl: ".awards .swiper-next",
  },
});
