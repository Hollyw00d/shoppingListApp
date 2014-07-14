// Anonymous function
(function() {

	// jQuery Document Ready
	$(function(){

		// Set year in footer
		function getyear() {
			// Get current year
			var getdate = new Date();
			var getyear = getdate.getFullYear();

			// In footer set year to current year
			var currentyear = $("#copyright").find("span").text(getyear);
		}
		getyear();


		//


		/*
		.keyup() function to cause an alert(); after focus is triggered on
		the input#type-text-here field
		*/
		$("#type-text-here").keyup(function(keyPress) {
			if (keyPress.keyCode == 13) {
				alert('and that key just so happened to be enter');
			}
		})



	});

})();