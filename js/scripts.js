$(function() {
	console.log('start');
	var carouselList = $("#carousel .slides"),
		arrowLeft = $("#arrowLeft"),
		arrowRight = $("#arrowRight"),
		$bullet = $(".bullet"),
		current = 1,
		interval;

	var CONSTANTS = Object.freeze({
		DIRECTION_LEFT: -1,
		DIRECTION_RIGHT: 1
	});

	$bullet.eq(0).addClass("current");
	
	function changeBullet(direction) {
		var currentBulletIndex = $('.bullet.current').index();

		switch (direction) {						
			case CONSTANTS.DIRECTION_LEFT:				
				if ((currentBulletIndex - 1) < 0) {
					$bullet.removeClass('current').last().addClass('current');
				} else {
					$bullet.removeClass('current').eq(currentBulletIndex - 1).addClass('current');	
				}
				break;
			case CONSTANTS.DIRECTION_RIGHT:
				if ((currentBulletIndex + 1) === $bullet.length) {
					$bullet.removeClass('current').first().addClass('current');
				} else {
					$bullet.removeClass('current').eq(currentBulletIndex + 1).addClass('current');	
				}
				break;
		}
	}

	function start() {
		return setInterval(function() {
			var firstItem = carouselList.find("li:first"),
				lastItem = carouselList.find("li:last");

			carouselList.animate({'marginLeft':-400}, 500, function(){
				lastItem.after(firstItem);
				carouselList.css({marginLeft:0});				
			});
		}, 3000);
	}

	arrowLeft.on('click', function() {
		var firstItem = carouselList.find("li:first"),
			lastItem = carouselList.find("li:last");

		changeBullet(CONSTANTS.DIRECTION_LEFT);

		firstItem.before(lastItem);	
		carouselList.css({marginLeft: -400});
		carouselList.animate({'marginLeft': 0}, 500);
	});

	arrowRight.on('click', function() {
		var firstItem = carouselList.find("li:first"),
			lastItem = carouselList.find("li:last");
		
		changeBullet(CONSTANTS.DIRECTION_RIGHT);

		carouselList.animate({'marginLeft':-400}, 500, function(){
			lastItem.after(firstItem);
			carouselList.css({marginLeft:0});
		});
	});

	$("#carousel").hover(
		function() {
			console.log('s');
			clearInterval(interval);
		},
		function() {
			console.log('u');
			interval = start();
		}
	);

	interval = start();
});