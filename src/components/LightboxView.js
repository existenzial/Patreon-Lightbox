var getFlickrImages = require('../API/api').getFlickrImages;

var Lightbox = function(searchTerm) {
  this.images = getFlickrImages(searchTerm);
};

Lightbox.constructor = Lightbox;

Lightbox.prototype.setInitialLightboxState = function(images) {
  images = this.images;
};

var lightbox = new Lightbox("patreon");
lightbox.setInitialLightboxState();
