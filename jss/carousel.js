document.addEventListener('DOMContentLoaded', function () {
  const triggers = document.querySelectorAll('.carousel-trigger');

  triggers.forEach(trigger => {
    const carouselId = trigger.dataset.target;   // link trigger → carousel
    const closeId = trigger.dataset.close;       // link trigger → close button
    const carousel = document.getElementById(carouselId);
    const closeBtn = document.getElementById(closeId);

    // === OPEN: hide preview, show carousel ===
    trigger.addEventListener('click', () => {
      trigger.style.display = 'none';
      carousel.style.display = 'block';
      closeBtn.style.display = 'block';
      carousel.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });

    // === CLOSE: hide carousel, show preview ===
    closeBtn.addEventListener('click', () => {
      carousel.style.display = 'none';
      trigger.style.display = 'block';
      closeBtn.style.display = 'none';
      trigger.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  });
});
