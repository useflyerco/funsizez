/*
 * Copyright (c) 2021 marketify
 * Author: marketify
 * This file is made for CURRENT TEMPLATE
*/


jQuery(document).ready(function(){

	"use strict";
	
	// here all ready functions
	
	edina_tm_owl_carousel();
	edina_tm_down();
	edina_tm_trigger_menu();
	edina_tm_nav_bg();
	edina_tm_modalbox();
	edina_tm_imgtosvg();
	edina_tm_data_images();
	edina_tm_contact_form();
	edina_tm_read_progress();
	
	if(document.readyState === 'complete'){
		edina_tm_my_load();
	}else{
		jQuery(window).on('load', edina_tm_my_load);
	}
	
});

// -----------------------------------------------------
// ---------------   FUNCTIONS    ----------------------
// -----------------------------------------------------

// -----------------------------------------------------
// ----------------    OWL CAROUSEL    -----------------
// -----------------------------------------------------

function edina_tm_owl_carousel(){

	"use strict";
	
	var carousel			= jQuery('.my_carousel .owl-carousel');
	var carousel2			= jQuery('.edina_tm_testimonials .owl-carousel');
	
	var rtlMode	= false;

	if(jQuery('body').hasClass('rtl')){
		rtlMode = 'true';
	}
	
	carousel.each(function(){
		var element = jQuery(this);		
		
		element.owlCarousel({
			loop: false,
			items: 3,
			lazyLoad: false,
			margin: 30,
			autoplay: true,
			autoplayTimeout: 7000,
			rtl: rtlMode,
			dots: true,
			nav: false,
			navSpeed: false,
			responsive : {
				0 : {
					items: 1
				},
				768 : {
					items: 2
				},
				1040 : {
					items: 3
				}
			}
		});

		element.parent().find('.next_button').click(function() {
			element.trigger('next.owl.carousel');
			return false;
		});
		// Go to the previous item
		element.parent().find('.prev_button').click(function() {
			// With optional speed parameter
			// Parameters has to be in square bracket '[]'
			element.trigger('prev.owl.carousel');
			return false;
		});
		
	});
	
	carousel2.owlCarousel({
			loop: true,
			items: 2,
			lazyLoad: false,
			margin: 30,
			autoplay: true,
			autoplayTimeout: 7000,
			rtl: rtlMode,
			dots: true,
			nav: false,
			navSpeed: false,
			responsive : {
					0 : {
						items: 1
					},
					768 : {
						items: 2
					}
				}
		});
		edina_tm_imgtosvg();
}

// -----------------------------------------------------
// -----------------    DOWN    ------------------------
// -----------------------------------------------------

function edina_tm_down(){
	
	"use strict";
	
	var topbar		= jQuery('.edina_tm_topbar').outerHeight();
	jQuery('.edina_tm_hero .edina_tm_button a').on('click',function(){
		if($('.edina_tm_topbar').length){
			if($.attr(this, 'href') !== '#'){
			$('html, body').animate({
				scrollTop: $($.attr(this, 'href')).offset().top-topbar+40
			}, 800);
		}
		}
	});
	
	jQuery('.edina_tm_intro .edina_tm_button a').on('click',function(){
		
			if($.attr(this, 'href') !== '#'){
			$('html, body').animate({
				scrollTop: $($.attr(this, 'href')).offset().top-100
			}, 800);
		}
		
	});
}

// -------------------------------------------------
// -------------  PROGRESS BAR  --------------------
// -------------------------------------------------

function tdProgress(container){
	
	"use strict";
		
	container.find('.progress_inner').each(function() {
		var progress 		= jQuery(this);
		var pValue 			= parseInt(progress.data('value'), 10);
		var pColor			= progress.data('color');
		var pBarWrap 		= progress.find('.bar');
		var pBar 			= progress.find('.bar_in');
		var number 			= progress.find('.number');
		var label 			= progress.find('.label');
		number.css({right:(100 - pValue)+'%'});
		setTimeout(function(){label.addClass('opened');},500);
		pBar.css({width:pValue+'%', backgroundColor:pColor});
		setTimeout(function(){pBarWrap.addClass('open');});
	});
}

jQuery('.dodo_progress').each(function() {

	"use strict";

	var pWrap 			= jQuery(this);
	pWrap.waypoint({handler: function(){tdProgress(pWrap);},offset:'90%'});	
	
});

// -----------------------------------------------------
// ---------------   TRIGGER MENU    -------------------
// -----------------------------------------------------

function edina_tm_trigger_menu(){
	
	"use strict";

	var hamburger 		= jQuery('.my_trigger .hamburger');
	var mobileMenu		= jQuery('.edina_tm_mobile_menu .dropdown');
	var mobileMenuList	= jQuery('.edina_tm_mobile_menu .dropdown .dropdown_inner ul li a');

	hamburger.on('click',function(){
		var element 	= jQuery(this);

		if(element.hasClass('is-active')){
			element.removeClass('is-active');
			mobileMenu.slideUp();
		}else{
			element.addClass('is-active');
			mobileMenu.slideDown();
		}
		return false;
	});
	
	mobileMenuList.on('click',function(){
		jQuery('.my_trigger .hamburger').removeClass('is-active');
		mobileMenu.slideUp();
		// In-page links are scrolled by onePageNav; links to other pages navigate normally
		if(jQuery(this).attr('href').charAt(0) === '#'){
			return false;
		}
	});
}

// -----------------------------------------------------
// --------------   TOPBAR BACKGROUND    ---------------
// -----------------------------------------------------

function edina_tm_nav_bg(){
	
	"use strict";

	jQuery(window).on('scroll',function(){
		var topbar	 		= jQuery('.edina_tm_topbar');
		var WinOffset		= jQuery(window).scrollTop();

		if(WinOffset >= 100){
			topbar.addClass('animate');
		}else{
			topbar.removeClass('animate');
		}
	});
}

// -------------------------------------------------
// -------------------  ANCHOR ---------------------
// -------------------------------------------------

jQuery('.anchor_nav').onePageNav({
	filter: ':not(.external)'
});

// -----------------------------------------------------
// ---------------   PRELOADER   -----------------------
// -----------------------------------------------------

function edina_tm_preloader(){
	
	"use strict";
	
	var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;
	var preloader = $('#preloader');
	
	if (!isMobile) {
		setTimeout(function() {
			preloader.addClass('preloaded');
		}, 500);
		setTimeout(function() {
			preloader.remove();
		}, 1500);

	} else {
		preloader.remove();
	}
}

// -------------------------------------------------
// -------------  MODALBOX SERVICE -----------------
// -------------------------------------------------

function edina_tm_modalbox(){
	
	"use strict";
	
	var modalBox	= jQuery('.edina_tm_modalbox');
	var list 		= jQuery('.edina_tm_services ul li');
	var closePopup	= modalBox.find('.close');
	
	list.each(function(){
		var element 	= jQuery(this);
		var details 	= element.find('.list_inner').html();
		var buttons 	= element.find('.edina_tm_full_link');
		var mainImage	= element.find('.main');
		var imgData		= mainImage.data('img-url');
		buttons.on('click',function(){
			jQuery('body').addClass('modal');
			modalBox.addClass('opened');
			modalBox.find('.description_wrap').html(details);
			mainImage = modalBox.find('.main');
			mainImage.css({backgroundImage: 'url('+imgData+')'});
			edina_tm_imgtosvg();
			return false;
		});
	});
	function closeModal(){
		modalBox.removeClass('opened');
		modalBox.find('.description_wrap').html('');
		jQuery('body').removeClass('modal');
		return false;
	}
	closePopup.on('click',closeModal);
	modalBox.on('click','.modal_contact',function(){
		closeModal();
		jQuery('html, body').animate({scrollTop: jQuery('#contact').offset().top}, 800);
		return false;
	});
	modalBox.on('click',function(e){
		if(e.target === this){ closeModal(); }
	});
	jQuery(document).on('keydown',function(e){
		if(e.key === 'Escape' && modalBox.hasClass('opened')){ closeModal(); }
	});
}

// -----------------------------------------------------
// -----------------   MY LOAD    ----------------------
// -----------------------------------------------------

function edina_tm_my_load(){
	
	"use strict";
	
	var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent);
	if(jQuery('#preloader').length && !isMobile){
		var speed	= 300;
		setTimeout(function(){edina_tm_preloader();},speed);
		setTimeout(function(){jQuery('body').addClass('opened');},speed+700);
	}else{
		jQuery('#preloader').remove();
		jQuery('body').addClass('opened');
	}
}

// -----------------------------------------------------
// --------------------    WOW JS    -------------------
// -----------------------------------------------------

 new WOW().init();

// -----------------------------------------------------
// ---------------    IMAGE TO SVG    ------------------
// -----------------------------------------------------

function edina_tm_imgtosvg(){
	
	"use strict";
	
	jQuery('img.svg').each(function(){
		
		var jQueryimg 		= jQuery(this);
		var imgClass		= jQueryimg.attr('class');
		var imgURL			= jQueryimg.attr('src');

		jQuery.get(imgURL, function(data) {
			// Get the SVG tag, ignore the rest
			var jQuerysvg = jQuery(data).find('svg');

			// Add replaced image's classes to the new SVG
			if(typeof imgClass !== 'undefined') {
				jQuerysvg = jQuerysvg.attr('class', imgClass+' replaced-svg');
			}

			// Remove any invalid XML tags as per http://validator.w3.org
			jQuerysvg = jQuerysvg.removeAttr('xmlns:a');

			// Replace image with new SVG
			jQueryimg.replaceWith(jQuerysvg);

		}, 'xml');

	});
}

// -----------------------------------------------------
// ---------------   DATA IMAGES    --------------------
// -----------------------------------------------------

function edina_tm_data_images(){
	
	"use strict";
	
	var data			= jQuery('*[data-img-url]');
	
	data.each(function(){
		var element			= jQuery(this);
		var url				= element.data('img-url');
		element.css({backgroundImage: 'url('+url+')'});
	});
}

// -----------------------------------------------------
// ----------------    CONTACT FORM    -----------------
// -----------------------------------------------------
// Submissions go to Netlify Forms (form name "contact" in index.html).
// Enable form detection and an email notification in the Netlify dashboard.

function edina_tm_contact_form(){
	
	"use strict";
	
	var form = jQuery('#contact_form');
	if(!form.length){ return; }
	
	var notice	= form.find('.empty_notice');
	var result	= form.find('.returnmessage');
	var button	= form.find('button[type="submit"]');
	
	form.on('submit', function(e){
		e.preventDefault();
		
		var name 		= jQuery.trim(form.find('#name').val());
		var email 		= jQuery.trim(form.find('#email').val());
		var message 	= jQuery.trim(form.find('#message').val());
		var honey		= form.find('input[name="bot-field"]').val();
		var validEmail	= /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
		
		result.removeClass('error').stop(true,true).hide().empty();
		
		if(name === '' || message === '' || !validEmail){
			notice.find('span').text(validEmail || email === '' ? 'Please fill in all required fields.' : 'Please enter a valid email address.');
			notice.stop(true,true).slideDown(400).delay(2500).slideUp(400);
			return;
		}
		if(honey){ return; }
		
		button.prop('disabled', true).text('Sending…');
		
		fetch('/', {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: new URLSearchParams(new FormData(form[0])).toString()
		}).then(function(res){
			if(!res.ok){ throw new Error('Request failed'); }
			result.text(result.data('success')).slideDown(400);
			form[0].reset();
		}).catch(function(){
			result.addClass('error').html('Sorry, that didn’t send. Please email me directly at <a href="mailto:' + form.data('email') + '">' + form.data('email') + '</a>.').slideDown(400);
		}).then(function(){
			button.prop('disabled', false).text('Send message');
		});
	});
}

// -----------------------------------------------------
// ---------------   READING PROGRESS   ----------------
// -----------------------------------------------------

function edina_tm_read_progress(){
	
	"use strict";
	
	var bar = jQuery('.read_progress');
	var post = jQuery('.post_body');
	if(!bar.length || !post.length){ return; }
	
	function update(){
		var start	= post.offset().top;
		var end		= start + post.outerHeight() - jQuery(window).height();
		var pct		= (jQuery(window).scrollTop() - start) / Math.max(end - start, 1);
		bar.css('width', (Math.min(Math.max(pct, 0), 1) * 100) + '%');
	}
	jQuery(window).on('scroll resize', update);
	update();
}
