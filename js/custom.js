$(function () {

    // navbar bg
    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();
        if (scrolling > 200) {
            $('.navbar').addClass('navbg');
        } else {
            $('.navbar').removeClass('navbg');
        }
    });

//venobox js
    $('.venobox').venobox();


    // counter js
    $('.counter').counterUp({
        delay: 5,
        time: 3000
    });

    // feedback slider
    $('.feedback-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        arrows: true,
        prevArrow: '.left',
        nextArrow: '.right',
        autoplaySpeed: 2000,
    });


    // team slider
    $('.team-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        speed: 1500,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
    },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
    }
  ]
    });





    $('.top-bottom').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 2000);

    });



    $(document).ready(function () {

        $(window).scroll(function () {
            var scrolling = $(this).scrollTop();


            if (scrolling < 300) {
                $('.top-bottom').fadeOut(500);
            } else {
                $('.top-bottom').fadeIn(500);
            }

        });
    });



    //animation scroll js
    var html_body = $('html, body');
    $('nav a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 90
                }, 1500);
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll link is clicked
    $('.nav-link').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });


    //yt player js
    jQuery(".player").YTPlayer();


    $(window).on('load', function(){
        $('.preloader').delay(1500).fadeOut(500);
    });

    
    //wow js
    new WOW().init();
  
    

});

function validation(){
    var firstname = document.querySelector(".firstname");
    var lastname = document.querySelector(".lastname");
    var email = document.querySelector(".email");
    var password = document.querySelector(".password");
    var number = document.querySelector(".number");
    var massage = document.querySelector(".massage");
    var error = document.querySelector(".error-msg");
    var text;
    var reg = /[a-z0-9-_.]+@[a-z]+\.[a-z]{2,5}/
    
    error.style.padding = "8px";
    
    
   if(firstname.value == ""){
        text = "Please Enter your first name!"
        error.innerHTML = text;
        return false;
    } else if(firstname.value.length < 3 || firstname.value.length >15){
        text = "Enter your first name within 3 to 10 char!"
        error.innerHTML = text;
        return false;
    }else if(lastname.value == ""){
        text = "Please Enter your last name!"
        error.innerHTML = text;
        return false;
    } else if(lastname.value.length < 3 || lastname.value.length >15){
        text = "Enter your last name within 3 to 1 char!"
        error.innerHTML = text;
        return false;
    }else if(email.value == ""){
        text = "Enter your email"
        error.innerHTML = text;
        return false;
    }else if (!reg.test(email.value)){
        text = "please enter your correct email!"
        error.innerHTML = text;
        return false;
    }else if(password.value == ""){
        text = "Please Enter your password!"
        error.innerHTML = text;
        return false;
    }else if(password.value.length < 5 || password.value.length >15){
        text = "Enter your last password within 5 to 15 char!"
        error.innerHTML = text;
        return false;
    }else if(number.value == ""){
        text = "Please enter your number!"
        error.innerHTML = text;
        return false;
    }else if(number.value.length < 10 || number.value.length >12){
        text = "Enter your last Number within 10 to 12 char!"
        error.innerHTML = text;
        return false;
    }else if(massage.value == ""){
        text = "Please enter your Massage"
        error.innerHTML = text;
        return false;
    }else{
        return true;
    }
    
    

    
    
};
