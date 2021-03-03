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
window.addEventListener("scroll", function () {
  console.log(window.scrollY);
});
