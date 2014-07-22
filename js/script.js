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

$(document).ready(function() {
  var menu = $('#menu');
  var contenedor = $('#menu-contenedor');
  var menu_offset = menu.offset();
  // Cada vez que se haga scroll en la página
  // haremos un chequeo del estado del menú
  // y lo vamos a alternar entre 'fixed' y 'static'.
  $(window).on('scroll', function() {
    if($(window).scrollTop() > menu_offset.top) {
      menu.addClass('menu-fijo');
    } else {
      menu.removeClass('menu-fijo');
    }
  });
});