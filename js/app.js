//variables
const moveUp = document.querySelector(".move-up");
const header = document.querySelector(".header");
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const navBranding = document.querySelector(".menu-branding");
const navMenu = document.querySelector(".menu-nav");
const navItem = document.querySelectorAll(".nav-item");

menuBtn.addEventListener("click", toggleClassMenu);
function toggleClassMenu() {
  menuBtn.classList.toggle("close");
  menu.classList.toggle("show");
  navMenu.classList.toggle("show");
  navBranding.classList.toggle("show");
  navItem.forEach((item) => item.classList.toggle("show"));
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
