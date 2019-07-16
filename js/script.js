window.addEventListener('DOMContentLoaded', function() {

    'use strict';

    // Header Menu
    let headerMenuOpenButton = document.querySelector('.header-menu__open-button'),
    headerMenu = document.querySelector('.header-menu'),
    headerMenuOverlay = document.querySelector('.header-menu__overlay'),
    headerMenuCloseButton = document.querySelector('.header-menu__close-button'),
    headerMenuItem = document.querySelectorAll('.header-menu__item');



    headerMenuOpenButton.addEventListener('click', function() {
        headerMenuOverlay.style.display = 'block';
        headerMenu.style.display = 'flex';
    });

    headerMenuCloseButton.addEventListener('click', function() {
        headerMenuOverlay.style.display = 'none';
        headerMenu.style.display = 'none';
    });

    headerMenuItem.addEventListener('click', function() {
        headerMenuOverlay.style.display = 'none';
        headerMenu.style.display = 'none';
    });

    if(document.documentElement.clientWidth > 991) {
        headerMenu.style.display = 'flex';
    }


});