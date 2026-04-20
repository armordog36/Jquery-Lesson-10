$(document).ready(function () {

	// hide botanic names immediately
	$(".botanic").hide();

	// hide flower images immediately
	$(".imgdiv").hide();

	// mouseover / mouseout for headings
	$("h1, h2").mouseover(function () {
		$(this).css("color", "orange");
	});

	$("h1, h2").mouseout(function () {
		$(this).css("color", "");
	});

	// click on flower name to show only its botanic name
	$(".flower").click(function () {
		$(".botanic").hide();
		$(this).children(".botanic").show();
	});

	// hover event for flowers with pictures
	$(".pic").hover(
		function (evt) {
			var picId = "#" + $(this).attr("title");
			var xPos = evt.pageX + 150;
			var yPos = evt.pageY;

			$(picId).css({
				left: xPos + "px",
				top: yPos + "px"
			}).show();
		},
		function () {
			var picId = "#" + $(this).attr("title");
			$(picId).hide();
		}
	);

	// keypress event to jump to first flower starting with typed letter
	$(document).keypress(function (evt) {
		var keyPressed = String.fromCharCode(evt.which).toLowerCase();
		window.location = "#" + keyPressed;
	});

});