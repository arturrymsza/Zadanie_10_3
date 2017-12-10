$(function() {
	var carouselList = $("#carousel ul"),
		slide = $(".slide"),
		arrowLeft = $("#arrowLeft"),
		arrowRight = $("#arrowRight"),
		bullet = $(".bullet"),
		current = 1;

	bullet.eq(0).addClass("current");
	
	function changeBullet(n) {
			bullet.eq(n-1).removeClass("current");
			bullet.eq(n).addClass("current");
	};

	setInterval(function() {
		var firstItem = carouselList.find("li:first"),
			lastItem = carouselList.find("li:last"),
			bul = current++;
		carouselList.animate({'marginLeft':-400}, 500, function(){
			lastItem.after(firstItem);
			carouselList.css({marginLeft:0});
			if (bul <= 4) {
				changeBullet(bul);
			} 
		});
	}, 3000);

	arrowLeft.on('click', function() {
		var firstItem = carouselList.find("li:first"),
			lastItem = carouselList.find("li:last");
		carouselList.animate({'marginLeft':+400}, 500, function(){
			firstItem.before(lastItem);
			carouselList.css({marginLeft:0, marginRight:0});
		});
	})

	arrowRight.on('click', function() {
		var firstItem = carouselList.find("li:first"),
			lastItem = carouselList.find("li:last");
		carouselList.animate({'marginLeft':-400}, 500, function(){
			lastItem.after(firstItem);
			carouselList.css({marginLeft:0});
		});
	})
});