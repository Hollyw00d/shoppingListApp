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

			// ul#list-output liste item container
			var listOutput = $("#list-output");
			// list items inside ul#list-output
			var listItem = listOutput.find("li");

			// get and set text inside [input] elem on pressing [Enter]
			$("#type-text-here").keypress(function(event) {

				if (event.which == "13") {
					event.preventDefault();

					// Get [input] text variable
					var listItemInput = $(this).val();

					listOutput.show();
					listOutput.append("<li class='pending'>" + listItemInput + "</li>");

					// After adding new list item replace input[value] attribute with an empty string
					$(this).val("");

				}

			});


//		.click(function() {
//				$(this).find("li").attr("class", "done");
//			});

			// Click [button] elem to reset list
			$("#reset-list").on("click", function(event) {
				event.preventDefault();
				listOutput.html("");
			});


		}

		getSetCrossoffRemoveListItems();


	});

})();