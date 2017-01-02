/* GALLERY - UTILS */
function createGalleryThumbnailImage() {
  var galleryImage = document.createElement("img");

  return galleryImage;
}

function createGalleryThumbnailListItem() {
  var galleryListItem = document.createElement("li");

  return galleryListItem;
}

function addGalleryThumbnailListeners(image) {
  image.addEventListener("click", openModal, false);
}

function setGalleryThumbnailDefaultAttributes(image, id, title, src) {
  image.id = id; // Thumbnail - Key
  image.className = "gallery-thumbnail"; // Thumbnail - Class
  image.style.height =  "130px"; // Thumbnail - Height
  image.setAttribute("alt", title); // Thumbnail - Title
  image.dataset.src = src; // Thumbnail - Data-Src

  return image;
}
