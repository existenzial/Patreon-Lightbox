var Image = function(farm, server, id, secret, title) {
  this.farm = farm.farm;
  this.server = farm.server;
  this.id = farm.id;
  this.secret = farm.secret;
  this.title = farm.title;
  this.mediaUrl = "https://farm" + this.farm + ".staticflickr.com/" + this.server + "/" + this.id + "_" + this.secret + ".jpg"
};

Image.prototype.constructor = Image;
