$(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 400) {
        $("#gotoTop").addClass("show");
    } else {
        $("#gotoTop").removeClass("show");
    }
});

$("#primary-menu-trigger").click(function() {
    $("body").addClass("primary-menu-open");
});
$(".togglerclose").click(function() {
    $("body").removeClass("primary-menu-open");

});
$(".togglerclose").click(function() {
    $(".togglet").toggleClass("toggleta");

});
$("#primary-menu ul li  i").click(function() {
    $(this).parent().find(ul).slideToggle();

});
$(window).scroll(function() {
    var sticky = $('header'),
        scroll = $(window).scrollTop();

    if (scroll >= 100) sticky.addClass('sticky-header');
    else sticky.removeClass('sticky-header');
});

// slider js
var swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,

    autoplay: {
        delay: 15000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '#slider-arrow-left',
        prevEl: '#slider-arrow-right',
    },
});

// slider js
var swiper = new Swiper('.swiper-container2', {
    loop: true,

    autoplay: {
        delay: 15000,
        disableOnInteraction: false,
    },
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});


// slider js
var swiper = new Swiper('.swiper-container3', {
    loop: true,

    autoplay: {
        delay: 10000,
        disableOnInteraction: false,
    },
	 pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    slidesPerView: 4,
    spaceBetween: 30,
     navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
	breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 10, 
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 4,
      spaceBetween: 20
    }
	}
});

$(".menutoggle").click(function() {
    $(this).next("ul.dropdown-menu").toggleClass("show");

});
$(window).scroll(function() {
    var sticky = $('header'),
        scroll = $(window).scrollTop();

    if (scroll >= 100) sticky.addClass('sticky-header');
    else sticky.removeClass('sticky-header');
});

//this is for toggle FAQ
$(".toggle.faq").click(function() {
    $(this).find(".togglet").toggleClass("toggleta");
    $(this).find(".togglec").toggleClass("show");
});



$('#spanYear').html(new Date().getFullYear());
// Script for last updated
var x = document.lastModified;
document.getElementById("lasdupdated").innerHTML = x;



 

$('.counter').each(function () {
$(this).prop('Counter',0).animate({
Counter: $(this).text()
}, {
duration: 4000,
easing: 'swing',
step: function (now) {
$(this).text(Math.ceil(now));
}
});
});
 
 
 