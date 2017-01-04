/* LIGHTBOX - DOM UTILS */

// LIGHTBOX - SLIDE - CREATE
function createLightboxSlide(i) {
  var slide = document.createElement("div");
      slide.id = (i + 1); //"slide" +
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
