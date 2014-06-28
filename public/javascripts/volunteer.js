$(function() {
	$('.nav-button').click(function(e) {
		$('.active').removeClass('active');
		$(e.currentTarget).addClass('active');
	});
});