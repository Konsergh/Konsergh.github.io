jQuery(document).ready(function($) {
    $('.menu-line').on('click', function(event) {
        event.preventDefault();
        $('.menu-nav').animate({
            left: 0
        }, 200);
        $('.dark-block').show();
    });
    $('.dark-block').on('click', function(event) {
        event.preventDefault();
        $('.menu-nav').animate({
            left: '-300px'
        }, 200);
        $('.dark-block').hide();
    });
});