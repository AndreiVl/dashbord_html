$(document).ready(function () {
	$('.header__left .btn').click(function () {
		$('.sidebar').toggleClass('sidebar--open');
		$('.overlay').toggleClass('overlay--open');
		$('body').toggleClass('overflow-heidden');
	});

	$('.sidebar__mobile .btn').click(function () {
		$('.sidebar').toggleClass('sidebar--open');
		$('.overlay').toggleClass('overlay--open');
		$('body').toggleClass('overflow-heidden');
	});

	let scrolled = 100;

	// changeScrolled();


	$(window).scroll(function () {
		let $this = $(this),
			st = $this.scrollTop();

		menuScrollDesktop(st);
	});

	$(window).resize(function () {
		let st = $(window).width();

		menuDesktopShow(st);
	});

	function menuScrollDesktop(st) {
		if (st > scrolled) {
			$('body').addClass('scrolled');
		} else {
			$('body').removeClass('scrolled');
		}
	};

	function menuDesktopShow(st) {
		if (st > 1199) {
			if ($('.overflow-heidden').length) {
				$('.sidebar').toggleClass('sidebar--open');
				$('.overlay').toggleClass('overlay--open');
				$('body').toggleClass('overflow-heidden');
			}
		}
	};

	function changeScrolled() {
		scrolled = 0;
	};

});