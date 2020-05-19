/*-----------------------------------------------------------------------------------
/* Styles Switcher
-----------------------------------------------------------------------------------*/

window.console = window.console || (function(){
	var c = {}; c.log = c.warn = c.debug = c.info = c.error = c.time = c.dir = c.profile = c.clear = c.exception = c.trace = c.assert = function(){};
	return c;
})();


jQuery(document).ready(function($) {
	

		$("ul.pattern .default" ).click(function(){
			$("#color-opt").attr("href", "css/colors/default.css" );
			return false;
		});
		
		$("ul.pattern .light-green" ).click(function(){
			$("#color-opt").attr("href", "css/colors/light-green.css" );
			return false;
		});
		
		$("ul.pattern .dark-pink" ).click(function(){
			$("#color-opt").attr("href", "css/colors/dark-pink.css" );
			return false;
		});

		$("ul.pattern .yellow" ).click(function(){
			$("#color-opt").attr("href", "css/colors/yellow.css" );
			return false;
		});
		$("ul.pattern .purple" ).click(function(){
			$("#color-opt").attr("href", "css/colors/purple.css" );
			return false;
		});
		$("ul.pattern .light-yellow" ).click(function(){
			$("#color-opt").attr("href", "css/colors/light-yellow.css" );
			return false;
		});
		
		$("#style-switcher .bottom a.settings").click(function(e){
			e.preventDefault();
			var div = $("#style-switcher");
			if (div.css("left") === "-189px") {
				$("#style-switcher").animate({
					left: "0px"
				}); 
			} else {
				$("#style-switcher").animate({
					left: "-189px"
				});
			}
		})
		
		$("ul.pattern li a").click(function(e){
			e.preventDefault();
			$(this).parent().parent().find("a").removeClass("active");
			$(this).addClass("active");
		})

		$("#style-switcher").animate({
			left: "-189px"
		}); 
				
	});