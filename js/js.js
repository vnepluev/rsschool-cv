const iconMenu = document.querySelector('.menu_icon');
const menuLinks = document.querySelectorAll('.menu__link');
const menuBody = document.querySelector('.menu-body');

if (iconMenu) {
    iconMenu.addEventListener('click', function (e) {
        document.body.classList.toggle('_lock');
        menuBody.classList.toggle('_active');
        iconMenu.classList.toggle('_active');
    })
}

if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", (e) => {
            document.body.classList.remove('_lock');
            menuBody.classList.remove('_active');
            iconMenu.classList.remove('_active');
        })
    })
}

