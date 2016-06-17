$("#p1").on("click", function () {
	$(".one").hide(1000);
})

$("#p2").on("click", function () {
	$(".two").slideToggle(1000);
})

$("#p3").on("click", function () {
	$(".three").fadeToggle(1000);
})

$("#p4").on("click", function () {
	$(".four").slideUp(500).slideDown(500);
})