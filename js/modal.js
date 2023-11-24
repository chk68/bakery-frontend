document.addEventListener('DOMContentLoaded', function () {
    const modal = document.querySelector('.backdrop');

    const heroModalBtnOpen = document.querySelector('.hero-modal-btn-open');
    const headerModalBtnOpen = document.querySelector('.header-modal-btn-open');
    const modalBtnClose = document.querySelector('.modal-btn-close');

    const toggleModal = () => modal.classList.toggle('is-hidden');

    if (heroModalBtnOpen && headerModalBtnOpen && modalBtnClose) {
        heroModalBtnOpen.addEventListener('click', toggleModal);
        headerModalBtnOpen.addEventListener('click', toggleModal);
        modalBtnClose.addEventListener('click', toggleModal);
    } else {
        console.error('One or more buttons not found.');
    }
});