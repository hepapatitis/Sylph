$(function() {
	// Nice Scroll for #
	$("a").click(function() {
		var elementClicked = $(this).attr("href");
		var destination = $(elementClicked).offset().top;
		
		var extramargin = 0;
		if(elementClicked != "#top")
			extramargin -= 50;
		$("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination+extramargin}, 500 );
		return false;
	});
});