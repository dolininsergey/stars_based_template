




$(function() {

		$(".owl-carousel").owlCarousel({
				loop: true,
				items: 1,
				nav: true,
				navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		});

		$(".toggle-mnu").click(function() {
  			$(this).toggleClass("on");
  			$(".menu-2").slideToggle();
  			return false;
		});


// var shortMenu 	 = document.querySelector('.menu-1');
// var searchButton = document.querySelector('.fa-search');
// var searchField  = document.querySelector('.search-field');

// searchButton.onclick() = function() {
// 	// searchField = style.display = 'none';
// 	alert("Hello!");
// }

$('.search-button').click(function(e) {
		$(this).css('color', '#1A54E7'); 
  	$('.menu-1 input').animate({width: 'toggle'});
	});    
});
