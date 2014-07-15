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
		get list items from [input] element and set to [ul > li] elements
		*/
		function getAndSetListItems() {

				$("#type-text-here").keypress(function(event) {

					if (event.which == "13") {
						event.preventDefault();

						// Get [input] text variable
						var listItemInput = $(this).val();

						// ul#list-output text variable
						var listOutput = $("#list-output");

						listOutput.show();
						listOutput.append("<li>" + listItemInput + "<li>");

						$(this).val("");

					}

			});
		}

		getAndSetListItems();

		// To remove list items use $("#list-output").html(""); and clicking on button

	});

})();