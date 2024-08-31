const searchEl = document.querySelector('header .search');
const inputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function(){
    inputEl.focus();
});

inputEl.addEventListener('focus', function(){
    searchEl.classList.add('focused');
    inputEl.setAttribute('placeholder', '통합검색');
});

inputEl.addEventListener('blur', function(){
    searchEl.classList.remove('focused');
    inputEl.setAttribute('placeholder', '');
});

const fadeEls = document.querySelectorAll('.visual .fade-out');
fadeEls.forEach(function(fadeEl, index){
    gsap.to(fadeEl, 1, {
        opacity : 1,
        delay : (index + 1) * .7
    });
});

const badgesEl = document.querySelector('.badges');

window.addEventListener('scroll', function() {
    if(window.scrollY > 500) {
        gsap.to(badgesEl, .6, {
            opacity : 0
        });
    }
    else{
        gsap.to(badgesEl, .6, {
            opacity : 1
        });
    }
});

new Swiper ('.notice .swiper', {
    autoplay : true,
    loop : true
});

const promotionEl = document.querySelector('.promotion');
const promotionBtn = document.querySelector('.notice .promotionBtn');

promotionBtn.addEventListener('click', function(){
    if(promotionEl.classList.contains('hide')){
        promotionEl.classList.remove('hide');
    }
    else{
        promotionEl.classList.add('hide');
    }
});

new Swiper ('.promotion .swiper', {
    autoplay : true,
    loop : true,
    slidesPerView : 3,
    spaceBetween : 10,
    centeredSlides : true,
    navigation : {
        prevEl : '.promotion .swiper-button-prev',
        nextEl : '.promotion .swiper-button-next',
    },
    pagination: {
        el: '.promotion .swiper-pagination',
        clickable: true,
    },
})