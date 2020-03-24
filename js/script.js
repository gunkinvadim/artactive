$(function() {
    
    // show menu

    const   overlay = $('.overlay'),
            menu = $('.header-menu'),
            menuItem = $('.header-menu__item');

    {
        const   openBtn = $('.header .menu-button'),
                closeBtn = $('.header-menu .close-button');


        openBtn.on('click', function() {
            overlay.show();
            menu.addClass('active');
        });

        closeBtn.click(function() {
            overlay.hide();
            menu.removeClass('active');
        });

        menuItem.click(function() {
            overlay.hide();
            menu.removeClass('active');
        });

        overlay.click(function() {
            overlay.hide();
            menu.removeClass('active');
        });
    }


    // show popup

    {
        const   popup = $('.popup'),
                openBtn = $('.open-popup'),
                closeBtn = $('.popup .close-button');

        openBtn.click(function() {
            overlay.show();
            menu.removeClass('active');
            popup.addClass('active');
        })

        closeBtn.click(function() {
            overlay.hide();
            popup.removeClass('active');
        })

        overlay.click(function() {
            overlay.hide();
            popup.removeClass('active');
        })
    }


    // slider
    
    class Slider {
        constructor ({ slides, descriptions, buttonLeft, buttonRight }) {
            this.slides = $(slides)
            this.descriptions = $(descriptions)
            this.buttonLeft = $(buttonLeft)
            this.buttonRight = $(buttonRight)

            let i = 0

            this.slides.eq(i).addClass('active')
            this.descriptions.eq(i).addClass('active')

            const slide = (items) => {
                items.removeClass('active')
                items.eq(i).addClass('active')
            }

            this.buttonLeft.on('click', () => {
                if (i <= 0) {
                    i = this.slides.length - 1
                } else --i

                slide(this.slides)
                slide(this.descriptions)
            })

            this.buttonRight.on('click', () => {
                if (i >= this.slides.length - 1) {
                    i = 0
                } else ++i

                slide(this.slides)
                slide(this.descriptions)
            })
            
        }
    }

    sliderPhoto = new Slider({
        slides: '.services-1-slider__slides li',
        descriptions: '.services-1-slider__descriptions li',
        buttonLeft: '.services-1-slider .slider-arrow_left',
        buttonRight: '.services-1-slider .slider-arrow_right'
    })

    sliderReviews = new Slider({
        slides: '.reviews-slider .reviews-item',
        buttonLeft: '.reviews-slider .slider-arrow_left',
        buttonRight: '.reviews-slider .slider-arrow_right'
    })

    
    // Отправка данных на сервер

    $('.form').trigger('reset');
    $(function() {
        'use strict';
        $('.form').on('submit', function(e) {
            e.preventDefault();
            $.ajax({
                url: '../send.php',
                type: 'POST',
                contentType: false,
                processData: false,
                data: new FormData(this),
                success: function(msg) {
                    console.log(msg);
                    if (msg == 'ok') {
                        alert('Спасибо за заявку! Мы свяжемся с вами в ближайшее время.');
                        $('.form').trigger('reset'); // очистка формы
                    } else {
                        alert('Что-то пошло не так! Попробуйте повторить отправку.');
                    }
                }
            });
        });
    });
});