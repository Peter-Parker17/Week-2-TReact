const menuOpen = document.querySelector(".menu-open");
const menuClose = document.querySelector(".menu-close");
const menu = document.querySelector(".nav__mobile--links--container");

function menuToggle() {
    if (menu.stlye.display === "none") {
        menu.stlye.display = "block";
        menuOpen.style.display = "none";
        menuClose.style.display = "block";
    } else {
        menu.stlye.display = "none";
        menuOpen.style.display = "block";
        menuClose.style.display = "none";
    }
}
