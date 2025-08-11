let firstSlideRemoved = false;
document.getElementById('carouselExampleCaptions')
  .addEventListener('slid.bs.carousel', function (event) {
    if (!firstSlideRemoved && event.from === 0) {
      let firstSlide = document.querySelector('#carouselExampleCaptions .carousel-item');
      if (firstSlide) {
        firstSlide.parentNode.removeChild(firstSlide);
        firstSlideRemoved = true;
      }
    }
});
