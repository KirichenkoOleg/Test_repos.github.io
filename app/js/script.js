$(function() {
    objectFitImages();

    $('.slider').slick({
        infinite: false,
        prevArrow: '<span type = "button" class = "slick-prev"><svg aria-hidden="true" data-prefix="fas" data-icon="chevron-left" class="svg-arrowLeft" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M34.52 239.03L228.87 44.69a24 24 0 0133.94 0l22.67 22.67a24 24 0 01.04 33.9L131.49 256l154.02 154.75a24 24 0 01-.04 33.9l-22.67 22.67a24 24 0 01-33.94 0L34.52 272.97a24 24 0 010-33.94z"/></svg></ span>',
        nextArrow: '<span type = "button" class = "slick-next"><svg aria-hidden="true" data-prefix="fas" data-icon="chevron-right" class="svg-arrowRight" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M285.48 272.97L91.13 467.31a24 24 0 01-33.94 0l-22.67-22.66a24 24 0 01-.04-33.9L188.5 256 34.48 101.25a24 24 0 01.04-33.9L57.2 44.7a24 24 0 0133.94 0l194.35 194.34a24 24 0 010 33.94z"/></svg></ span>',
        // dots: true,
        // slidesToShow: 1,
        draggable: false,//перетаскиванье мышъю
        easing: 'ease',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    dots: true
                }
            }
        ]
    });

    //----------------------------------- activate nav items
    var items = $('.menu__item');
    items.on('click', function(e) {
        items.removeClass('menu__item_active');
        $(this).addClass('menu__item_active');
        return false;
    });

});