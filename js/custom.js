$(function(){
	$(document).ready(function(){
    $('.venobox').venobox(); 
});
// back to top botton-----------------------------
	var back2top = $ (".back-to-top");
	var html_body = $ ('html, body');
back2top.click(function(){
	html_body.animate({scrollTop:0},1000);
});
	
$(window).scroll(function(){
	var scrolling = $(this) . scrollTop();
	if(scrolling > 500 ){
		back2top.fadeIn(500);
	}
	else{
		back2top.fadeOut(500);
	}
	if(scrolling > 500 ){
		$(".navbar"). addClass("bg");
	}
	else{
		$(".navbar"). removeClass("bg");

	}
});
//animation scroll js
    var html_body = $('html, body');
    $('.navbar a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 0
                }, 1500);
                return false;
            }
        }
    });
	$('.card-deck').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		arrows: true,
		speed: 1000,
		prevArrow: '.slider-left',
		nextArrow: '.slider-right'
	});
	
	//wow js-----------
	new WOW().init();
	//preloder-----------
	
	$(window).on('load',function(){
	$(".holder").delay(1000).fadeOut(500);
});
	

});