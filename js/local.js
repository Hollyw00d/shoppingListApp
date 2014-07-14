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
		capture list item input into field and output to list
		*/


		function captureInputAndOutput() {


				/*
				 When [Enter] pressed on keyboard alert() value of
				 list item
				*/
				$("#type-text-here").keypress(function(event) {


				var listItemInput = $(this).val();

				if (event.which == "13") {
					alert(listItemInput);
				}


				// After entering list item in [input] element alert() value of list item when field loses focus
//			$("input").change(function(){
//				var getText = $(this).val();
//
//				alert(getText);
//			});


			});
		}

		captureInputAndOutput();

	});

})();