/* LIGHTBOX - DOM UTILS */

// LIGHTBOX - SLIDE - CREATE
function createLightboxSlide(i) {
  var slide = document.createElement("div");
      slide.id = (i + 1); //"slide" +
      slide.className = "slide";
  console.log(i + " : Slide container div created!");
  return slide;
}

// LIGHTBOX - SLIDE - TITLE - CREATE
function createLightboxSlideTitle(image) {
  var slideTitle = document.createElement("p");
      slideTitle.className = "slide-title";
      slideTitle.innerHTML = image.title;
  console.log("Slide title created!");
  return slideTitle;
}

// LIGHTBOX - SLIDE - IMAGE - CREATE
function createLightboxSlideImage(image) {
  var slideImage = document.createElement("img");
      slideImage.id = image.id;
      slideImage.className = "slide-image";
      slideImage.src = image.mediaUrl;
      slideImage.setAttribute("alt", image.title);
  console.log("Slide image created!");
  return slideImage;
}
