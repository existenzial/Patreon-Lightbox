// LIGHTBOX MODAL - CLOSE - HANDLER
function closeLightbox() {
  document.getElementById('lightbox').style.display = "none";
}

// LIGHTBOX - CLOSE - ACTION
var lightboxClose = document.getElementById("lightbox-close");
    lightboxClose.addEventListener("click", closeLightbox, false);

// LIGHTBOX - PREV / NEXT - EVENT LISTENERS - ADD
var previous = document.getElementById("lightbox-previous");
    previous.addEventListener("click", slideshowPrevious, false);
var next = document.getElementById("lightbox-next");
    next.addEventListener("click", slideshowNext, false);

var slideIndex = 1;

// LIGHTBOX - SLIDE PREVIOUS - ACTION
function slideshowPrevious() {
  showLightboxSlides(slideIndex--);
}

// LIGHTBOX - SLIDE NEXT - ACTION
function slideshowNext() {
  showLightboxSlides(slideIndex++);
}

// LIGHTBOX - SET CURRENT SLIDE
function setCurrentSlide(idx) {
  showLightboxSlides(slideIndex = idx);
}

// LIGHTBOX - SHOW SLIDES
function showLightboxSlides(idx) {
  var i;
  var slides = document.getElementsByClassName("slide");

  // API Promise Debug
  // if (slides.length) { console.log("You have slides!"); }
  // else { console.log("No slides for you!"); }

  // slideshow end - go back to first slide
  if (idx > slides.length) { slideIndex = 1; }
  // slideshow previous err - go to last slide
  if (idx < 1) { slideIndex = slides.length; }

  // iterate through slides & set display to none
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}
