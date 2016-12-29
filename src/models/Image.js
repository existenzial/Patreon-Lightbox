var Image = function() {
  this.title = image.title;
  this.mediaUrl = image.mediaUrl;
};

Image.constructor = Image;
Image.prototype.setTitle = function(image) {
  this.title = image.title;
};
Image.prototype.getTitle = function(image) {
  return image.title;
};
Image.prototype.setMediaUrl = function(image) {
  this.mediaUrl = image.mediaUrl;
};
Image.prototype.getMediaUrl = function(image) {
  return image.mediaUrl;
};

exports = Image;