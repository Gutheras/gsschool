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
