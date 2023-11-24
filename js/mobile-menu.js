const mobileMenu = document.querySelector('.mobile-menu');
const menuBtnOpen = document.querySelector('.menu-btn-open');
const menuBtnClose = document.querySelector('.menu-btn-close');
const mobileMenuLinks = document.querySelectorAll('.mobile-menu__link');

const toggleMenu = () => {
    mobileMenu.classList.toggle('is-open');
    disableScroll();
};

const disableScroll = () => {
    document.body.classList.toggle('is-scroll-disabled');
};

const closeMenuOnClick = () => {
    toggleMenu();
};

menuBtnOpen.addEventListener('click', toggleMenu);
menuBtnClose.addEventListener('click', toggleMenu);

mobileMenuLinks.forEach(link => {
    link.addEventListener('click', closeMenuOnClick);
});
