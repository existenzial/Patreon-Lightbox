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
  thumbnail.id = id; // Key
  thumbnail.className = "gallery-thumbnail";
  thumbnail.style.height =  "130px";
  thumbnail.setAttribute("alt", title);
  thumbnail.dataset.src = src; // Placeholder => Image

  return thumbnail;
}

// GALLERY - THUMBNAIL - LOAD
function lazyLoadGalleryThumbnail(thumbnail) {
  [].forEach.call(document.querySelectorAll("img[data-src]"), function(thumbnail) {
    thumbnail.setAttribute("src", thumbnail.getAttribute("data-src"));
    thumbnail.onload = function() {
      thumbnail.removeAttribute("data-src");
    };
  });
}
