
$(function(){

	function getyear() {
		// Get current year
		var getdate = new Date();
		var getyear = getdate.getFullYear();

		// In footer set year to current year
		var currentyear = $("#copyright").find("span").text(getyear);

	}

	getyear();



});