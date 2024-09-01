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
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', function() {
    if(window.scrollY > 500) {
        gsap.to(badgesEl, .6, {
            opacity : 0
        });

        gsap.to(toTopEl, .6, {
            opacity : 1,
            x: 0
        });
    }
    else{
        gsap.to(badgesEl, .6, {
            opacity : 1
        });

        gsap.to(toTopEl, .6, {
            opacity : 0,
            x: 100
        });
    }
});

new Swiper ('.notice .swiper', {
    direction: 'vertical', // 슬라이드를 수직 방향으로 설정
    autoplay: true,
    loop: true,
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

gsap.to('.floating1', 2, {
    x : 85,
    repeat : -1,
    yoyo : true,
    ease: 'bounce.out'
});

gsap.to('.floating2', 1.5, {
    x : 105,
    delay : .5,
    repeat : -1,
    yoyo : true
});

gsap.to('.floating3', 3, {
    y : -350,
    repeat : -1,
    yoyo : 1
});

const spyEls = document.querySelectorAll('section.scroll-spy');

spyEls.forEach(function(spyEl){
    new ScrollMagic
    .Scene({
        triggerElement: spyEl,
        triggerHook: .9
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});

toTopEl.addEventListener('click', function(){
    gsap.to(window, .8, {
        scrollTo: 0
    });
});

new Swiper('.awards .swiper', {
    autoplay : true,
    loop : true,
    slidesPerView : 5
});

const thisyearEl = document.querySelector('.this-year');

thisyearEl.textContent = new Date().getFullYear();