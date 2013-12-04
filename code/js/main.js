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
		
		  // Animate
		if (scrollTop < $("#features").scrollTop()) {
			$('#features').css("visibility", "display");
		}
    });
	
	$(window).resize(function () {
		resize_first_page();
	});
});