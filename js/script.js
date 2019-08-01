// show menu
$(function() {
    let openBtn = $('.header-menu__open-button'),
        closeBtn = $('.header-menu__close-button'),
        overlay = $('.overlay'),
        menu = $('.header-menu'),
        menuItem = $('.header-menu__item');

    openBtn.on('click', function() {
        overlay.show();
        menu.toggleClass('header-menu_active');
    });

    closeBtn.click(function() {
        overlay.hide();
        menu.toggleClass('header-menu_active');
    });

    menuItem.click(function() {
        overlay.hide();
        menu.toggleClass('header-menu_active');
    });
});