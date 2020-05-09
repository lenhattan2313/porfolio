import "./sass/main.scss"
import AOS from 'aos';

//variables
const moveUp = document.querySelector(".move-up");
const header = document.querySelector(".header");
const menuBtn = document.querySelector(".header__navigation--res");
const nav = document.querySelector(".header__navigation");
// const logo = document.querySelector(".header__logo");
// const navList = document.querySelector(".navList");
const navItems = document.querySelectorAll(".navItems");
const navLinks = document.querySelectorAll(".navLinks");

menuBtn.addEventListener("click", toggleClassMenu);
function toggleClassMenu() {
  menuBtn.classList.toggle("close");
  nav.classList.toggle("show");
  navItems.forEach((item) => item.classList.toggle("show"));
}
//animated
AOS.init({
  duration: 1500,
  easing: "ease",
});

//turn pages
navLinks.forEach((navLink) => {
  navLink.addEventListener("click", () => {
    nav.classList.toggle("show");
    menuBtn.classList.toggle("close");
  });
});
