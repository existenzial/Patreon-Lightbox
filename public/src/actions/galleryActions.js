// MODAL - OPEN
function openModal() {
  document.getElementById('lightbox').style.display = "block";
}

// MODAL - CLOSE
function closeModal() {
  document.getElementById('lightbox').style.display = "none";
}

// SLIDESHOW - SET CURRENT SLIDE w/FIRST SLIDE
var slideIndex = 1;
showLightboxSlides(slideIndex);

function slideshowMove(n) {
  showLightboxSlides(slideIndex += n);
}

// SLIDESHOW - SET CURRENT SLIDE
function setCurrentSlide(n) {
  showLightboxSlides(slideIndex = n);
}

// SLIDESHOW - SHOW SLIDES
function showLightboxSlides(n) {
  var i;
  var slides = document.getElementsByClassName("gallery-thumbnail");
  var thumbnails = document.getElementsByClassName("lightbox-thumbnail");
  var slideTitleText = document.getElementById("slide-title");
  // slideshow end - go back to the beginning
  if (n > slides.length) { slideIndex = 1; }
  // slideshow err - go to end
  if (n < 1) { slideIndex = slides.length; }
  // iterate through slides & set display to none
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  // iterate through thumbnails, replace "active" class with ""
  for (i = 0; i < thumbnails.length; i++) {
    thumbnails[i].className = thumbnails[i].className.replace(" active", "");
  }

  slides[slideIndex-1].style.display = "block";
  thumbnails[slideIndex-1].className += " active";
  // change caption text to title of current slide
  slideTitleText.innerHTML = thumbnails[slideIndex - 1].alt;
}

function lazyLoadGalleryImage(img) {
  [].forEach.call(document.querySelectorAll('img[data-src]'), function(img) {
    img.setAttribute('src', img.getAttribute('data-src'));
    img.onload = function() {
      img.removeAttribute('data-src');
    };
  });
}
