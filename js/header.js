document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    const dropdowns = document.querySelectorAll(".has-dropdown");

    // Hamburger toggle
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });

    // Close menu on normal link click (links without dropdown)
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

    // Dropdown click for mobile toggle
    dropdowns.forEach((dropdown) => {
        dropdown.addEventListener("click", function (event) {
            if (window.innerWidth <= 992) {
                // If clicked inside dropdown submenu links, let it navigate normally
                const isDropdownLink = event.target.closest(".dropdown-menu a");
                if (!isDropdownLink) {
                    event.preventDefault();
                    dropdown.classList.toggle("active");
                }
            }
        });
    });
});

