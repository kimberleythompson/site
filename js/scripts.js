$(document).ready(function() {

	$('a[href^="#"]').on('click', function(event) {
		var target = $(this).attr("href");
		if( target.length ) {
	        event.preventDefault();
	        $('html, body').animate({
				scrollTop: $(target).offset().top
			}, 1000, "easeInOutBack");
    	}
	});

    var winHeight = $(window).height();

    $(".section").css({ "min-height": winHeight});

    $(".more-link").click(function() {
        $(this).next(".more-info").slideToggle( 2000, "easeInOutBack");
    });


    $("#Test1").click(function() {
	    hideAll()
		$(".test1").slideToggle();
	});

	$("#Test3").click(function() {
	    hideAll()
		$(".test2").slideToggle();
	});

	$("#Test2").click(function() {
	    hideAll()
		$(".test3").slideToggle();
	});

    function hideAll() {
		$(".test1").hide();
		$(".test2").hide();
		$(".test3").hide();
    }

	$(".toggle-icon").click(function() {
		$(".toggle-info").slideToggle(2000, "easeInOutBack");
	});


});