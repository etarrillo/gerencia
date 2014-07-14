// alert('hola');
$(function () {
    $('#menu').metisMenu();
});

$(document).ready(function() {            
	$().UItoTop({ easingType: 'easeOutQuart' });            
});

jQuery(function(){	
	jQuery('#camera_wrap_1').camera({
		thumbnails: false,
		height: '350px',
		fx: 'mosaic'
	});
});