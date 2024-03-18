(function ($) {
    "use strict";

    /*===============================
    =         Wow Active            =
    ================================*/

    new WOW().init();
    
    /*=============================================
    =       Menu sticky & Scroll to top          =
    =============================================*/
	var windows = $(window);
	var screenSize = windows.width();
	var sticky = $('.header-sticky');
	var $html = $('html');
	var $body = $('body');

	windows.on('scroll', function () {
		var scroll = windows.scrollTop();
		var headerHeight = sticky.height();

		if (screenSize >= 320) {
			if (scroll < headerHeight) {
				sticky.removeClass('is-sticky');
			} else {
				sticky.addClass('is-sticky');
            }
		}

    });
    /*----------  Scroll to top  ----------*/
    function scrollToTop() {
        var $scrollUp = $('#scroll-top'),
            $lastScrollTop = 0,
            $window = $(window);

        $window.on('scroll', function () {
            var st = $(this).scrollTop();
            if (st > $lastScrollTop) {
                $scrollUp.removeClass('show');
            } else {
                if ($window.scrollTop() > 200) {
                    $scrollUp.addClass('show');
                } else {
                    $scrollUp.removeClass('show');
                }
            }
            $lastScrollTop = st;
        });

        $scrollUp.on('click', function (evt) {
            $('html, body').animate({scrollTop: 0}, 600);
            evt.preventDefault();
        });
    }
    scrollToTop();
    
    /*=========================================
    =            Preloader active            =
    ===========================================*/

    windows.on('load', function(){
        $(".preloader-activate").removeClass('preloader-active');
    });
    
    
    jQuery(window).on('load', function(){
		setTimeout(function(){
        jQuery('.open_tm_preloader').addClass('loaded');
        }, 500);
	});
    

    /*=========================================
    =            One page nav active          =
    ===========================================*/
    
    var top_offset = $('.navigation-menu--onepage').height() - 60;
    $('.navigation-menu--onepage ul').onePageNav({
        currentClass: 'active',
        scrollOffset: top_offset,
    });
    
    var top_offset_mobile = $('.header-area').height();
    $('.offcanvas-navigation--onepage ul').onePageNav({
        currentClass: 'active',
        scrollOffset: top_offset_mobile,
    });
    
    
    /*===========================================
    =            Submenu viewport position      =
    =============================================*/
    
    if ($(".has-children--multilevel-submenu").find('.submenu').length) {
        var elm = $(".has-children--multilevel-submenu").find('.submenu');
        
        elm.each(function(){
            var off = $(this).offset();
            var l = off.left;
            var w = $(this).width();
            var docH = windows.height();
            var docW = windows.width() - 10;
            var isEntirelyVisible = (l + w <= docW);

            if (!isEntirelyVisible) {
                $(this).addClass('left');
            }
        });
    }
    /*==========================================
    =            mobile menu active            =
    ============================================*/
    
    $("#mobile-menu-trigger").on('click', function(){
        $("#mobile-menu-overlay").addClass("active");
        $body.addClass('no-overflow');
    });
    
    $("#mobile-menu-close-trigger").on('click', function(){
        $("#mobile-menu-overlay").removeClass("active");
        $body.removeClass('no-overflow');
    });
    
    $(".offcanvas-navigation--onepage ul li a").on('click', function(){
        $("#mobile-menu-overlay").removeClass("active");
        $body.removeClass('no-overflow');
    });
    
    /*Close When Click Outside*/
    $body.on('click', function(e){
        var $target = e.target;
        if (!$($target).is('.mobile-menu-overlay__inner') && !$($target).parents().is('.mobile-menu-overlay__inner') && !$($target).is('#mobile-menu-trigger') && !$($target).is('#mobile-menu-trigger i')){
            $("#mobile-menu-overlay").removeClass("active");
            $body.removeClass('no-overflow');
        }
        if (!$($target).is('.search-overlay__inner') && !$($target).parents().is('.search-overlay__inner') && !$($target).is('#search-overlay-trigger') && !$($target).is('#search-overlay-trigger i')){
            $("#search-overlay").removeClass("active");
            $body.removeClass('no-overflow');
        }
    });
    
    
    /*===================================
    =           Menu Activeion          =
    ===================================*/
    var cururl = window.location.pathname;
    var curpage = cururl.substr(cururl.lastIndexOf('/') + 1);
    var hash = window.location.hash.substr(1);
    if((curpage == "" || curpage == "/" || curpage == "admin") && hash=="")
        {
        //$("nav .navbar-nav > li:first-child").addClass("active");
        } else {
            $(".navigation-menu li").each(function()
        {
            $(this).removeClass("active");
        });
        if(hash != "")
            $(".navigation-menu li a[href*='"+hash+"']").parents("li").addClass("active");
        else
        $(".navigation-menu li a[href*='"+curpage+"']").parents("li").addClass("active");
    }
    
    
    /*=========================================
    =             open menu Active            =
    ===========================================*/
     $('.openmenu-trigger').on('click', function (e) {
        e.preventDefault();
        $('.open-menuberger-wrapper').addClass('is-visiable');
    });

    $('.page-close').on('click', function (e) {
        e.preventDefault();
        $('.open-menuberger-wrapper').removeClass('is-visiable');
    });
    
      
    /*=========================================
    =             open menu Active            =
    ===========================================*/
    $("#open-off-sidebar-trigger").on('click', function(){
        $("#page-oppen-off-sidebar-overlay").addClass("active");
        $body.addClass('no-overflow');
    });
    
    $("#menu-close-trigger").on('click', function(){
        $("#page-oppen-off-sidebar-overlay").removeClass("active");
        $body.removeClass('no-overflow');
    });
    
    /*=============================================
    =            search overlay active            =
    =============================================*/
    
    $("#search-overlay-trigger").on('click', function(){
        $("#search-overlay").addClass("active");
        $body.addClass('no-overflow');
    });
    
    $("#search-close-trigger").on('click', function(){
        $("#search-overlay").removeClass("active");
        $body.removeClass('no-overflow');
    });
    
    /*=============================================
    =            hidden icon active            =
    =============================================*/
    
    $("#hidden-icon-trigger").on('click', function(){
        $("#hidden-icon-wrapper").toggleClass("active");
    });
    

    /*=============================================
    =            newsletter popup active            =
    =============================================*/
    
    $("#newsletter-popup-close-trigger").on('click', function(){
        $("#newsletter-popup").removeClass("active");
    });
    
    
    /*=========================================
    =             open menu Active            =
    ===========================================*/
    var nodeList = document.querySelectorAll('.share-icon');
    nodeList.forEach((el, i)=>{
        el.addEventListener("click", function(e){
            e.target.parentElement.parentElement.classList.toggle("opened")
            e.stopPropagation();
        })
    })

    
    /*=============================================
    =            offcanvas mobile menu            =
    =============================================*/
    var $offCanvasNav = $('.offcanvas-navigation'),
        $offCanvasNavSubMenu = $offCanvasNav.find('.sub-menu');
    
    /*Add Toggle Button With Off Canvas Sub Menu*/
    $offCanvasNavSubMenu.parent().prepend('<span class="menu-expand"><i></i></span>');
    
    /*Close Off Canvas Sub Menu*/
    $offCanvasNavSubMenu.slideUp();
    
    /*Category Sub Menu Toggle*/
    $offCanvasNav.on('click', 'li a, li .menu-expand', function(e) {
        var $this = $(this);
        if ( ($this.parent().attr('class').match(/\b(menu-item-has-children|has-children|has-sub-menu)\b/)) && ($this.attr('href') === '#' || $this.hasClass('menu-expand')) ) {
            e.preventDefault();
            if ($this.siblings('ul:visible').length){
                $this.parent('li').removeClass('active');
                $this.siblings('ul').slideUp();
            } else {
                $this.parent('li').addClass('active');
                $this.closest('li').siblings('li').removeClass('active').find('li').removeClass('active');
                $this.closest('li').siblings('li').find('ul:visible').slideUp();
                $this.siblings('ul').slideDown();
            }
        }
    });
    
    /*=======================================
    =    	Portfolio Masonry Activation    =
    =========================================*/

        $('.projects-masonary-wrapper').imagesLoaded(function () {

            // filter items on button click
            $('.messonry-button').on('click', 'button', function () {
                var filterValue = $(this).attr('data-filter');
                $(this).siblings('.is-checked').removeClass('is-checked');
                $(this).addClass('is-checked');
                $grid.isotope({
                    filter: filterValue
                });
            });

            // init Isotope
            var $grid = $('.mesonry-list').isotope({
                percentPosition: true,
                transitionDuration: '0.7s',
                layoutMode: 'masonry',/*
                masonry: {
                    columnWidth: '.resizer',
                }*/
            });
        });
    
  
    /*==================================
    =	      Mesonry Activation       =
    ===================================*/

    $('.masonry-activation').imagesLoaded(function () {
        // init Isotope
        var $grid = $('.masonry-wrap').isotope({
            itemSelector: '.masonary-item',
            percentPosition: true,
            transitionDuration: '0.7s',
            masonry: {
                // use outer width of grid-sizer for columnWidth
                columnWidth: 2,
                percentPosition: true
            }
        });

    });
    
    
    /*=============================================
    =            background image            =
    =============================================*/

    var bgSelector = $(".bg-img");
    bgSelector.each(function (index, elem) {
        var element = $(elem),
            bgSource = element.data('bg');
        element.css('background-image', 'url(' + bgSource + ')');
    });

    /*=============================================
    =            wavify activation            =
    =============================================*/

    

    if($('#feel-the-wave , .feel-the-wave').length) {
        $('#feel-the-wave , .feel-the-wave').wavify({
            height: 80,
            bones: 5,
            amplitude: 100,
            color: 'rgba(224,238,255,0.5)',
            //color: 'url(#gradient1)',
            speed: .15
        });
    }

    if($('#feel-the-wave-two , .feel-the-wave-two').length) {
        $('#feel-the-wave-two , .feel-the-wave-two').wavify({
            height: 120,
            bones: 4,
            amplitude: 60,
            color: 'rgba(224,238,255,0.4)',
            //color: 'url(#gradient2)',
            speed: .25
        });
    }

    /*=====  End of wavify activation  ======*/

    

    $(document).ready(function(){
        
    /*=============================================
    =            swiper slider activation            =
    =============================================*/


            
    var carouselSlider = new Swiper('.hero-slider__container', {
        slidesPerView : 1,
        slidesPerGroup: 1,
        loop: true,
        speed: 150,
        effect: 'fade',
        spaceBetween : 0,
        autoplay: {
            delay: 4000,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination-t01',
            type: 'bullets',
            clickable: true
        },
        breakpoints: {
            1499:{
                slidesPerView : 1
            },

            991:{
                slidesPerView : 1
            },

            767:{
                slidesPerView : 1

            },

            575:{
                slidesPerView : 1
            }
        }
    });
    $(".hero-slider__container").hover(function() {
        (this).swiper.autoplay.stop();
    }, function() {
        (this).swiper.autoplay.start();
    });


 
    var brandLogoSlider = new Swiper('.brand-logo-slider__container', {
        slidesPerView : 6,
        loop: true,
        speed: 1000,
        spaceBetween : 30,
        autoplay: {
            delay: 3000,
        },

        breakpoints: {
            1499:{
                slidesPerView : 6
            },

            991:{
                slidesPerView : 4
            },

            767:{
                slidesPerView : 3

            },

            575:{
                slidesPerView : 2
            }
        }
    });
    
    var carouselSlider = new Swiper('.top-info-slider__container', {
        slidesPerView : 3,
        slidesPerGroup: 1,
        loop: true,
        speed: 1000,
        autoplay: true,
        spaceBetween : 30,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination-1',
            type: 'bullets',
            clickable: true
        },
        breakpoints: {
            1499:{
                slidesPerView : 3
            },
            1200:{
                slidesPerView : 2
            },

            991:{
                slidesPerView : 1
            },

            767:{
                slidesPerView : 1

            },

            575:{
                slidesPerView : 1
            }
        }
    });
        
    var carouselSlider = new Swiper('.single-flexible__container', {
        slidesPerView : 1,
        slidesPerGroup: 1,
        loop: true,
        speed: 1000,
        spaceBetween : 30,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination-1',
            type: 'bullets',
            clickable: true
        },
        breakpoints: {
            1499:{
                slidesPerView : 3
            },
            1200:{
                slidesPerView : 2
            },

            991:{
                slidesPerView : 1
            },

            767:{
                slidesPerView : 1

            },

            575:{
                slidesPerView : 1
            }
        }
    });

        
    var carouselSlider = new Swiper('.service-slider__container', {
        slidesPerView : 4,
        slidesPerGroup: 4,
        loop: true,
        speed: 1000,
        autoplay: true,
        spaceBetween : 0,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination-service',
            type: 'bullets',
            clickable: true
        },
        breakpoints: {
            1499:{
                slidesPerView : 3,
                slidesPerGroup: 3
            },
            1200:{
                slidesPerView : 3,
                slidesPerGroup: 3
            },

            991:{
                slidesPerView : 2,
                slidesPerGroup: 2
            },

            767:{
                slidesPerView : 1,
                slidesPerGroup: 1

            },

            575:{
                slidesPerView : 1,
                slidesPerGroup: 1
            }
        }
    });
  
    var carouselSlider = new Swiper('.service-slider__project-active', {
        slidesPerView : 1,
        slidesPerGroup: 1,
        loop: true,
        speed: 1000,
        autoplay: false,
        spaceBetween : 0,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination-service',
            type: 'bullets',
            clickable: true
        },
        breakpoints: {
            1499:{
                slidesPerView : 1
            },
            1200:{
                slidesPerView : 1
            },

            991:{
                slidesPerView : 1
            },

            767:{
                slidesPerView : 1

            },

            575:{
                slidesPerView : 1
            }
        }
    });

    
    var carouselSlider = new Swiper('.three-flexible__container', {
        slidesPerView : 3,
        slidesPerGroup: 1,
        loop: true,
        speed: 1000,
        autoplay: true,
        spaceBetween : 30,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination-3',
            type: 'bullets',
            clickable: true
        },
        breakpoints: {
            1499:{
                slidesPerView : 3
            },

            991:{
                slidesPerView : 2
            },

            767:{
                slidesPerView : 1

            },

            575:{
                slidesPerView : 1
            }
        }
    });


    var carouselSlider = new Swiper('.auto--center-flexible__container', {
        slidesPerView: 'auto',
        centeredSlides: true,
        freeMode: false,    
        slidesPerGroup: 1,
        loop: true,
        speed: 1000,
        spaceBetween : 30,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination-auto',
            type: 'bullets',
            clickable: true
        },
        breakpoints: {
            1499:{
                slidesPerView : 3
            },

            991:{
                slidesPerView : 2
            },

            767:{
                slidesPerView : 1

            },

            575:{
                slidesPerView : 1
            }
        }
    });

    var carouselSlider = new Swiper('.auto--per-flexible__container', {
        slidesPerView: 'auto',
        centeredSlides: false,
        freeMode: true,    
        slidesPerGroup: 1,
        loop: true,
        speed: 1000,
        spaceBetween : 30,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination-5',
            type: 'bullets',
            clickable: true
        },
        breakpoints: {
            1499:{
                slidesPerView : 3
            },

            991:{
                slidesPerView : 2
            },

            767:{
                slidesPerView : 1

            },

            575:{
                slidesPerView : 1
            }
        }
    });

    var mySwiper = new Swiper('.auto--pree-mode-flexible__container', {
        spaceBetween : 30,
        loop: true,
        freeMode: true,
        slidesPerView: 'auto',
        pagination: {
            el: '.swiper-pagination-6',
            type: 'bullets',
            clickable: true
        },
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },
        speed: 7000
    });
        
    var carouselSlider = new Swiper('.carousel-slider__container', {
        slidesPerView : 3,
        slidesPerGroup: 1,
        loop: true,
        speed: 1000,
        spaceBetween : 30,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination-9',
            type: 'bullets',
            clickable: true
        },
        breakpoints: {
            1499:{
                slidesPerView : 3
            },

            991:{
                slidesPerView : 2
            },

            767:{
                slidesPerView : 1

            },

            575:{
                slidesPerView : 1
            }
        }
    });
        
    var carouselSlider = new Swiper('.projects-slider__container', {
        slidesPerView : 3,
        slidesPerGroup: 1,
        loop: true,
        speed: 1000,
        spaceBetween : 0,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination-project',
            type: 'bullets',
            clickable: true
        },
        breakpoints: {
            1499:{
                slidesPerView : 3
            },

            1200:{
                slidesPerView : 2
            },
            
            991:{
                slidesPerView : 2
            },

            767:{
                slidesPerView : 1

            },

            575:{
                slidesPerView : 1
            }
        }
    });    
    
    var carouselSlider = new Swiper('.projects-slider__three', {
        slidesPerView : 3,
        slidesPerGroup: 1,
        loop: true,
        speed: 1000,
        spaceBetween : 40,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination-project',
            type: 'bullets',
            clickable: true
        },
        breakpoints: {
            1499:{
                slidesPerView : 3
            },

            1200:{
                slidesPerView : 2
            },
            
            991:{
                slidesPerView : 2
            },

            767:{
                slidesPerView : 1

            },

            575:{
                slidesPerView : 1
            }
        }
    }); 
        
    var carouselSlider = new Swiper('.testimonial-slider__container', {
        slidesPerView : 2,
        slidesPerGroup: 1,
        loop: true,
        speed: 1000,
        spaceBetween : 30,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination-t01',
            type: 'bullets',
            clickable: true
        },
        breakpoints: {
            1499:{
                slidesPerView : 2
            },

            991:{
                slidesPerView : 1
            },

            767:{
                slidesPerView : 1

            },

            575:{
                slidesPerView : 1
            }
        }
    });
        
    var carouselSlider = new Swiper('.testimonial-slider__container-two', {
        slidesPerView : 3,
        slidesPerGroup: 1,
        centeredSlides: true,
        loop: true,
        speed: 1000,
        spaceBetween : 50,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination-t0',
            type: 'bullets',
            clickable: true
        },
        breakpoints: {
            1499:{
                slidesPerView : 2
            },

            991:{
                slidesPerView : 1
            },

            767:{
                slidesPerView : 1

            },

            575:{
                slidesPerView : 1
            }
        }
    });
        
    var carouselSlider = new Swiper('.testimonial-slider-machine', {
        slidesPerView : 1,
        slidesPerGroup: 1,
        loop: true,
        speed: 1000,
        spaceBetween : 0,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination-machine',
            type: 'bullets',
            clickable: true
        },
        breakpoints: {
            1499:{
                slidesPerView : 1
            },

            1200:{
                slidesPerView : 1 
            },
            
            991:{
                slidesPerView : 1
            },

            767:{
                slidesPerView : 1

            },

            575:{
                slidesPerView : 1
            }
        }
    });    
    

    /*=====  End of swiper slider activation  ======*/
    });
    
    /* =====================================
        Fullpage Scroll Animation   
    ======================================*/
    if ($('#fullpage').length) {
        $('#fullpage').fullpage({
            scrollBar: false,
            navigation: true,
            loopBottom: false,
            sectionSelector: 'section',
            scrollingSpeed: 1000,
            autoScrolling: true,
            fitToSection: true,
            fitToSectionDelay: 1000,
            afterLoad: function () {
                var activeSetion = $('.fp-viewing-' + 3);
                activeSetion.addClass('tm-one-page-footer-expanded');
            },
        });
    }

    
    /*=============================================
    =            circle progress active            =
    =============================================*/
    
    $('.chart-progress , .chart-progress__box').appear(function () {
		$('.chart-progress, .chart-progress__box').circleProgress({
			startAngle: -Math.PI / 4 * 2,
		});

	});
    
    /*======================================
    =       Countdown Activation          =     
    ======================================*/
	$('[data-countdown]').each(function () {
		var $this = $(this),
			finalDate = $(this).data('countdown');
		$this.countdown(finalDate, function (event) {
			$this.html(event.strftime('<div class="single-countdown"><span class="single-countdown__time">%D</span><span class="single-countdown__text">Days</span></div><div class="single-countdown"><span class="single-countdown__time">%H</span><span class="single-countdown__text">Hours</span></div><div class="single-countdown"><span class="single-countdown__time">%M</span><span class="single-countdown__text">Minutes</span></div><div class="single-countdown"><span class="single-countdown__time">%S</span><span class="single-countdown__text">Seconds</span></div>'));
		});
	});
    
    /*======================================
    =       instagram image slider        =     
    ======================================*/

    // $(window).on('load', function(){
    //     $.instagramFeed({
    //         'username': 'portfolio.devitems',
    //         'container': "#instagramFeed",
    //         'display_profile': false,
    //         'display_biography': false,
    //         'display_gallery': true,
    //         'styling': false,
    //         'items': 10,
    //         "image_size": "640",
    //         'margin': 0
    //     });
    // });
    
    /* ==================================
    =          Option Demo              =
    =====================================*/
    var $demoOption = $('.demo-option-container')


    $('.quick-option').on('click', function (e) {
        e.preventDefault(),
        function () {
            $demoOption.toggleClass('open')
        }()
    });


    /*=============================================
    =            counter up active            =
    =============================================*/
    
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
   
    /*===================================
        Svg Icon Draw
    ====================================*/ 
    var $svgIconBox = $('.single-svg-icon-box');
    $svgIconBox.each(function() {
        var $this = $(this),
            $svgIcon = $this.find('.svg-icon'),
            $id = $svgIcon.attr('id'),
            $icon = $svgIcon.data('svg-icon');
        var $vivus = new Vivus($id, { duration: 100, file: $icon });
        $this.on('mouseenter', function () {
            $vivus.reset().play();
        });
    });
    
    /*=====================================
    =          Countdown Time Circles     =
    =======================================*/

    $('#DateCountdown').TimeCircles({
        "animation": "smooth",
        "bg_width": 0.60,
        "fg_width": 0.025,
        "circle_bg_color": "#eeeeee",
        "time": {
            "Days": {
                "text": "Days",
                "color": "#086AD8",
                "show": true
            },
            "Hours": {
                "text": "Hours",
                "color": "#086AD8",
                "show": true
            },
            "Minutes": {
                "text": "Minutes",
                "color": "#086AD8",
                "show": true
            },
            "Seconds": {
                "text": "Seconds",
                "color": "#086AD8",
                "show": true
            }
        }
    });
    
    /*=================================- 
    =        Scroll Up Color Change    =
    ==================================-*/

    $('.slide-scroll-bg').height('.slide-scroll-bg').scrollie({
        scrollOffset: 0,
        scrollingInView: function (elem) {
            console.log(elem);
            var bgColor = elem.data('background');
            $('.bg-body-color').css('background-color', bgColor);

        }
    });

    /*=============================================
    =            light gallery active            =
    =============================================*/
    
    $('.popup-images').lightGallery(); 

    $('.video-popup').lightGallery(); 
    
    /*=============================================
        showcoupon toggle function
   =============================================*/
    $( '#showcoupon' ).on('click', function() {
        $('#checkout-coupon' ).slideToggle(500);
    });
    $("#chekout-box-2").on("change",function(){
        $(".ship-box-info").slideToggle("100");
    }); 
    
    /*=============================================
    =            reveal footer active            =
    =============================================*/
    
    var revealId = $(".reveal-footer"),
        $mainWrapper = revealId.closest("#main-wrapper"),
        $window = $(window);
    function footerFixed(){
        var heightFooter = revealId.outerHeight(),
            windowWidth = $window.width();
        if (windowWidth > 991) {
            $mainWrapper.css({
                'padding-bottom': heightFooter + 'px'
            });
        } else if(windowWidth <= 991) {
            $mainWrapper.css({
                'padding-bottom': '0px'
            });
        }
    }
    footerFixed();
    $(window).on('resize', function(){
        footerFixed();
    });


    /* ====================================
    =       All Animation For Fade Up      =
    =======================================*/

  /*  $(window).on('load', function () {
        function allAnimation() {
            $('.move-up').css('opacity', 0);
            $('.move-up').waypoint(function () {
                $('.move-up').addClass('animate');
            }, {
                offset: '90%'
            });
        }
        allAnimation();

        function allAnimationx() {
            $('.move-up-x').css('opacity', 0);
            $('.move-up-x').waypoint(function () {
                $('.move-up-x').addClass('animate');
            }, {
                offset: '90%'
            });
        }
        allAnimationx();
    })*/


    /* particles JS */
    if($('#particles-js').length){
        particlesJS('particles-js',{"particles": {"number": {"value": 80,"density": {"enable": true,"value_area": 1000}},"color": {"value": "#ffffff"},"shape": {"type": "circle","stroke": {"width": 0,"color": "#000000"},"polygon": {"nb_sides": 5},"image": {"src": "img/github.svg","width": 100,"height": 100}},"opacity": {"value": 0.5,"random": false,"anim": {"enable": false,"speed": 1,"opacity_min": 0.1,"sync": false}},"size": {"value": 5,"random": true,"anim": {"enable": false,"speed": 40,"size_min": 0.1,"sync": false}},"line_linked": {"enable": true,"distance": 150,"color": "#ffffff","opacity": 0.4,"width": 1},"move": {"enable": true,"speed": 6,"direction": "none","random": false,"straight": false,"out_mode": "out","attract": {"enable": false,"rotateX": 600,"rotateY": 1200}}},"interactivity": {"detect_on": "canvas","events": {"onhover": {"enable": true,"mode": "grab"},"onclick": {"enable": true,"mode": "repulse"},"resize": true},"modes": {"grab": {"distance": 400,"line_linked": {"opacity": 1}},"bubble": {"distance": 400,"size": 40,"duration": 2,"opacity": 8,"speed": 3},"repulse": {"distance": 200},"push": {"particles_nb": 4},"remove": {"particles_nb": 2}}},"retina_detect": true,"config_demo": {"hide_card": false,"background_color": "#b61924","background_image": "","background_position": "50% 50%","background_repeat": "no-repeat","background_size": "cover"}});
    }
    /* nasa JS */
    if($('#nasa-js').length){
        particlesJS("nasa-js", {"particles": {"number": {"value": 120,"density": {"enable": true,"value_area": 800}},"color": {"value": "#008000"},"shape": {"type": "circle","stroke": {"width": 0,"color": "#000000"},"polygon": {"nb_sides": 5},"image": {"src": "img/github.svg","width": 100,"height": 100}},"opacity": {"value": 1,"random": true,"anim": {"enable": true,"speed": 1,"opacity_min": 0,"sync": false}},"size": {"value": 3,"random": true,"anim": {"enable": false,"speed": 4,"size_min": 0.3,"sync": false}},"line_linked": {"enable": false,"distance": 150,"color": "#ffffff","opacity": 0.4,"width": 1},"move": {"enable": true,"speed": 1,"direction": "right","random": true,"straight": false,"out_mode": "out","bounce": false,"attract": {"enable": false,"rotateX": 600,"rotateY": 600}}},"interactivity": {"detect_on": "canvas","events": {"onhover": {"enable": false,"mode": "repulse"},"onclick": {"enable": true,"mode": "remove"},"resize": true},"modes": {"grab": {"distance": 400,"line_linked": {"opacity": 1}},"bubble": {"distance": 250,"size": 0,"duration": 2,"opacity": 0,"speed": 3},"repulse": {"distance": 400,"duration": 0.4},"push": {"particles_nb": 4},"remove": {"particles_nb": 2}}},"retina_detect": true});
    }

})(jQuery);





/*!
 * Lightbox v2.8.2
 * by Lokesh Dhakar
 *
 * More info:
 * http://lokeshdhakar.com/projects/lightbox2/
 *
 * Copyright 2007, 2015 Lokesh Dhakar
 * Released under the MIT license
 * https://github.com/lokesh/lightbox2/blob/master/LICENSE
 */
!(function (a, b) {
    "function" == typeof define && define.amd ? define(["jquery"], b) : "object" == typeof exports ? (module.exports = b(require("jquery"))) : (a.lightbox = b(a.jQuery));
})(this, function (a) {
    function b(b) {
        (this.album = []), (this.currentImageIndex = void 0), this.init(), (this.options = a.extend({}, this.constructor.defaults)), this.option(b);
    }
    return (
        (b.defaults = { albumLabel: "Image %1 of %2", alwaysShowNavOnTouchDevices: !1, fadeDuration: 500, fitImagesInViewport: !0, positionFromTop: 50, resizeDuration: 700, showImageNumberLabel: !0, wrapAround: !1, disableScrolling: !1 }),
        (b.prototype.option = function (b) {
            a.extend(this.options, b);
        }),
        (b.prototype.imageCountLabel = function (a, b) {
            return this.options.albumLabel.replace(/%1/g, a).replace(/%2/g, b);
        }),
        (b.prototype.init = function () {
            this.enable(), this.build();
        }),
        (b.prototype.enable = function () {
            var b = this;
            a("body").on("click", "a[rel^=lightbox], area[rel^=lightbox], a[data-lightbox], area[data-lightbox]", function (c) {
                return b.start(a(c.currentTarget)), !1;
            });
        }),
        (b.prototype.build = function () {
            var b = this;
            a(
                '<div id="lightboxOverlay" class="lightboxOverlay"></div><div id="lightbox" class="lightbox"><div class="lb-outerContainer"><div class="lb-container"><img class="lb-image" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" /><div class="lb-nav"><a class="lb-prev" href="" ></a><a class="lb-next" href="" ></a></div><div class="lb-loader"><a class="lb-cancel"></a></div></div></div><div class="lb-dataContainer"><div class="lb-data"><div class="lb-details"><span class="lb-caption"></span><span class="lb-number"></span></div><div class="lb-closeContainer"><a class="lb-close"></a></div></div></div></div>'
            ).appendTo(a("body")),
                (this.$lightbox = a("#lightbox")),
                (this.$overlay = a("#lightboxOverlay")),
                (this.$outerContainer = this.$lightbox.find(".lb-outerContainer")),
                (this.$container = this.$lightbox.find(".lb-container")),
                (this.containerTopPadding = parseInt(this.$container.css("padding-top"), 10)),
                (this.containerRightPadding = parseInt(this.$container.css("padding-right"), 10)),
                (this.containerBottomPadding = parseInt(this.$container.css("padding-bottom"), 10)),
                (this.containerLeftPadding = parseInt(this.$container.css("padding-left"), 10)),
                this.$overlay.hide().on("click", function () {
                    return b.end(), !1;
                }),
                this.$lightbox.hide().on("click", function (c) {
                    return "lightbox" === a(c.target).attr("id") && b.end(), !1;
                }),
                this.$outerContainer.on("click", function (c) {
                    return "lightbox" === a(c.target).attr("id") && b.end(), !1;
                }),
                this.$lightbox.find(".lb-prev").on("click", function () {
                    return 0 === b.currentImageIndex ? b.changeImage(b.album.length - 1) : b.changeImage(b.currentImageIndex - 1), !1;
                }),
                this.$lightbox.find(".lb-next").on("click", function () {
                    return b.currentImageIndex === b.album.length - 1 ? b.changeImage(0) : b.changeImage(b.currentImageIndex + 1), !1;
                }),
                this.$lightbox.find(".lb-loader, .lb-close").on("click", function () {
                    return b.end(), !1;
                });
        }),
        (b.prototype.start = function (b) {
            function c(a) {
                d.album.push({ link: a.attr("href"), title: a.attr("data-title") || a.attr("title") });
            }
            var d = this,
                e = a(window);
            e.on("resize", a.proxy(this.sizeOverlay, this)), a("select, object, embed").css({ visibility: "hidden" }), this.sizeOverlay(), (this.album = []);
            var f,
                g = 0,
                h = b.attr("data-lightbox");
            if (h) {
                f = a(b.prop("tagName") + '[data-lightbox="' + h + '"]');
                for (var i = 0; i < f.length; i = ++i) c(a(f[i])), f[i] === b[0] && (g = i);
            } else if ("lightbox" === b.attr("rel")) c(b);
            else {
                f = a(b.prop("tagName") + '[rel="' + b.attr("rel") + '"]');
                for (var j = 0; j < f.length; j = ++j) c(a(f[j])), f[j] === b[0] && (g = j);
            }
            var k = e.scrollTop() + this.options.positionFromTop,
                l = e.scrollLeft();
            this.$lightbox.css({ top: k + "px", left: l + "px" }).fadeIn(this.options.fadeDuration), this.options.disableScrolling && a("body").addClass("lb-disable-scrolling"), this.changeImage(g);
        }),
        (b.prototype.changeImage = function (b) {
            var c = this;
            this.disableKeyboardNav();
            var d = this.$lightbox.find(".lb-image");
            this.$overlay.fadeIn(this.options.fadeDuration),
                a(".lb-loader").fadeIn("slow"),
                this.$lightbox.find(".lb-image, .lb-nav, .lb-prev, .lb-next, .lb-dataContainer, .lb-numbers, .lb-caption").hide(),
                this.$outerContainer.addClass("animating");
            var e = new Image();
            (e.onload = function () {
                var f, g, h, i, j, k, l;
                d.attr("src", c.album[b].link),
                    (f = a(e)),
                    d.width(e.width),
                    d.height(e.height),
                    c.options.fitImagesInViewport &&
                        ((l = a(window).width()),
                        (k = a(window).height()),
                        (j = l - c.containerLeftPadding - c.containerRightPadding - 20),
                        (i = k - c.containerTopPadding - c.containerBottomPadding - 120),
                        c.options.maxWidth && c.options.maxWidth < j && (j = c.options.maxWidth),
                        c.options.maxHeight && c.options.maxHeight < j && (i = c.options.maxHeight),
                        (e.width > j || e.height > i) &&
                            (e.width / j > e.height / i ? ((h = j), (g = parseInt(e.height / (e.width / h), 10)), d.width(h), d.height(g)) : ((g = i), (h = parseInt(e.width / (e.height / g), 10)), d.width(h), d.height(g)))),
                    c.sizeContainer(d.width(), d.height());
            }),
                (e.src = this.album[b].link),
                (this.currentImageIndex = b);
        }),
        (b.prototype.sizeOverlay = function () {
            this.$overlay.width(a(document).width()).height(a(document).height());
        }),
        (b.prototype.sizeContainer = function (a, b) {
            function c() {
                d.$lightbox.find(".lb-dataContainer").width(g), d.$lightbox.find(".lb-prevLink").height(h), d.$lightbox.find(".lb-nextLink").height(h), d.showImage();
            }
            var d = this,
                e = this.$outerContainer.outerWidth(),
                f = this.$outerContainer.outerHeight(),
                g = a + this.containerLeftPadding + this.containerRightPadding,
                h = b + this.containerTopPadding + this.containerBottomPadding;
            e !== g || f !== h
                ? this.$outerContainer.animate({ width: g, height: h }, this.options.resizeDuration, "swing", function () {
                      c();
                  })
                : c();
        }),
        (b.prototype.showImage = function () {
            this.$lightbox.find(".lb-loader").stop(!0).hide(), this.$lightbox.find(".lb-image").fadeIn("slow"), this.updateNav(), this.updateDetails(), this.preloadNeighboringImages(), this.enableKeyboardNav();
        }),
        (b.prototype.updateNav = function () {
            var a = !1;
            try {
                document.createEvent("TouchEvent"), (a = this.options.alwaysShowNavOnTouchDevices ? !0 : !1);
            } catch (b) {}
            this.$lightbox.find(".lb-nav").show(),
                this.album.length > 1 &&
                    (this.options.wrapAround
                        ? (a && this.$lightbox.find(".lb-prev, .lb-next").css("opacity", "1"), this.$lightbox.find(".lb-prev, .lb-next").show())
                        : (this.currentImageIndex > 0 && (this.$lightbox.find(".lb-prev").show(), a && this.$lightbox.find(".lb-prev").css("opacity", "1")),
                          this.currentImageIndex < this.album.length - 1 && (this.$lightbox.find(".lb-next").show(), a && this.$lightbox.find(".lb-next").css("opacity", "1"))));
        }),
        (b.prototype.updateDetails = function () {
            var b = this;
            if (
                ("undefined" != typeof this.album[this.currentImageIndex].title &&
                    "" !== this.album[this.currentImageIndex].title &&
                    this.$lightbox
                        .find(".lb-caption")
                        .html(this.album[this.currentImageIndex].title)
                        .fadeIn("fast")
                        .find("a")
                        .on("click", function (b) {
                            void 0 !== a(this).attr("target") ? window.open(a(this).attr("href"), a(this).attr("target")) : (location.href = a(this).attr("href"));
                        }),
                this.album.length > 1 && this.options.showImageNumberLabel)
            ) {
                var c = this.imageCountLabel(this.currentImageIndex + 1, this.album.length);
                this.$lightbox.find(".lb-number").text(c).fadeIn("fast");
            } else this.$lightbox.find(".lb-number").hide();
            this.$outerContainer.removeClass("animating"),
                this.$lightbox.find(".lb-dataContainer").fadeIn(this.options.resizeDuration, function () {
                    return b.sizeOverlay();
                });
        }),
        (b.prototype.preloadNeighboringImages = function () {
            if (this.album.length > this.currentImageIndex + 1) {
                var a = new Image();
                a.src = this.album[this.currentImageIndex + 1].link;
            }
            if (this.currentImageIndex > 0) {
                var b = new Image();
                b.src = this.album[this.currentImageIndex - 1].link;
            }
        }),
        (b.prototype.enableKeyboardNav = function () {
            a(document).on("keyup.keyboard", a.proxy(this.keyboardAction, this));
        }),
        (b.prototype.disableKeyboardNav = function () {
            a(document).off(".keyboard");
        }),
        (b.prototype.keyboardAction = function (a) {
            var b = 27,
                c = 37,
                d = 39,
                e = a.keyCode,
                f = String.fromCharCode(e).toLowerCase();
            e === b || f.match(/x|o|c/)
                ? this.end()
                : "p" === f || e === c
                ? 0 !== this.currentImageIndex
                    ? this.changeImage(this.currentImageIndex - 1)
                    : this.options.wrapAround && this.album.length > 1 && this.changeImage(this.album.length - 1)
                : ("n" === f || e === d) && (this.currentImageIndex !== this.album.length - 1 ? this.changeImage(this.currentImageIndex + 1) : this.options.wrapAround && this.album.length > 1 && this.changeImage(0));
        }),
        (b.prototype.end = function () {
            this.disableKeyboardNav(),
                a(window).off("resize", this.sizeOverlay),
                this.$lightbox.fadeOut(this.options.fadeDuration),
                this.$overlay.fadeOut(this.options.fadeDuration),
                a("select, object, embed").css({ visibility: "visible" }),
                this.options.disableScrolling && a("body").removeClass("lb-disable-scrolling");
        }),
        new b()
    );
});
//# sourceMappingURL=lightbox.min.map

