$(document).ready(function(){
	$('.ir-arriba').click(function(){
		$('body, html').animate({
			scrollTop:'0px'
		}, 300);
	});

	$(window).scroll(function(){
		if ( $(this).scrollTop()>0) {
			$('.ir-arriba').slideDown(300);
		} else{
			$('.ir-arriba').slideUp(300);
		}
	});

//intento de deslisamiento de menu
	$('a[href*=#]').click(function() {

     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
         && location.hostname == this.hostname) {

             var $target = $(this.hash);

             $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');

             if ($target.length) {

                 var targetOffset = $target.offset().top;

                 $('html,body').animate({scrollTop: targetOffset}, 1000);

                 return false;

            }

       }


});



