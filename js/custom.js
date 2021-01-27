jQuery(document).ready(function () {
	jQuery('a.taphover').on("touchstart", function (e) {    
	    var $link = jQuery(this);
	    if ($link.hasClass('hover')) {
	        return true;
	    } 
	    else {
	        $link.addClass("hover");
	        jQuery('a.taphover').not(this).removeClass("hover");
	        e.preventDefault();
	        return false; //extra, and to make sure the function has consistent return points
	    }
	});
});