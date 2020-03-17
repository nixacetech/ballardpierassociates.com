(function () {

    /* -------------------
    Animation.css calling
    ---------------------*/
    wow = new WOW({
		animateClass: 'animated',
		offset:       200
	});
	wow.init();
    
		
	/* -------------------
    Fancy box
    ---------------------*/
	$('.fancybox').fancybox({
	  helpers: {
		overlay: {
		  locked: true
		}
	  }
	});
		
})(jQuery, window, document);