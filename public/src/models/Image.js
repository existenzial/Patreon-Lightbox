var Image = function(farm, server, id, secret, title) {
  this.farm = farm;
  this.server = server;
  this.id = id;
  this.secret = secret;
  this.title = title;
  this.mediaUrl = "https://farm" + this.farm + ".staticflickr.com/" + this.server + "/" + this.id + "_" + this.secret + ".jpg"
};

Image.prototype.constructor = Image;
