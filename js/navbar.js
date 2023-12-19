document.addEventListener('DOMContentLoaded', function() {
    const navbarIcon = document.getElementById('navbar-icon');
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');
    const navbar = document.getElementById('navbar');

    navbarIcon.addEventListener('click', toggleNavbar);

    function toggleNavbar() {
        navbar.classList.toggle('active');
        menuIcon.classList.toggle('hidden');
        closeIcon.classList.toggle('hidden');
    }

    // Fechar o menu ao clicar em um link
    const navLinks = document.querySelectorAll('#navbar a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navbar.classList.remove('active');
            menuIcon.classList.remove('hidden');
            closeIcon.classList.add('hidden');
        });
    });
});
