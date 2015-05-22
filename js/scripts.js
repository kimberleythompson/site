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

	$(".video-icon").click(function() {
		var videoSource = $(this).data("video");
		$(".video-container").fadeTo(1000, 0, function() {
			$(".video-source").attr("src", videoSource);
			$(".main-video")[0].load();
			$(".video-container").fadeTo(1000, 1.0, function() {
				$(".main-video")[0].play();
			});
		});

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