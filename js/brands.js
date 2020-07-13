function showMore(btn) {
    var swiper = document.querySelector('.swiper-container');
    if (!swiper.classList.contains('swiper-container--height')) {
        swiper.classList.add('swiper-container--height');
        btn.innerHTML = 'Скрыть';
        btn.classList.add('show-more--full');
        btn.classList.remove('show-more');
    } else {
        swiper.classList.remove('swiper-container--height');
        btn.innerHTML = 'Показать все';
        btn.classList.add('show-more');
        btn.classList.remove('show-more--full');
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const breakpoint = window.matchMedia( '(min-width: 768px)' );
    var mySwiper;

    const breakpointChecker = function() {
        if ( breakpoint.matches === true ) {
            if ( mySwiper !== undefined ) mySwiper.destroy( true, true );
            return;
        } else if ( breakpoint.matches === false ) return enableSwiper();
    };

    const enableSwiper = function() {
        mySwiper = new Swiper ('.swiper-container', {
            loop: true,
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