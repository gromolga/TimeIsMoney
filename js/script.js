$( document ).ready(function() {

	$(".btn-menu").on("click", function(){
		$("#dropdown-menu").slideToggle();
	});
	if ($(window).width() <= 1024)
			$("#dropdown-menu").hide();
	$(window).resize(function(){
		if ($(window).width() > 1024)
			$("#dropdown-menu").show();
		else
			$("#dropdown-menu").hide();
	})

	$(".owl-carousel").owlCarousel({
		loop:true,
	    nav:true,
	    items: 1
	});
	$('.button').hover(
	    function(){
	    console.log($(this).parent());

	        $(this).parent().siblings(".price-head").addClass("hover");
	    },
	    function(){
	        $(this).parent().siblings(".price-head").removeClass("hover");
	    }
	);

});