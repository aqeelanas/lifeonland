
const sr = ScrollReveal({
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true
})
// animation of text

sr.reveal('.mission1 .topic ,.mission1 .linkbox, .mission1 p', { delay: 800, origin: 'left' })
sr.reveal('.content h2,.content p, .content a', { delay: 800, origin:"top" })
sr.reveal('.content1 h2 , .content1 p, .content1 a', { delay: 800, origin: 'right' })


const header = document.querySelector("header");
const navbarLinks = document.querySelectorAll(".navbar a");

      // Change color on mouseover and mouseout
      navbarLinks.forEach((link) => {
        link.addEventListener("mouseover", () => {
          header.style.backgroundColor = "white";
        });

        link.addEventListener("mouseout", () => {
          header.style.backgroundColor = "";
        });
      });

      // Change color on scroll
      window.addEventListener("scroll", () => {
        if (window.scrollY > 0) {
          header.style.backgroundColor = "white";
        } else {
          header.style.backgroundColor = "";
        }
      });