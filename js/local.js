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

		function getSetCrossoffRemoveListItems() {

			// ul#list-output list item container
			var listOutput = $("#list-output");
			// list items inside ul#list-output
			// var listItem = listOutput.find("li");

			// Add list items when pressing [Enter] key
			$("#type-text-here").on("keypress", function(event) {

				if (event.which == "13") {
					event.preventDefault();

					// Get [input] text variable
					var listItemInput = $(this).val();

					// Create the list item & click event to cross off individual list item
					var task = $("<li>").html(listItemInput).attr("class", "pending").on("click", function() {
						if($(this).hasClass("pending")) {
							$(this).removeClass("pending").addClass("done");
						} else {
							$(this).removeClass("done").addClass("pending");
						}
					});

					listOutput.append(task);

					// After adding new list item replace input[value] attribute with an empty string
					$(this).val("");
				}

			});

			// [Reset List] button to remove all list items
			$("#reset-list").on("click", function(event) {
				event.preventDefault();
				listOutput.html("");
			});

		}

		getSetCrossoffRemoveListItems();

		// End Document Ready
	});

// End Anonymous Function
})();