document.addEventListener('DOMContentLoaded', function () {
  const triggers = document.querySelectorAll('.carousel-trigger');

  triggers.forEach(trigger => {
    const carouselId = trigger.dataset.target;
    const closeId = trigger.dataset.close;
    const carousel = document.getElementById(carouselId);
    const closeBtn = document.getElementById(closeId);

    // Open carousel and hide preview
    trigger.addEventListener('click', function () {
      trigger.style.display = 'none';
      carousel.style.display = 'block';
      closeBtn.style.display = 'block';
      carousel.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });

    // Close carousel and show preview again
    closeBtn.addEventListener('click', function () {
      carousel.style.display = 'none';
      trigger.style.display = 'block';
      closeBtn.style.display = 'none';
      trigger.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  });
});
