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
var swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
/* _______________________________________ */
/* Swiper 2*/
var mySwiper2 = new Swiper('#swiper-container2', {
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    slidesPerView: 3

})


