//variables
const moveUp = document.querySelector(".move-up");
const header = document.querySelector(".header");
const menuBtn = document.querySelector(".header__navigation--res");
const nav = document.querySelector(".header__navigation");
// const logo = document.querySelector(".header__logo");
// const navList = document.querySelector(".navList");
const navItems = document.querySelectorAll(".navItems");

menuBtn.addEventListener("click", toggleClassMenu);
function toggleClassMenu() {
  menuBtn.classList.toggle("close");
  nav.classList.toggle("show");
  navItems.forEach((item) => item.classList.toggle("show"));
}

//smooth scroll
function smothScroll(destinate, duration) {
  let target = document.querySelector(destinate);
  let targetPosition = target.getBoundingClientRect().top;
  let startPosition = window.pageYOffset;
  let distance = targetPosition - startPosition;
  let startTime = null;
  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    let timeElapse = currentTime - startTime;
    let run = ease(timeElapse, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapse < duration) requestAnimationFrame(animation);
  }
  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }
  requestAnimationFrame(animation);
}
moveUp.addEventListener("click", () => smothScroll(".header", 2000));
