$('.firstsec_mainpage_slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: false,
  dots: false,
  infinite: true,
  prevArrow: $('.firstsec_mainpage_slider_buttons_leftbtn'),
  nextArrow: $('.firstsec_mainpage_slider_buttons_rightbtn')
});

var nameInputs = document.querySelectorAll('input[data-name-input]');

$(nameInputs).on('keypress', function() {
    var that = this;

    setTimeout(function() {
        var res = /[^аА-яЯ]/g.exec(that.value);
        console.log(res);
        that.value = that.value.replace(res, '');
    }, 0);
});


window.addEventListener("DOMContentLoaded", function() {
  [].forEach.call( document.querySelectorAll('input[data-tel-input]'), function(input) {
    var keyCode;
    function mask(event) {
      event.keyCode && (keyCode = event.keyCode);
      var pos = this.selectionStart;
      if (pos < 3) event.preventDefault();
      var matrix = "+7 (___) ___ ____",
          i = 0,
          def = matrix.replace(/\D/g, ""),
          val = this.value.replace(/\D/g, ""),
          new_value = matrix.replace(/[_\d]/g, function(a) {
              return i < val.length ? val.charAt(i++) : a
          });
      i = new_value.indexOf("_");
      if (i != -1) {
          i < 5 && (i = 3);
          new_value = new_value.slice(0, i)
      }
      var reg = matrix.substr(0, this.value.length).replace(/_+/g,
          function(a) {
              return "\\d{1," + a.length + "}"
          }).replace(/[+()]/g, "\\$&");
      reg = new RegExp("^" + reg + "$");
      if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {
        this.value = new_value;
      }
      if (event.type == "blur" && this.value.length < 5) {
        this.value = "";
      }
    }

    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false);
  });
});






/*-------------ТАБ-МЕНЮ УСЛУГИ-------------*/

let p_bold = document.getElementsByClassName('questions-list-item-title-p');
let listitem = document.getElementsByClassName('questions-list-item');
let wrapinfo = document.getElementsByClassName('questions-list-item-wrapinfo');
let itemimage = document.getElementsByClassName('questions-list-item-title_image');

let imgnoac = document.getElementsByClassName('plus');

for (let i = 0; i < listitem.length; i++) {
  listitem[i].addEventListener('click', function() {
    
    wrapinfo[i].classList.toggle("questions-list-item-wrapinfo_js");

    p_bold[i].classList.toggle("questions-list-item-title-p_js");


    imgnoac[i].classList.toggle("plus_act");
    

  });
}






/*---------!!! МОДАЛКА ИНИЦИАЛИЗАЦИЯ !!!------------------*/

window.addEventListener('DOMContentLoaded', function () {
   MicroModal.init({
      openTrigger: 'data-custom-open',
      closeTrigger: 'data-micromodal-close',
      disableScroll: true,
      disableFocus: true,
      awaitOpenAnimation: true,
      awaitCloseAnimation: true,
   });
});

var body1 = document.getElementsByTagName('body')[0];

jQuery(document).ready(function($){
  jQuery(function($){
  $('.modal-order').mouseup(function (e){ // событие клика по веб-документу
    var divt = $(".container_modal"); // тут указываем ID элемента
    var divt2 = $(".modal-order"); // тут указываем ID элемента
    if (!divt.is(e.target) // если клик был не по нашему блоку
        && divt.has(e.target).length === 0) { // и не по его дочерним элементам
    
    divt2.toggleClass("is-open");
    body1.setAttribute('style', 'overflow-y: scroll');
        /*div.hide(); // скрываем его
    div2.hide(); // скрываем его*/
    console.log(111);
    }
    else{
      console.log(222);
    }
  });
});
});




jQuery(document).ready(function($){
  jQuery(function($){
  $('.modal-order').mouseup(function (e){ // событие клика по веб-документу
    var divt3 = $(".container_modal_close"); // тут указываем ID элемента
    var divt4 = $(".modal-order"); // тут указываем ID элемента
    if (!divt3.is(e.target) // если клик был не по нашему блоку
        && divt3.has(e.target).length === 0) { // и не по его дочерним элементам
    
   
        /*div.hide(); // скрываем его
    div2.hide(); // скрываем его*/
    console.log(111);
    }
    else{
       divt4.toggleClass("is-open");
    body1.setAttribute('style', 'overflow-y: scroll');
      console.log(222);
    }
  });
});
});



jQuery(document).ready(function($){
  jQuery(function($){
  $('.modal-order2').mouseup(function (e){ // событие клика по веб-документу
    var divt = $(".container_modal"); // тут указываем ID элемента
    var divt2 = $(".modal-order2"); // тут указываем ID элемента
    if (!divt.is(e.target) // если клик был не по нашему блоку
        && divt.has(e.target).length === 0) { // и не по его дочерним элементам
    
    divt2.toggleClass("is-open");
    body1.setAttribute('style', 'overflow-y: scroll');
        /*div.hide(); // скрываем его
    div2.hide(); // скрываем его*/
    console.log(111);
    }
    else{
      console.log(222);
    }
  });
});
});


jQuery(document).ready(function($){
  jQuery(function($){
  $('.modal-order2').mouseup(function (e){ // событие клика по веб-документу
    var divt3 = $(".container_modal_close"); // тут указываем ID элемента
    var divt4 = $(".modal-order2"); // тут указываем ID элемента
    if (!divt3.is(e.target) // если клик был не по нашему блоку
        && divt3.has(e.target).length === 0) { // и не по его дочерним элементам
    
   
        /*div.hide(); // скрываем его
    div2.hide(); // скрываем его*/
    console.log(111);
    }
    else{
       divt4.toggleClass("is-open");
    body1.setAttribute('style', 'overflow-y: scroll');
      console.log(222);
    }
  });
});
});

















let yandexmap = document.getElementsByClassName('yandexmap');

if (yandexmap[0]) {
ymaps.ready(function () {
    var myMap = new ymaps.Map('yandexmap', {
        center: [55.665802, 37.741549],
        zoom: 17,
        controls: []
    }, 

    {
      searchControlProvider: 'yandex#search'
    }),

    // Создаём макет содержимого.
    MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
      '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
    ),

    myPlacemark1 = new ymaps.Placemark([55.665802, 37.741549], {}, {
      // Опции.
      
      // Необходимо указать данный тип макета.
      iconLayout: 'default#image',
      // Своё изображение иконки метки.
      iconImageHref: 'img/mapsec_baloon.svg',
      // Размеры метки.
      iconImageSize: [30, 42],
      // Смещение левого верхнего угла иконки относительно
      // её "ножки" (точки привязки).
      iconImageOffset: [-5, -38],
    })

    myMap.geoObjects
        .add(myPlacemark1);
});

}