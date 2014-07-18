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
		function getAndSetListItems() {

				$("#type-text-here").keypress(function(event) {

					if (event.which == "13") {
						event.preventDefault();

						// Get [input] text variable
						var listItemInput = $(this).val();

						// ul#list-output variable setter
						var listOutput = $("#list-output");
						listOutput.show();
						listOutput.append("<li class='pending'>" + listItemInput + "</li>");

						// After adding new list item replace input[value] attribute with an empty string
						$(this).val("");

					}

			});

			/*
			For trying to pass one variable from one function to another put getAndSetListItems() & crossOffListItem() functions in one big function to call later or use this method below:
			http://stackoverflow.com/questions/10584660/how-do-i-pass-local-variable-value-from-one-function-to-another
			*/

			crossOffListItems(listOutput);

		}
		getAndSetListItems();

		// Toggle cross off & on list items
		function crossOffListItems(listItemParent) {

			var listItemParent = listParent.children("li");

		}

		// To remove list items use $("#list-output").html(""); and clicking on button

	});

})();