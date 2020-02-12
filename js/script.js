/* var h_hght = 150; // высота шапки
var h_mrg = 0;    // отступ когда шапка уже не видна

var container__menu_grey = document.getElementsByClassName("container__menu_grey")[0];


$(function(){
 
    var elem = $('#top_nav');
    var top = $(this).scrollTop();
     
    if(top > h_hght){
        elem.css('top', h_mrg);
    }           
     
    $(window).scroll(function(){
        top = $(this).scrollTop();
         
        if (top+h_mrg < h_hght) {
            elem.css('top', (h_hght-top));
        } else {
            elem.css('top', h_mrg);
        }
    });
 
}); */