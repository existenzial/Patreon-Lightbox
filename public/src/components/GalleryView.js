// Gallery
// Inner/Outer Wrapper + Initial State + Image Polling DOM Elements
var testImages = [
  { mediaUrl: "../../test_images/img1.jpg", title: "Image # 1", id: 1234 },
  { mediaUrl: "../../test_images/img2.jpg", title: "Image # 2", id: 5678 },
  { mediaUrl: "../../test_images/img3.jpg", title: "Image # 3", id: 9213 },
  { mediaUrl: "../../test_images/img4.jpg", title: "Image # 4", id: 1231 },
  { mediaUrl: "../../test_images/img5.jpg", title: "Image # 5", id: 5688 }
];

var Gallery = function() {
  this.galleryOuterWrapper = document.getElementById("gallery-outer");
  this.galleryInnerWrapper = document.getElementById("gallery-inner");

  this.galleryThumbnails = document.createElement("ul");
  this.galleryThumbnails.id = "gallery-thumbnails";
  this.galleryThumbnails.className = "gallery-thumbnails";

  this.galleryInnerWrapper.appendChild(this.galleryThumbnails);
};

Gallery.constructor = Gallery;

Gallery.prototype.setGalleryState = function(searchTerm) {
  this.images = getFlickrImages(searchTerm);
  // On API Data Success - Set Selected Image & Place Gallery Thumbnails
  this.onload = this.placeGalleryThumbnails(this.images);
  // API Data Loading - Fallback
    //this.placeGalleryThumbnails(testImages);
};

Gallery.prototype.openLightboxFromThumbnail = function(image) {
  setCurrentSlide(this.images.indexOf(image));
  openModel();
  console.log(`Lightbox Triggered from Thumbnail!!`);
};

Gallery.prototype.placeGalleryThumbnails = function(images) {
  for (var i = 0; i < images.length; i++) {
    var galleryListItem = document.createElement("li");
    var galleryImage = document.createElement("img");

    galleryImage.id = images[i].id; // Thumbnail - Key
    galleryImage.className = "gallery-thumbnail"; // Thumbnail - Class
    galleryImage.setAttribute("alt", images[i].title); // Thumbnail - Title
    galleryImage.src = images[i].mediaUrl; // Thumbnail - MediaUrl

    galleryImage.addEventListener("load", this.handleThumbnailLoad);
    galleryImage.addEventListener("error", this.handleThumbnailError);
    galleryImage.addEventListener("click", this.openLightboxFromThumbnail);

    galleryListItem.appendChild(galleryImage);
    this.galleryThumbnails.appendChild(galleryListItem);
  }
  console.log(`Thumbnails from API placed!`);
};

Gallery.prototype.handleThumbnailError = function(image) {
  // TODO: handle thumbnail load error
};
Gallery.prototype.handleThumbnailLoad = function(image) {
  // TODO: handle thumbnail load success
}

let gallery = new Gallery();

// Set Initial State
gallery.setGalleryState("nature");

console.log("Gallery View Loaded");
