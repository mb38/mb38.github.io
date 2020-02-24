/* HEADER MENU */
let header = document.querySelector("header"),
    logo = document.querySelector(".logo");
window.addEventListener("scroll", scrollEvent);
function scrollEvent() {
    let windowHeight = document.documentElement.clientHeight;
    if (window.pageYOffset > windowHeight && !header.classList.contains("header_fixed")){
        header.classList.toggle("header_fixed");
        logo.src = "icons/logo_black.svg";
    } else if(window.pageYOffset <= windowHeight && header.classList.contains("header_fixed")){
        header.classList.toggle("header_fixed");
        logo.src = "icons/logo.svg";
    }
}
/* ____________________________________________________________________________ */

/* Smooth transition menu */
/* $(document).ready(function(){
    $("menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
}); */
/* ____________________________________________________________________________ */

/* Swiper */
let swiper = new Swiper(document.querySelector('.promo__container_swiper'), {
    direction: 'horizontal',
    speed: 800,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
});
/* ____________________________________________________________________________ */

/* WORLD-MAP */
let mapsBg = document.querySelector(".maps__img");
let mapsLine = document.querySelector(".maps__line");
let mapsContainer = document.querySelector(".maps__container");
let mapsYandex = document.querySelector(".maps__yandex");
let country = document.querySelector(".maps__container_country");
let buttonRussia = document.querySelector(".maps__container_country_russia");
let buttonWorld = document.querySelector(".maps__container_country_world");
/* let activeClass = document.querySelector(".active"); */

function russia(){
	if ((mapsYandex.style.display == "none") || (mapsYandex.style.display == "")) {
    mapsBg.style.display="none";
    mapsLine.style.display="none";
    mapsContainer.style.display="none";
    mapsYandex.style.display="block";
    buttonWorld.classList.remove("active");
    buttonRussia.classList.add("active");
    country.classList.add("maps__container_country_item");
	}
}
buttonRussia.addEventListener('click', russia);

function world(){
	if ((mapsYandex.style.display == "block")) {
    mapsBg.style.display="block";
		mapsLine.style.display="block";
    mapsContainer.style.display="block";
    mapsYandex.style.display="none";
    buttonWorld.classList.add("active");
    buttonRussia.classList.remove("active");
    country.classList.remove("maps__container_country_item");
	}
}
buttonWorld.addEventListener('click', world);
/* ____________________________________________________________________________ */


/* YA-MAPS */
var myMap;
// Дождёмся загрузки API и готовности DOM.
ymaps.ready(init);
function init () {
  // Создание экземпляра карты и его привязка к контейнеру с
  // заданным id ("map").
  myMap = new ymaps.Map('maps__yandex', {
      // При инициализации карты обязательно нужно указать
      // её центр и коэффициент масштабирования.
      center: [55.74846630659888,37.53745018905031],
      zoom: 16,
      controls: ['zoomControl']
  }, {
      searchControlProvider: 'yandex#search',
      suppressMapOpenBlock: true,
      /* yandexMapDisablePoiInteractivity: true, */     
  }),
    myPlacemark = new ymaps.Placemark(
      // Координаты метки
      [55.74846630659888,37.53745018905031], 
      {
        iconContent: 'Office Frontier MWD Systems',
      },{
        /* iconImageClipRect: [[0,0], [26, 46]],
        iconImageSize: [15, 27],
        iconImageOffset: [-15, -27], */
        preset: 'islands#redStretchyIcon'
      }
    );    
    // Добавление метки на карту
    myMap.geoObjects.add(myPlacemark);
}
/* ____________________________________________________________________________ */

/* Swiper 2*/
let mySwiper2 = new Swiper(document.querySelector('.news__container_swiper'), {
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    speed: 800,
    slidesPerView: 'auto',
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
});
/* ____________________________________________________________________________ */

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
/* ____________________________________________________________________________ */