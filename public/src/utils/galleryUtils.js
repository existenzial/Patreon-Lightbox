/* GALLERY - DOM UTILS */

// GALLERY - THUMBNAIL - CREATE
function createGalleryThumbnailImage() {
  var galleryImage = document.createElement("img");

  return galleryImage;
}

// GALLERY - THUMBNAIL - LIST ITEM - CREATE
function createGalleryThumbnailListItem() {
  var galleryListItem = document.createElement("li");
      galleryListItem.className = "col gallery-item";

  return galleryListItem;
}

// GALLERY - THUMBNAIL - EVENT LISTENERS - ADD
function addGalleryThumbnailListeners(thumbnail, i) {
  thumbnail.addEventListener("click", openLightbox, false);
  thumbnail.addEventListener("click", function() { setCurrentSlide(i) });
}

// GALLERY - THUMBNAIL - ATTRIBUTES - ADD
function setGalleryThumbnailDefaultAttributes(thumbnail, id, title, src) {
  thumbnail.id = id; // Thumbnail - Key
  thumbnail.className = "gallery-thumbnail"; // Thumbnail - Class
  thumbnail.style.height =  "130px"; // Thumbnail - Height
  thumbnail.setAttribute("alt", title); // Thumbnail - Title
  thumbnail.dataset.src = src; // Thumbnail - Data-Src

  return thumbnail;
}
