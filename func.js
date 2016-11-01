// *** Parallax *** //

$(window).scroll(function(){

  var wScroll = $(this).scrollTop();

  $('.logo-nav').css({
    'transform' : 'translate(0px, '+ wScroll /0.85 +'%)'
  });

  $('.text-header').css({
    'transform' : 'translate(0px, '+ wScroll /6 +'%)'
  });

  $('.button-header-box').css({
    'transform' : 'translate(0px, '+ wScroll /3 +'%)'
  });

  $('.mountains').css({
    'transform' : 'translate(0px, '+ wScroll /10 +'%)'

  });

  $('.small-mountain1').css({
    'transform' : 'translate(0px, -'+ wScroll /55 +'%)'
  });

  $('.small-mountain2').css({
    'transform' : 'translate(0px, -'+ wScroll /25 +'%)'
  });

  if(wScroll > $('.logo-nav').offset().top) {

    $('.box-grid').each(function(i){

      setTimeout(function(){
        $('.box-grid').eq(i).addClass('is-showing');
      }, 150 * (i+1));
    });

  }


});

// *** Menu *** //

// Large devices

document.addEventListener('DOMContentLoaded', function () {
        document.querySelector('.logo-nav .toggle').addEventListener('click', dropmenu);
});

function dropmenu() {
  document.querySelector(".header-nav").classList.toggle("show-nav");
  document.querySelector(".logo-nav .toggle").classList.toggle("close-button");
}

// Small devices

document.addEventListener('DOMContentLoaded', function () {
        document.querySelector('.logo-nav-small .toggle').addEventListener('click', dropdown);
});

function dropdown() {
  document.querySelector(".header-nav-small").classList.toggle("show-nav-small");
  document.querySelector(".logo-nav-small .toggle").classList.toggle("close-button");
}

// *** Scroll *** //

$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
});