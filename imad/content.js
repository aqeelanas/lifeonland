document.addEventListener("DOMContentLoaded", function() {
    // Get the back-to-top button element
    const backToTopButton = document.querySelector('.back-to-top');

    // Function to toggle visibility of back-to-top button based on scroll position
    function toggleBackToTopButton() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    }

    // Add scroll event listener to toggle button visibility
    window.addEventListener('scroll', toggleBackToTopButton);

    // Function to smoothly scroll to the top when back-to-top button is clicked
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    // Add click event listener to back-to-top button
    backToTopButton.addEventListener('click', scrollToTop);
});

