document.addEventListener('DOMContentLoaded', function () {
  // Handle carousel triggers (big preview image)
  const triggers = document.querySelectorAll('.carousel-trigger');
  triggers.forEach(trigger => {
    const carouselId = trigger.dataset.target;
    const closeId = trigger.dataset.close;
    const carousel = document.getElementById(carouselId);
    const closeBtn = document.getElementById(closeId);

    trigger.addEventListener('click', () => {
      trigger.style.display = 'none';       // hide preview
      carousel.style.display = 'block';      // show carousel
      closeBtn.style.display = 'block';      // show close button

      // Start at first slide
      const carouselInstance = bootstrap.Carousel.getOrCreateInstance(carousel);
      carouselInstance.to(0);

      carousel.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });

    closeBtn.addEventListener('click', () => {
      carousel.style.display = 'none';
      trigger.style.display = 'block';
      closeBtn.style.display = 'none';
      trigger.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  });

  // Handle thumbnails
  const thumbs = document.querySelectorAll('.thumb');
  thumbs.forEach(thumb => {
    const carouselId = thumb.dataset.target;
    const slideIndex = parseInt(thumb.dataset.slide);
    const closeId = thumb.dataset.close;
    const carousel = document.getElementById(carouselId);
    const closeBtn = document.getElementById(closeId);

    thumb.addEventListener('click', () => {
      carousel.style.display = 'block';
      closeBtn.style.display = 'block';

      // Move to selected slide
      const carouselInstance = bootstrap.Carousel.getOrCreateInstance(carousel);
      carouselInstance.to(slideIndex);

      carousel.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  });
});
