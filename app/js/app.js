
$(document).ready(function(){
	
	//---------------
	// mobile nav
	mobileMenu();

	function mobileMenu() {
		 $('<a href="#" class="open-menu"><span></span><span></span><span></span>Open Menu</a>').appendTo('.header .container .header-left');
	    $('.open-menu').click(function () {
	    $('body').toggleClass('menu-opened');
	        return false;
	    });
	}
	// function smRow() {
	// 	$(window).resize(function() {
	// 		if($(window).width() <768){
	// 			$(.item).addClass('.sm-row')
	// 		}
	// 	});
	// }

	//---------------
	//custom selects

	$("select").select2({
	    minimumResultsForSearch: Infinity
	});



});