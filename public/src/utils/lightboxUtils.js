/* LIGHTBOX - DOM UTILS */

// LIGHTBOX - SLIDE - CREATE
function createLightboxSlide(i) {
  var slide = document.createElement("div");
      slide.id = "Slide-" + (i + 1);
      slide.className = "slide";

  return slide;
}

// LIGHTBOX - SLIDE - TITLE - CREATE
function createLightboxSlideTitle(image) {
  var slideTitle = document.createElement("p");
      slideTitle.className = "slide-title";
      slideTitle.innerHTML = image.title;

  return slideTitle;
}

// LIGHTBOX - SLIDE - IMAGE - CREATE
function createLightboxSlideImage(image) {
  var slideImage = document.createElement("img");
      slideImage.id = image.id;
      slideImage.className = "slide-image";
      slideImage.src = image.mediaUrl;
      slideImage.setAttribute("alt", image.title);

  return slideImage;
}

// LIGHTBOX - PREV / NEXT - EVENT LISTENERS - ADD
/* KEYBOARD */
document.addEventListener("keydown", function(e){
    if (e.keyCode === 37) { slideshowPrevious(1) }
    else if (e.keyCode === 39) { slideshowNext(1) }
  }, false);

/* MOUSE */
var previous = document.getElementById("lightbox-previous");
    previous.addEventListener("click", function() {
       slideshowPrevious(1);
     }, false);
var next = document.getElementById("lightbox-next");
    next.addEventListener("click", function() {
      slideshowNext(1);
    }, false);
