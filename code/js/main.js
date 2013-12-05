function resize_first_page()
{
	$('.first-page').css('min-height', $( window ).height());
}

function animate_inview(id)
{
	$(id).bind('inview', function (event, visible) {
		if (visible == true) {
			$(id).css("visibility", "visible");
			$(id).css("opacity", "1");
		}
	});
}

$(function() {
	resize_first_page();

    var scrollTop = $(window).scrollTop();
 
    $(window).scroll(function(){
		scrollTop = $(this).scrollTop();
		
		// Change the color of nav bar
		if (scrollTop < ($(".first-page").height())) {
			if($("#top-nav").hasClass("nav-white-container"))
			{
				$("#top-nav").removeClass("nav-white-container");
				$("#top-nav").addClass("nav-white-transparent");
			}
		}
		else {
			if($("#top-nav").hasClass("nav-white-transparent"))
			{
				$("#top-nav").removeClass("nav-white-transparent");
				$("#top-nav").addClass("nav-white-container");
			}
		}
		
    });
	
	$(window).resize(function () {
		resize_first_page();
	});
});