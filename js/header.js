document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    const dropdowns = document.querySelectorAll(".has-dropdown");

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });
    document.querySelectorAll(".nav-link").forEach((link) => {
        if (!link.parentElement.classList.contains("has-dropdown")) {
            link.addEventListener("click", () => {
                if (navMenu.classList.contains("active")) {
                    hamburger.classList.remove("active");
                    navMenu.classList.remove("active");
                }
            });
        }
    });
    dropdowns.forEach((dropdown) => {
        dropdown.addEventListener("click", (event) => {
            if (window.innerWidth <= 992) {
                event.preventDefault();
                dropdown.classList.toggle("active");
            }
        });
    });
});
