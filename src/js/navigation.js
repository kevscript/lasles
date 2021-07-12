const burger = document.querySelector(".header-mobile__burger");
const menuContainer = document.querySelector(".menu-container");

burger.addEventListener("click", () => {
  if (burger.classList.contains("burger-active")) {
    burger.classList.remove("burger-active");
    menuContainer.classList.remove("menu-is-open");
    document.body.style.overflow = "auto";
  } else {
    burger.classList.add("burger-active");
    menuContainer.classList.add("menu-is-open");
    document.body.style.overflow = "hidden";
  }
});

menuContainer.addEventListener("click", (e) => {
  if (e.target === e.currentTarget) {
    burger.classList.remove("burger-active");
    menuContainer.classList.remove("menu-is-open");
    document.body.style.overflow = "auto";
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 1100) {
    burger.classList.remove("burger-active");
    menuContainer.classList.remove("menu-is-open");
    document.body.style.overflow = "auto";
  }
});
