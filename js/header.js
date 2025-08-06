        document.addEventListener("DOMContentLoaded", function() {
            const hamburger = document.querySelector(".hamburger");
            const navMenu = document.querySelector(".nav-menu");
            const dropdowns = document.querySelectorAll(".has-dropdown");

            // Toggle mobile menu
            hamburger.addEventListener("click", () => {
                hamburger.classList.toggle("active");
                navMenu.classList.toggle("active");
            });

            // Close mobile menu when a link is clicked
            document.querySelectorAll(".nav-link").forEach(link => {
                // We only want to close the menu if it's NOT a dropdown toggle on mobile
                if (!link.parentElement.classList.contains('has-dropdown')) {
                    link.addEventListener("click", () => {
                        if (navMenu.classList.contains('active')) {
                           hamburger.classList.remove("active");
                           navMenu.classList.remove("active");
                        }
                    });
                }
            });

            // Handle dropdowns on mobile (click to open)
            dropdowns.forEach(dropdown => {
                dropdown.addEventListener("click", (event) => {
                    // Check if we are in mobile view
                    if (window.innerWidth <= 992) {
                        // Prevent link from navigating
                        event.preventDefault();
                        // Toggle active class on the parent li
                        dropdown.classList.toggle("active");
                    }
                });
            });
        });