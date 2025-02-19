(function($) {
	'use strict';
	// Mean Menu JS
	jQuery('.mean-menu').meanmenu({ 
		meanScreenWidth: "991"
	});

	// Preloader JS
	$(function() {
		$('body').addClass('loaded');
	});

	// Nice Select JS
	$('select').niceSelect();
	
	// Header Sticky JS
	$(window).on('scroll', function() {
		if ($(this).scrollTop() >150){  
			$('.navbar-area').addClass("is-sticky");
		}
		else{
			$('.navbar-area').removeClass("is-sticky");
		}
	});

	// Hero Slider JS
	$('.hero-slider').owlCarousel({
		items:1,
		loop: true,
		margin: 0,
		nav: true,
		dots: false,
		autoplay: true,
		smartSpeed: 1000,
		autoplayHoverPause: true,
		animateOut: 'fadeOut',
		navText: [
			"<i class='flaticon-left-arrow'></i>",
			"<i class='flaticon-next'></i>",
		],
	});

	// Hero Slider Two JS
	$('.hero-slider-two').owlCarousel({
		items:1,
		loop: true,
		margin: 0,
		nav: false,
		dots: true,
		autoplay: true,
		smartSpeed: 1000,
		autoplayHoverPause: true,
		animateOut: "slideOutUp",
	});

	// Featured Slider JS
	$('.featured-slider').owlCarousel({
		items:1,
		loop: true,
		margin: 0,
		nav: true,
		dots: false,
		autoplay: true,
		smartSpeed: 1000,
		autoplayHoverPause: true,
		navText: [
			"<i class='flaticon-left-arrow'></i>",
			"<i class='flaticon-next'></i>",
		],
	});

	// Partner Slider JS
	$('.partner-slider').owlCarousel({
		loop: true,
		margin: 30,
		nav: false,
		dots: false,
		autoplay: true,
		smartSpeed: 1000,
		autoplayHoverPause: true,
		responsive:{
			0:{
				items: 2,
			},
			576:{
				items: 3,
			},
			768:{
				items: 4,
			},
			1200:{
				items: 5,
			}
		}
	});

	// Projects Slider JS
	$('.projects-slider').owlCarousel({
		loop: true,
		margin: 0,
		nav: false,
		dots: true,
		autoplay: true,
		smartSpeed: 1000,
		autoplayHoverPause: true,
		responsive:{
			0:{
				items: 2,
			},
			576:{
				items: 3,
			},
			768:{
				items: 3,
			},
			1200:{
				items: 5,
			}
		}
	});

	// Testimonials Slider JS
	$('.testimonials-slider').owlCarousel({
		items:1,
		loop: true,
		margin: 0,
		nav: true,
		dots: false,
		autoplay: true,
		smartSpeed: 1000,
		autoplayHoverPause: true,
		navText: [
			"<i class='flaticon-left-arrow'></i>",
			"<i class='flaticon-next'></i>",
		],
	});
	
	// Go To Top JS
	// Scroll Event
	$(window).on('scroll', function(){
		var scrolled = $(window).scrollTop();
		if (scrolled > 300) $('.go-top').addClass('active');
		if (scrolled < 300) $('.go-top').removeClass('active');
	});  

	// Click Event JS
	$('.go-top').on('click', function() {
		$("html, body").animate({ scrollTop: "0" },  0);
	});

	// FAQ Accordion JS
	$('.accordion').find('.accordion-title').on('click', function(){
		// Adds Active Class
		$(this).toggleClass('active');
		// Expand or Collapse This Panel
		$(this).next().slideToggle('fast');
		// Hide The Other Panels
		$('.accordion-content').not($(this).next()).slideUp('fast');
		// Removes Active Class From Other Titles
		$('.accordion-title').not($(this)).removeClass('active');		
	});

	// Count Time JS
	function makeTimer() {
		var endTime = new Date("November 30, 2026 17:00:00 PDT");
		var endTime = (Date.parse(endTime)) / 1000;
		var now = new Date();
		var now = (Date.parse(now) / 1000);
		var timeLeft = endTime - now;
		var days = Math.floor(timeLeft / 86400); 
		var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
		var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
		var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
		if (hours < "10") { hours = "0" + hours; }
		if (minutes < "10") { minutes = "0" + minutes; }
		if (seconds < "10") { seconds = "0" + seconds; }
		$("#days").html(days + "<span>Days</span>");
		$("#hours").html(hours + "<span>Hours</span>");
		$("#minutes").html(minutes + "<span>Minutes</span>");
		$("#seconds").html(seconds + "<span>Seconds</span>");
	}
	setInterval(function() { makeTimer(); }, 300);
		
	// Popup Video JS
	$('.popup-youtube, .popup-vimeo').magnificPopup({
		disableOn: 300,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false,
	});

	// Tabs JS
	$('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');
	$('.tab ul.tabs li').on('click', function (g) {
		var tab = $(this).closest('.tab'), 
		index = $(this).closest('li').index();
		tab.find('ul.tabs > li').removeClass('current');
		$(this).closest('li').addClass('current');
		tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
		tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();
		g.preventDefault();
	});

	

	// Odometer JS
	$('.odometer').appear(function(e) {
		var odo = $(".odometer");
		odo.each(function() {
			var countNumber = $(this).attr("data-count");
			$(this).html(countNumber);
		});
	});

	// Others Option For Responsive JS
	$(".others-option-for-responsive .dot-menu").on("click", function(){
		$(".others-option-for-responsive .container .container").toggleClass("active");
	});

	//WOW JS
	new WOW().init();

	// Product View Slider JS
	var bigimage = $("#big");
	var thumbs = $("#thumbs");
	//var totalslides = 10;
	var syncedSecondary = true;
	
	bigimage
		.owlCarousel({
		items: 1,
		slideSpeed: 2000,
		nav: true,
		autoplay: true,
		dots: false,
		loop: true,
		responsiveRefreshRate: 200,
		navText: [
			"<i class='bx bx-left-arrow-alt'></i>",
			"<i class='bx bx-right-arrow-alt'></i>",
		]
	})
	.on("changed.owl.carousel", syncPosition);
	
	thumbs
		.on("initialized.owl.carousel", function() {
		thumbs
		.find(".owl-item")
		.eq(0)
		.addClass("current");
	})
	.owlCarousel({
		items: 5,
		dots: false,
		nav: false,
		navText: [
			"<i class='bx bx-left-arrow-alt'></i>",
			"<i class='bx bx-right-arrow-alt'></i>",
		],
		smartSpeed: 200,
		slideSpeed: 500,
		slideBy: 4,
		responsiveRefreshRate: 100
	})
	.on("changed.owl.carousel", syncPosition2);
	
	function syncPosition(el) {
		//if loop is set to false, then you have to uncomment the next line
		//var current = el.item.index;
	
		//to disable loop, comment this block
		var count = el.item.count - 1;
		var current = Math.round(el.item.index - el.item.count / 2 - 0.5);
	
		if (current < 0) {
			current = count;
		}
		if (current > count) {
			current = 0;
		}

		//to this
		thumbs
		.find(".owl-item")
		.removeClass("current")
		.eq(current)
		.addClass("current");
		var onscreen = thumbs.find(".owl-item.active").length - 1;
		var start = thumbs
		.find(".owl-item.active")
		.first()
		.index();
		var end = thumbs
		.find(".owl-item.active")
		.last()
		.index();
	
		if (current > end) {
			thumbs.data("owl.carousel").to(current, 100, true);
		}
		if (current < start) {
			thumbs.data("owl.carousel").to(current - onscreen, 100, true);
		}
	}
	function syncPosition2(el) {
		if (syncedSecondary) {
			var number = el.item.index;
			bigimage.data("owl.carousel").to(number, 100, true);
		}
	}
	thumbs.on("click", ".owl-item", function(e) {
		e.preventDefault();
		var number = $(this).index();
		bigimage.data("owl.carousel").to(number, 300, true);
	});

	//skill JS
	jQuery('.skill-bar').each(function() {
		jQuery(this).find('.progress-content').animate({
		width:jQuery(this).attr('data-percentage')
		},2000);
		
		jQuery(this).find('.progress-number-mark').animate(
		{left:jQuery(this).attr('data-percentage')},
		{
			duration: 2000,
			step: function(now, fx) {
			var data = Math.round(now);
			jQuery(this).find('.percent').html(data + '%');
			}
		});  
	});

	// Sidebar Modal JS
	$(".burger-menu").on('click',  function() {
		$('.sidebar-modal').toggleClass('active');
	});
	$(".sidebar-modal-close-btn").on('click',  function() {
		$('.sidebar-modal').removeClass('active');
	});

	// MixItUp JS
	try {
		var mixer = mixitup('#Container', {
			controls: {
				toggleDefault: 'none'
			}
		});
	} catch (err) {}
	
})(jQuery);