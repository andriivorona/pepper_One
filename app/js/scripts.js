$(document).ready(function() {
	$('.bg-img').each(function() {
	var $this = $(this);
	$this.css('background-image', 'url('+ $this.find('> img').attr('src')+')');
	});
	mobileMenu();

    /////////
    $('.faq-item__body').hide();

    $('.faq-item .faq-item__header').click(function() {

    	if ($(this).closest('.faq-item').hasClass('active')) {
    		
	        $(this).siblings('.faq-item__body').slideUp();

	        $(this).closest('.faq-item').removeClass('active');
    	} else {

	        $(this).siblings('.faq-item__body').slideDown();

	        var itemsForClosed = $(this).closest('.faq-item').addClass('active').siblings('.faq-item');

	        itemsForClosed.removeClass('active');
	        itemsForClosed.find('.faq-item__body').slideUp();
    	}
    });

   $('.faq-item').eq(0).find('.faq-item__header').click();

   	$('.header-nav li a').on('click' , function(e){
		var href = $(this).attr('href'),
			headerHeight = $('header').outerHeight(),
			offsetTop = href === "#" ? 0 : $(href).offset().top;
		$('html, body').stop().animate({  scrollTop: offsetTop - headerHeight}, 800);
			e.preventDefault();
			$(".main-nav").scrollspy({ offset: - headerHeight });
	});
	//scroll
	//header-scroll
}); // ready


$(window).scroll(function() {
	if ($(window).scrollTop() > 0) {
		$('.header').addClass('headerScroll');

	} else {
		$('.header').removeClass('headerScroll');
	}
})

function mobileMenu() {
	$('<a href="#" class="open-menu"><span></span><span></span><span></span>Open Menu</a>').appendTo('.header .container');
	$('.open-menu').click(function () {
	$('body').toggleClass('menu-opened');
	return false;
	});
}
//mobile-menu

