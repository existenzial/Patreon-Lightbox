// MODAL - OPEN
function openModal() {
  document.getElementById('lightbox').style.display = "block";
}

// MODAL - CLOSE
function closeModal() {
  document.getElementById('lightbox').style.display = "none";
}

var slideIndex = 1;

function slideshowMove(idx) {
  showLightboxSlides(slideIndex += idx);
}

// SLIDESHOW - SET CURRENT SLIDE
function setCurrentSlide(idx) {
  showLightboxSlides(slideIndex = idx);
}

// SLIDESHOW - SHOW SLIDES
function showLightboxSlides(idx) {
  var i;
  var slides = document.getElementsByClassName("slide");

  // API Promise Debug
  // if (slides.length) { console.log("You have slides!"); }
  // else { console.log("No slides for you!"); }

  // slideshow end - go back to the beginning
  if (idx > slides.length) { slideIndex = 1; }
  // slideshow err - go to end
  if (idx < 1) { slideIndex = slides.length; }

  // iterate through slides & set display to none
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    console.log("Slide # " + i + " set to display: none");
  }

  slides[slideIndex - 1].style.display = "block";
}

function lazyLoadGalleryImage(img) {
  [].forEach.call(document.querySelectorAll('img[data-src]'), function(img) {
    img.setAttribute('src', img.getAttribute('data-src'));
    img.onload = function() {
      img.removeAttribute('data-src');
    };
  });
}
