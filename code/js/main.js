function resize_first_page()
{
	$('.first-page').css('min-height', $( window ).height());
}

function getScrollTop()
{ //  Verifies the total sum in pixels of the whole page
 
    if(typeof pageYOffset!= 'undefined'){
        // Most browsers
        return pageYOffset;
    }
    else{
        var B= document.body; //IE 'quirks'
        var D= document.documentElement; //IE with doctype
        D= (D.clientHeight)? D: B;
        return D.scrollTop;
    }
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
	
	a=parseFloat(400);// Initial value for the first background (bk 0)
    b=parseFloat(0);// Initial value for the first background (bk 0)
    c=parseFloat(400);// Initial value for the second background (bk 1)
    d=parseFloat(0);// Initial value for the second background (bk 1)
    var scrollTop = $(window).scrollTop();
 
    $(window).scroll(function(){//This is not the cleanest way to do this, I'm just keeping it short.
        if(scrollTop > $(this).scrollTop()) // Scroll up
        {
            if (getScrollTop()<=1600 && getScrollTop()>=0)// Identifies the position for the first background when a scroll event occurs
            {
                    a=a+1;// Position for the first background, it decreases in 35 pixels
                    b=b+1;// Position for the first background, it decreases in 10 pixels
                    $('.parallax-2').css('backgroundPosition', '50% '+a+'px');
                    $('.parallax-1').css('backgroundPosition', '0 '+b+'px');
            }
            if (getScrollTop()>=2050 && getScrollTop()<=3650)
            {
                    c=c+35;// Position for the second background, it decreases in 35 pixels
                    d=d+10;// Position for the second background, it decreases in 10 pixels
                    $('.img_2').css('backgroundPosition', '50% '+c+'px');
                    $('.parallax-2').css('backgroundPosition', '0 '+d+'px');
            }
        }
        else
        {// Scroll down
            if (getScrollTop()>=0 && getScrollTop()<=1600)
            {
                  a=a-1;// Position for the first background, it decreases in 35 pixels
                  b=b-1;// Position for the first background, it decreases in 10 pixels
                  $('.parallax-2').css('backgroundPosition', '50% '+a+'px');
                  $('.parallax-1').css('backgroundPosition', '0 '+b+'px');
            }
            if (getScrollTop()>=2050 && getScrollTop()<=3650)
            {
                  c=c-35;// Position for the second background, it decreases in 35 pixels
                  d=d-10;// Position for the second background, it decreases in 10 pixels
                  $('.img_2').css('backgroundPosition', '50% '+c+'px');
                  $('.parallax-2').css('backgroundPosition', '0 '+d+'px');
            }
        }
        if (getScrollTop()==0)// Adjusts the positions values and resets them to zero during a scroll up event
        {
            a=parseFloat(400);
            b=parseFloat(0);
            c=parseFloat(400);
            d=parseFloat(0);
            $('.parallax-2').css('backgroundPosition', '0 0');
            $('.parallax-1').css('backgroundPosition', '0 0');
            $('.img_2').css('backgroundPosition', '50% '+400+'px');
            $('.img_1').css('backgroundPosition', '50% '+400+'px');
        }
		scrollTop = $(this).scrollTop();
	  
		  // Animate
		if (scrollTop < $("#features").scrollTop()) {
			$('#features').css("visibility", "display");
		}
    });
	
	
});