$(document).ready(function(){
    // NavBar slideDown and slideUp using scrolling.
    $(window).scroll(function () { 
        var scroll = $(this).scrollTop();
        if(scroll > 5){
            $(".header_nav").slideDown();
            $(".header_nav").css({
                "background":"rgba(0,0,0,0.5)",
                "position":"fixed"
            })
        }else{
            $(".header_nav").css({
                "background":"rgba(0,0,0)",
                "position":"relative"
            })
        }
    });

    //animate links to do scrolling to section.
    $("a").click(function(){
        $("html , body").animate({
            scrollTop : $("#" + $(this).data('value')).offset().top
        }, 1000)
    })

    $(window).resize(function () { 
        if($(window).width() < 992){
            $(".header_nav").removeAttr("style")
        }
    });

    //Show back to top.
    var scroll_btn = $("#scrolltop")
    $(window).scroll(function(){
        var show = $(this).scrollTop();
        if(show > 400){
            scroll_btn.fadeIn();
        }else{
            scroll_btn.fadeOut();
        }
    })
    //Click back to top.
    scroll_btn.click(function(){
        $("html , body").animate({
           scrollTop : 0
        },1000)
    })
});