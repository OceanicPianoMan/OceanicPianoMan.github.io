// carousel.js

document.addEventListener('DOMContentLoaded', function() {
    const trigger = document.getElementById('carouselTrigger');
    const carousel = document.getElementById('carouselThriller');
    const closeBtn = document.getElementById('closeCarousel');

    trigger.addEventListener('mouseover', function() {
        trigger.style.opacity = '0.8'; // Optional: visual feedback on hover
    });

    trigger.addEventListener('mouseout', function() {
        trigger.style.opacity = '1'; // Reset opacity after hover
    });

    trigger.addEventListener('click', function() {
        carousel.style.display = 'block';
        trigger.style.display = 'none';
        closeBtn.style.display = 'inline';
    });

    closeBtn.addEventListener('click', function() {
        carousel.style.display = 'none';
        closeBtn.style.display = 'none';
        trigger.style.display = 'block';
    });
});
