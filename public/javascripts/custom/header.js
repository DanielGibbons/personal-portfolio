$('.navbar-collapse').on('hide.bs.collapse', function () {
	$(".color-bar").animate({ top: '83.25px' }, 350);
});

$('.navbar-collapse').on('show.bs.collapse', function () {
	$(".color-bar").animate({ top: '243.25px' }, 275);
});

$(window).resize(function () {
	if ($(window).width() > 991) {
		$(".color-bar").animate({ top: '83.25px' }, 350);
	} else {
		if ($('.navbar-collapse').hasClass('show')) {
			$(".color-bar").animate({ top: '243.25px' }, 275);
		}
	}
});