// Auto Resize First Column if you want an resize function for static background
function resize_first_column()
{
	$('.first-page').css('min-height', $( window ).height());
}

$('.carousel').carousel({
	interval: 5500
})


var revapi;

$(window).resize(function () {
	// Auto Resize First Column on window resize
	//resize_first_column();
});
	
$(function() {
	// Auto Resize First Column
	//resize_first_column();

	// NiceScroll JS
	//$("html").niceScroll();
	
	// FancyBox JS
	$(".fancybox").fancybox();
	
	// Slider Revolution
	revapi = jQuery('.tp-banner').revolution(
	{
		delay:15000,
		startwidth:1170,
		startheight:500,
		hideThumbs:10,
		fullWidth:"off",
		fullScreen:"on",
		fullScreenOffsetContainer: ""
	});

	// Auto Change CSS when scrolling above slider
    var scrollTop = $(window).scrollTop();
 
    $(window).scroll(function(){
		scrollTop = $(this).scrollTop();
		
		// Change the color of nav bar
		if (scrollTop < ($(".first-page").height())) {
			if($("#top-nav").hasClass("nav-white-container"))
			{
				$("#top-nav").removeClass("nav-white-container");
				$("#top-nav").addClass("nav-white-transparent");
				
				// Show different logo
				$(".logo-color").hide();
				$(".logo-white").show();
			}
		}
		else {
			if($("#top-nav").hasClass("nav-white-transparent"))
			{
				$("#top-nav").removeClass("nav-white-transparent");
				$("#top-nav").addClass("nav-white-container");
				
				// Show different logo
				$(".logo-white").hide();
				$(".logo-color").show();
			}
		}
		
    });
	
	// Mix It Up Plugin
	$('#Grid').mixitup();
	
	// Nice Scroll for #
	$("a").click(function() {
		var elementClicked = $(this).attr("href");
		var destination = $(elementClicked).offset().top;
		
		var extramargin = 0;
		if(elementClicked != "#top")
			extramargin -= 50;
		$("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination+extramargin}, 850 );
		return false;
	});
	
	// Perform Animation
	$("[data-animate]").each(function(index) {
		$(this).bind('inview', function (event, visible) {
			if (visible == true) {
				if(!$(this).hasClass('animated'))
				{
					$(this).addClass('animated');
					$(this).addClass($(this).attr("data-animate"));
				}
			}
		});
	});
	
	// Perform Parallax Animation
	$('[data-type="background"]').each(function(){
		var $bgobj = $(this); // assigning the object
		
		$(window).scroll(function() {
            var yPos = -($(window).scrollTop() / $bgobj.data('speed')); 
             
            // Put together our final background position
            var coords = '50% '+ yPos + 'px';
			
            // Move the background
            $bgobj.css({ backgroundPosition: coords });
        }); 
    }); 
 
});