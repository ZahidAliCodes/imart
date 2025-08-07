document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    const dropdowns = document.querySelectorAll(".has-dropdown");

    // Hamburger toggle
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });

    // Close menu on normal link click
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

    // Dropdown click
    dropdowns.forEach((dropdown) => {
        dropdown.addEventListener("click", function (event) {
            if (window.innerWidth <= 992) {
                // Toggle dropdown menu without preventing link clicks
                const isLink = event.target.tagName.toLowerCase() === 'a';
                if (!isLink) {
                    event.preventDefault();
                    dropdown.classList.toggle("active");
                }
            }
        });
    });
});
