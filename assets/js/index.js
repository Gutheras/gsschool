function showMenu() {
    var navLinks = document.getElementById("navlinks");
    navLinks.style.right = "0";
}

function hideMenu() {
    var navLinks = document.getElementById("navlinks");
    navLinks.style.right = "-200px";
}

// Close menu when clicking outside on mobile
document.addEventListener('click', function(event) {
    var navLinks = document.getElementById("navlinks");
    var menuIcon = document.querySelector('.bi-list');
    
    if (window.innerWidth <= 700) {
        if (!navLinks.contains(event.target) && !menuIcon.contains(event.target)) {
            navLinks.style.right = "-200px";
        }
    }
});

// Update menu width based on viewport size
window.addEventListener('resize', function() {
    var navLinks = document.getElementById("navlinks");
    if (window.innerWidth > 700) {
        navLinks.style.right = "0";
    } else {
        navLinks.style.right = "-200px";
    }
});


let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlides() {
    // Hide all slides
    slides.forEach(slide => slide.style.opacity = 0);
    
    // Show current slide
    slides[slideIndex].style.opacity = 1;
    
    // Move to next slide
    slideIndex = (slideIndex + 1) % slides.length;
    
    // Change image every 10 seconds
    setTimeout(showSlides, 10000);
}

// Pause on hover
const header = document.querySelector('.header');
header.addEventListener('mouseenter', () => clearTimeout(slideTimer));
header.addEventListener('mouseleave', showSlides);

// Start slideshow
let slideTimer = setTimeout(showSlides, 10000);


// Automatic copyright year update
document.getElementById('copyright-year').textContent = new Date().getFullYear();

//Scroll to top
const scrollTopButton = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        scrollTopButton.classList.add('show');
    } else {
        scrollTopButton.classList.remove('show');
    }
});

scrollTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
