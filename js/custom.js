function isAlphaNum(event) {
	var regex = new RegExp("^[a-zA-Z0-9\\s]+$");
	var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
	if (!regex.test(key)) {
		event.preventDefault();
		return false;
	}
}

jQuery(window).load(function(){

	"use strict";

	/* Method for parallax */
	if ( jQuery('.parallax').length ) {
		jQuery('.parallax').each(function(){
			jQuery(this).parallax("30%", 0.1);
		});
	}

	jQuery('.page-loader').remove();
});