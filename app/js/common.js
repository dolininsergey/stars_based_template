$(function() {

		$(".owl-carousel").owlCarousel({
				loop: true,
				items: 1,
				nav: true,
		});

		$(".toggle-mnu").click(function() {
  			$(this).toggleClass("on");
  			$(".menu-2").slideToggle();
  			return false;
		});

    
});
