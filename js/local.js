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
		the input#type-text-here field and Enter key pressed
		*/


		function captureInputAndOutput() {


				// If [Enter] key pressed output capture input
				$("input").keypress(function(event) {

//				var listItemInput = $("#type-text-here", this).val();
				var listItemInput = $("#type-text-here").val();



				if (event.which == "13") {
					event.preventDefault();

//					alert("Enter key pressed!");
					alert(listItemInput);

				}
			});
		}

		captureInputAndOutput();

	});

})();