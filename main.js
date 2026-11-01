document.addEventListener('DOMContentLoaded', () => {
    const burgerToggle = document.getElementById('burgerToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    const menuOverlay = document.getElementById('menuOverlay');
    const body = document.body;

    // Функция переключения состояния меню
    function toggleMenu() {
        const isActive = burgerToggle.classList.toggle('is-active');
        mobileMenu.classList.toggle('is-active');
        menuOverlay.classList.toggle('is-active');
        body.classList.toggle('no-scroll');
        
        // Обновляем доступность для скринридеров (aria-expanded)
        burgerToggle.setAttribute('aria-expanded', isActive);
    }

    // Клик на кнопку бургера
    burgerToggle.addEventListener('click', toggleMenu);

    // Закрытие меню при клике на затемненную область (оверлей)
    menuOverlay.addEventListener('click', toggleMenu);

    // Закрытие меню при клике на любую из ссылок внутри него
    const menuLinks = mobileMenu.querySelectorAll('a');
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mobileMenu.classList.contains('is-active')) {
                toggleMenu();
            }
        });
    });
});