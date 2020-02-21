/* HEADER MENU */
let win = $(window),
    fixed = $(".header_fixed"),
    fixedLogo = $(".header__logo_grey"),
    whiteLogo = $(".header__logo"),
    limit = 1080;

function tgl (state) {
    fixed.toggleClass("header_hidden", state);
    fixedLogo.toggleClass("header_hidden", state);
}

win.on("scroll", function() {
	let top = win.scrollTop();
    
    if (top < limit) {
        tgl(true);
    } else {
        tgl(false);
    }
});

/* Smooth transition menu */
$(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});

/* Swiper */
let swiper = new Swiper(document.querySelector('.promo__container_swiper'), {
    direction: 'vertical',
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
});

/* Swiper 2*/
let mySwiper2 = new Swiper(document.querySelector('.news__container_swiper'), {
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    slidesPerView: 2.7
});

/* FORM PHONE */
var form  = document.getElementsByTagName('form')[0];
var phone = document.getElementById('phone');
var error = document.querySelector('.feedback__form_item_style_phone_invalid_text');

phone.addEventListener("input", function (event) {
  if (phone.validity.valid) {
    error.innerHTML = "";
    error.className = "error";
  }
}, false);
form.addEventListener("submit", function (event) {
  if (!phone.validity.valid) {
    error.innerHTML = "Это поле обязательно для заполнения";
    error.className = "feedback__form_item_style_phone_invalid_text";
    event.preventDefault();
  }
}, false);