var ImageView = function(imageData) {
  var image = new Image(imageData);

  var imgElement = document.createElement("img");
  imgElement.id = image.id;
  imgElement.src = image.mediaUrl;
  imgElement.setAttribute("alt", image.title);
};
