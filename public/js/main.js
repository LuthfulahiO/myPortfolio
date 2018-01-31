$(document).ready(function(){
	$('#intro').addClass('swing');
	$('.fadeh').addClass('fadeInUpBig');
	$('.swg').addClass('swing');
	// style switching
	$('#pink').click(function(){
		$('#switcher').attr('href', 'css/pink.css');
	});
	$('#green').click(function(){
		$('#switcher').attr('href', 'css/green.css');
	});
	$('#black').click(function(){
		$('#switcher').attr('href', 'css/black.css');
	});
	$('#blue').click(function(){
		$('#switcher').attr('href', 'css/blue.css');
	});
	// color switcher end
	$('a[href^="#"]').on('click',function (e) {
		    e.preventDefault();

		    var target = this.hash;
		    var $target = $(target);
		    // console.log(target);
		    // console.log($target);

		    $('html, body').stop().animate({
		        'scrollTop': $target.offset().top
		    }, 2000);
		});
});