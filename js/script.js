ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 100
});

ScrollReveal().reveal('.home-content, .heading-sec', { origin: 'top'});
ScrollReveal().reveal('.home-img, .yachts-container, .trip-container', { origin: 'bottom'});

let offset1 = 0;
const sliderLine1 = document.querySelector('.slider__line_1');
const imageWidth1 = document.querySelector('.slider__img_1').width;


document.querySelector('.slider__btn_next-1').addEventListener('click', function(){
    offset1 = offset1 + imageWidth1;
    if (offset1 > (imageWidth1 * 3)) {
        offset1 = 0;
    }
    sliderLine1.style.left = -offset1 + 'px';
});

document.querySelector('.slider__btn_prev-1').addEventListener('click', function () {
    offset1 = offset1 - imageWidth1;
    if (offset1 < 0) {
        offset1 = imageWidth1 * 3;
    }
    sliderLine1.style.left = -offset1 + 'px';
});


let offset2 = 0;
const sliderLine2 = document.querySelector('.slider__line_2');
const imageWidth2 = document.querySelector('.slider__img_2').width;


document.querySelector('.slider__btn_next-2').addEventListener('click', function(){
    offset2 = offset2 + imageWidth2;
    if (offset2 > (imageWidth2 * 3)) {
        offset2 = 0;
    }
    sliderLine2.style.left = -offset2 + 'px';
});

document.querySelector('.slider__btn_prev-2').addEventListener('click', function () {
    offset2 = offset2 - imageWidth2;
    if (offset2 < 0) {
        offset2 = imageWidth2 * 3;
    }
    sliderLine2.style.left = -offset2 + 'px';
});
