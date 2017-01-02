/* LIGHTBOX - DOM UTILS */

// LIGHTBOX - SLIDE - CREATE
function createLightboxSlide(i) {
  var slide = document.createElement("div");
      slide.id = "slide" + (i + 1);
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
      slideImage.src = image.mediaUrl;
      slideImage.setAttribute("alt", image.title);
      slideImage.style.width = "100%";

  return slideImage;
}
