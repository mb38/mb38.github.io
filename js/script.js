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
let mapsMark = document.querySelector(".maps__mark");

function russia(){
	if ((mapsYandex.style.display == "none") || (mapsYandex.style.display == "")) {
    mapsBg.style.display="none";
    mapsLine.style.display="none";
    mapsContainer.style.display="none";
    mapsYandex.style.display="block";
    mapsMark.style.display="none";
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
    mapsMark.style.display="block";
    buttonWorld.classList.add("active");
    buttonRussia.classList.remove("active");
    country.classList.remove("maps__container_country_item");
    mapsMark.classList.add(".maps__mark");
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
      center: [62.53682971098405,103.66125410574223],
      zoom: 4,
      controls: ['zoomControl']
  }, {
      searchControlProvider: 'yandex#search',
      suppressMapOpenBlock: true   
  });
    myMap.geoObjects
      .add(new ymaps.Placemark([29.935089367822602,-95.49560514601905], {
        iconContent: '5125 Hiltonview Rd Houston'
      }, {
      preset: 'islands#redStretchyIcon'
      }))
      .add(new ymaps.Placemark([40.85820238123578,-74.13305109842264], {
        iconContent: '2206 W. New Jersey Ave.Midland'
      }, {
      preset: 'islands#redStretchyIcon'
      }))
      .add(new ymaps.Placemark([-3.185479622386281,-52.19926279653706], {
        iconContent: 'Altamira'
      }, {
      preset: 'islands#redStretchyIcon'
      }))
      .add(new ymaps.Placemark([48.8515676366447,2.3448104020995837], {
        iconContent: 'Paris'
      }, {
      preset: 'islands#redStretchyIcon'
      }))
      .add(new ymaps.Placemark([27.522374900246433,41.690270819043285], {
        iconContent: 'Hail'
      }, {
      preset: 'islands#redStretchyIcon'
      }))
      .add(new ymaps.Placemark([55.796908551478175,49.107276664062454], {
        iconContent: 'Kazan'
      }, {
      preset: 'islands#redStretchyIcon'
      }))
      .add(new ymaps.Placemark([58.009623989285544,56.2369736005858], {
        iconContent: 'Perm'
      }, {
      preset: 'islands#redStretchyIcon'
      }))
      .add(new ymaps.Placemark([56.01332762682706,92.87064982519519], {
        iconContent: 'Krasnoyarsk'
      }, {
      preset: 'islands#redStretchyIcon'
      }))
      .add(new ymaps.Placemark([65.94045916881403,111.50716953173811], {
        iconContent: 'Aihal'
      }, {
      preset: 'islands#redStretchyIcon'
      }))
      .add(new ymaps.Placemark([63.74868400266536,121.63467578784167], {
        iconContent: 'Vilyuysk'
      }, {
      preset: 'islands#redStretchyIcon'
      }));
      
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
/* var formFirst  = document.getElementsByTagName('form')[0];
var phone = document.getElementById('form-phone');
var error = document.querySelector('.feedback__form_item_style_phone_invalid_text');

phone.addEventListener("input", function (event) {
  if (phone.validity.valid) {
    error.innerHTML = "";
    error.className = "error";
  }
}, false);
formFirst.addEventListener("submit", function (event) {
  if (!phone.validity.valid) {
    error.innerHTML = "Это поле обязательно для заполнения";
    error.className = "feedback__form_item_style_phone_invalid_text";
    event.preventDefault();
  }
}, false); */
/* ____________________________________________________________________________ */

/* FORM FEEDBACK */
let message = {
  loading: 'Loading...',
  success: 'Thanks! We will contact you soon!',
  failure: 'Something went wrong...'
};

let form = document.querySelector('.feedback__form'),
    input = form.getElementsByTagName('input'),
    statusMessage = document.createElement('div');

    statusMessage.classList.add('status');
    console.log(input);

form.addEventListener('submit', function(event) {
  event.preventDefault();
  form.appendChild(statusMessage);

  let request = new XMLHttpRequest();
  request.open('POST', 'server.php');
  request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

  let formData = new FormData(form);
  console.log(formData);
  request.send(formData);

  request.addEventListener('readystatechange', function() {
      if (request.readyState < 4) {
          statusMessage.innerHTML = message.loading;
      } else if(request.readyState === 4 && request.status == 200) {
          statusMessage.innerHTML = message.success;
      } else {
          statusMessage.innerHTML = message.failure;
      }
  });

  for (let i = 0; i < input.length; i++) {
      input[i].value = '';
  }
});
/* ____________________________________________________________________________ */