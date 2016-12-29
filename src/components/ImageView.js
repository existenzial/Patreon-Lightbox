var Image = require("../models/Image");

var ImageView = function(image) {
  image = new Image();

  var imgElement = document.createElement("img");
  imgElement.src = image.mediaUrl;
  imgElement.id = image.id;
  imgElement.setAttribute("alt", image.title);
};
