	$(document).ready(function (){


		var banner = $('#banner');


	// Definit altura dinamica para el banner

		function alturaBanner(){

			var vpaltura = $(window).height();
			banner.css('height', vpaltura);

		}

		alturaBanner();

		$(window).resize(alturaBanner);



	});


