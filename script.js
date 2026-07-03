document.addEventListener("DOMContentLoaded", () => {


    const preloader = document.getElementById("preloader");
    const mainContent = document.getElementById("mainContent");


    window.addEventListener("load", () => {
        setTimeout(() => {
            preloader.style.opacity = "0";
            preloader.style.visibility = "hidden";

            mainContent.classList.remove("app-hidden");
            mainContent.classList.add("app-visible");
        }, 1500);
    });


    const navbar = document.getElementById("navbar");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });


    const burger = document.getElementById("burgerMenu");
    const menuWrapper = document.getElementById("menuWrapper");
    const body = document.body;
    const navItems = document.querySelectorAll(".nav-item");

    burger.addEventListener("click", () => {
        menuWrapper.classList.toggle("active-menu");
        burger.classList.toggle("toggle");
        body.classList.toggle("no-scroll"); // Prevents background scrolling when menu is open
    });


    navItems.forEach(item => {
        item.addEventListener("click", () => {
            if (menuWrapper.classList.contains("active-menu")) {
                menuWrapper.classList.remove("active-menu");
                burger.classList.remove("toggle");
                body.classList.remove("no-scroll");
            }
        });
    });
});