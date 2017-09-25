$(document).ready(function () {
    $('#cssmenu > ul > li > a').click(function () {
        $('#cssmenu li').removeClass('active');
        $(this).closest('li').addClass('active');
        var checkElement = $(this).next();
        if ((checkElement.is('ul')) && (checkElement.is(':visible'))) {
            $(this).closest('li').removeClass('active');
            checkElement.slideUp('normal');
        }
        if ((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
            $('#cssmenu ul ul:visible').slideUp('normal');
            checkElement.slideDown('normal');
        }
        if ($(this).closest('li').find('ul').children().length == 0) {
            return true;
        } else {
            return false;
        }
    });

    var owl = $("#owl-demo");

    owl.owlCarousel({
        items: 3, //there is should be 10 value
        itemsDesktop: [1000, 3], //5 items between 1000px and 901px
        itemsDesktopSmall: [900, 3], // betweem 900px and 601px
        itemsTablet: [600, 3], //2 items between 600 and 0
        itemsMobile: false,// itemsMobile disabled - inherit from itemsTablet option
        dots: true,
        navigation: true,
        navigationText: [
         "<i class='fa fa-chevron-left fa-1'></i>",
         "<i class='fa fa-chevron-right fa-1'></i>"
        ],

        autoPlay: 1000,
        stopOnHover: true

    });

    $('.marquee').marquee({
        //speed in milliseconds of the marquee
        duration: 5000,
        //gap in pixels between the tickers
        gap: 50,
        //time in milliseconds before the marquee will start animating
        delayBeforeStart: 0,
        //'left' or 'right'
        direction: 'up',
        //true or false - should the marquee be duplicated to show an effect of continues flow
        duplicated: true
    });
});


// Login Form
$(function () {
    var button = $('#loginButton');
    var box = $('#loginBox');
    var form = $('#loginForm');
    button.removeAttr('href');
    button.mouseup(function (login) {
        box.toggle();
        button.toggleClass('active');
    });
    form.mouseup(function () {
        return false;
    });
    $(this).mouseup(function (login) {
        if (!($(login.target).parent('#loginButton').length > 0)) {
            button.removeClass('active');
            box.hide();
        }
    });
});