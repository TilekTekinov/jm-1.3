$(document).ready(function () {
    const breakpoint = window.matchMedia( '(min-width: 1367px)' );

    var mySwiper;

    const breakpointChecker = function() {
        if ( breakpoint.matches === true ) {
            console.log('destroy')
            if ( mySwiper !== undefined ) mySwiper.destroy( true, true );
            return;
        } else if ( breakpoint.matches === false ) return enableSwiper();
    };

    const enableSwiper = function() {
        console.log("enable")
        mySwiper = new Swiper ('.swiper-container', {
            loop: true,
            // loopedSlides: true,
            slidesPerView: 1,
            slidesOffsetAfter: 0,
            width: 256,
            setWrapperSize: true,
            spaceBetween: 16,
            grabCurcor: true,
            
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            
        });
    };

    breakpoint.addListener(breakpointChecker);
    breakpointChecker();
});