$(".fadeitem").on('click', function() {
	$(this).fadeOut(1000,function(){
		$("#viewer").append(this);
		$(this).css("display", "block");
	});
});