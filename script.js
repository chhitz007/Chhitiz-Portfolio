document.addEventListener('DOMContentLoaded', function () {
  new Splide('#project-slider', {
    type: 'loop',
    perPage: 2,
    gap: '1rem',
    autoplay: true,
    breakpoints: {
      768: {
        perPage: 1,
      },
    },
  }).mount();
});



