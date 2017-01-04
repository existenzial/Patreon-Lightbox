// Gallery
// Inner/Outer Wrapper + Initial State

var Gallery = function() {
  this.galleryOuterWrapper = document.getElementById("gallery-outer"); //div
  this.galleryInnerWrapper = document.getElementById("gallery-inner"); //div
  this.galleryThumbnails = document.getElementById("gallery-thumbnails"); //ul

  this.galleryInnerWrapper.appendChild(this.galleryThumbnails); //div => ul
};

Gallery.constructor = Gallery;

Gallery.prototype.setGalleryState = function(searchTerm) {
  this.images = getFlickrImages(searchTerm); //[ images ] from API
};

Gallery.prototype.galleryStateReset = function() {
  var galleryThumbnails = this.galleryThumbnails; //ul - THUMBNAILS
  galleryThumbnails.innerHTML = ""; // ul.children.length = 0
}

// Gallery - Set Initial State
var gallery = new Gallery();
gallery.setGalleryState("nature");

console.log("Gallery View Loaded");
