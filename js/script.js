ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading-sec', { origin: 'top'});
ScrollReveal().reveal('.home-img, .yachts-container, .trip-container', { origin: 'bottom'});