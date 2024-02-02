// Navbar

const mobile_nav = document.querySelector('.mobile_nav');
const nav_header = document.querySelector('.header');

mobile_nav.addEventListener("click", () => toggleNavbar());

const toggleNavbar = () => {
    nav_header.classList.toggle("active");
}


// About US

document.querySelector('.play-button').addEventListener('click', function (e) {
    e.preventDefault();
    window.location.href = '/play-video';
});

// Sponser
