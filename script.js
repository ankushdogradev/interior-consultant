const menuBtn = document.querySelector(".header--hamburger--container");
const overlay = document.querySelector(".overlay");

let menuOpen = false;
menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    overlay.classList.add("open");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    overlay.classList.remove("open");
    menuOpen = false;
  }
});
