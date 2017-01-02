/* GALLERY - DOM UTILS */

// GALLERY - THUMBNAIL - CREATE
function createGalleryThumbnailImage() {
  var galleryImage = document.createElement("img");

  return galleryImage;
}

// GALLERY - THUMBNAIL - LIST ITEM - CREATE
function createGalleryThumbnailListItem() {
  var galleryListItem = document.createElement("li");

  return galleryListItem;
}

// GALLERY - THUMBNAIL - EVENT LISTENERS - ADD
function addGalleryThumbnailListeners(image) {
  image.addEventListener("click", openLightbox, false);
}

// GALLERY - THUMBNAIL - ATTRIBUTES - ADD
function setGalleryThumbnailDefaultAttributes(image, id, title, src) {
  image.id = id; // Thumbnail - Key
  image.className = "gallery-thumbnail"; // Thumbnail - Class
  image.style.height =  "130px"; // Thumbnail - Height
  image.setAttribute("alt", title); // Thumbnail - Title
  image.dataset.src = src; // Thumbnail - Data-Src

  return image;
}
