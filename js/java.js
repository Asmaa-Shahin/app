$(function (){
    "use strict";

    $('.JEWELLERY a ').hover(function(){
            $(this).children().css('opacity','0.4');
    },
    function(){
        $(this).children().css('opacity','0');

    });
        
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items:4,
        nav:true,
        loop:true,
        margin:10,
        autoplay:true,
        autoplayTimeout:1000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1,
    
            },
            400:{
                items:2
            },
            900:{
                items:3,
            },
        }
    });
    $('.play').on('click',function(){
        owl.trigger('play.owl.autoplay',[1000])
    })
    $('.stop').on('click',function(){
        owl.trigger('stop.owl.autoplay')
    });
    
        
});
   















