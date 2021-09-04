const iconMenu = document.querySelector('.menu_icon');

if (iconMenu) {
    const menuBody = document.querySelector('.header_nav');
    iconMenu.addEventListener('click', function (e) {
        document.body.classList.toggle('lock')
        iconMenu.classList.toggle('active');
        menuBody.classList.toggle('active');
    });
}