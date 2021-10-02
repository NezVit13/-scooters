new Swiper ('.swiper-container', {
	navigation:{
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	pagination:{
		el: '.swiper-pagination',
		clickable: true,
	},
	slidesPerView: 3,
	loop: true,
	autoplay: {
		delay: 5000,
		stopOnLastSlide: true,
		disableOnInteraction: false,
	}
})