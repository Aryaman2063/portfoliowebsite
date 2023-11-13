document.addEventListener('DOMContentLoaded', function () {
    // Get all section elements
    const sections = document.querySelectorAll('section');

    // Hide all sections except the first one
    sections.forEach((section, index) => {
        if (index !== 0) {
            section.style.display = 'none';
        }
    });

    // Get all navigation links
    const navLinks = document.querySelectorAll('nav a');

    // Add click event listeners to navigation links
    navLinks.forEach((link, index) => {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            // Hide all sections
            sections.forEach((section) => {
                section.style.display = 'none';
            });

            // Show the selected section
            sections[index].style.display = 'block';
        });
    });
});
