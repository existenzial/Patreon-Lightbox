/* LIGHTBOX - ACTIONS */

// LIGHTBOX MODAL - CLOSE - HANDLER
function closeLightbox() {
  document.getElementById('lightbox').style.display = "none";
}

// LIGHTBOX - CLOSE - ACTION
var lightboxClose = document.getElementById("lightbox-close");
    lightboxClose.addEventListener("click", closeLightbox, false);

// SLIDE - SET DEFAULT INDEX
var slideIndex = 1;

// LIGHTBOX - SET - DEFAULT DISPLAY
showLightboxSlides(slideIndex);

// LIGHTBOX - SLIDE PREVIOUS - ACTION
function slideshowPrevious(idx) {
  slideIndex -= idx;
  showLightboxSlides(slideIndex);
}

// LIGHTBOX - SLIDE NEXT - ACTION
function slideshowNext(idx) {
  slideIndex += idx;
  showLightboxSlides(slideIndex);
}

// LIGHTBOX - SET CURRENT SLIDE
function setCurrentSlide(idx) {
  slideIndex = idx;
  showLightboxSlides(slideIndex);
}

// LIGHTBOX - SHOW SLIDES
function showLightboxSlides(idx) {
  var i;
  var slides = document.getElementsByClassName("slide"); //slide divs

  // slideshow end - go back to first slide
  if (idx > slides.length) {
    slideIndex = 1;
  }
  // slideshow previous err - go to last slide
  if (idx < 1) {
    slideIndex = slides.length;
  }

  // iterate through slides & set display to none
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  if (slides.length) {
    slides[slideIndex - 1].style.display = "block";
  }
}