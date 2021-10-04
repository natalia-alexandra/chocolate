const menuIcon = document.getElementById("menu-button");
const menu = document.querySelector(".menu");

let toggleMenu = (e) => {
    e.preventDefault();
    menu.classList.toggle("menu-active");
}

menuIcon.addEventListener("click", toggleMenu);
