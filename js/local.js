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

		/*
		get list items from [input] element and set to [ul > li] elements after pressing [Enter] on keyboard
		*/
		function getSetRemoveListItems() {

			// ul#list-output list item container
			var listOutput = $("#list-output");

			// Add list items when pressing [Enter] key
			$("#type-text-here").on("keypress", function(event) {

				if (event.which == "13") {
					event.preventDefault();

					// Get [input] text variable
					var listItemInput = $(this).val();

					listOutput.show().append("<li class='pending'>" + listItemInput + "</li>");

					// After adding new list item replace input[value] attribute with an empty string
					$(this).val("");
				}

			});

			// Replace the "pending" class with "done" after clicking a list item
			$(document).on("click", ".pending", function() {
				$(this).removeClass("pending").addClass("done");
			});

			// [Reset List] button to remove all list items
			$("#reset-list").on("click", function(event) {
				event.preventDefault();
				listOutput.html("");
			});

		}

		getSetRemoveListItems();

	// End Document Ready
	});

// End Anonymous Function
})();