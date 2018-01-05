$(document).ready(function(){
    let carouselHeight,
        navElement;

    $(window).on('load', function (e) {  
        carouselHeight = $('#carouselWithIndicators').height();
        navElement = $('#navbar');

        if ($(window).scrollTop() > carouselHeight) {
            navElement.addClass('navigation-activate');
        } else {
            navElement.attr('class', 'navbar sticky-top navbar-expand-md');
        }
    });

    $(window).on('scroll', function (e) {
        if ($(window).scrollTop() > carouselHeight) {
            navElement.addClass('navigation-activate');
        } else {
            navElement.attr('class', 'navbar sticky-top navbar-expand-md');
        }
    });

    if ($('#back-to-top').length){
        let scrollTrigger = 100,
            backToTop = function(){
                let scrollTop = $(window).scrollTop();
                if(scrollTop > scrollTrigger) {
                    $('#back-to-top').addClass('show');
                } else {
                    $('#back-to-top').removeClass('show');
                }
            };
        backToTop();
        $(window).on('scroll', function(){
            backToTop();
        });
        $('#back-to-top').on('click', function(e){
            e.preventDefault();
            $('html, body').animate({
                scrollTop: 0
            }, 700);
        });
    }

    // $('#navbar').find('a').click(function (event) {
    //     var hash = this.hash;
    //   if (hash !== '') {
    //       event.preventDefault();
    //     $('body').animate({
    //         scrollTop: $(hash).offset().top
    //     }, 500, function () {
    //         window.location.hash = hash;
    //     });
    //   }
    // });
        

    $('[data-spy="scroll"]').each(function () {
        var $spy = $(this).scrollspy('refresh');
    });
    
    $('body').scrollspy({ target: '#navbar' });
});