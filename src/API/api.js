var FLICKR_API_KEY = require('./.credentials');
var fetch = require('isomorphic-fetch');

function getFlickrImages(searchTerm) {
  var FLICKR_API_ENDPOINT = "https://api.flickr.com/services/rest/?method=flickr.photos.search&text=" + searchTerm + "&api_key=" + FLICKR_API_KEY + "&format=json&nojsoncallback=1&per_page=10";

  return fetch(FLICKR_API_ENDPOINT)
    .then( response => {
      return response.json();
    }).catch( err => {
      throw new Error("There was trouble retrieving data from Flickr:" + err);
    })
    .then( json => {
      console.dir("IMAGES: " + json);
      return json.photos.photo.map(({
        farm: farm,
        server: server,
        id: id,
        title: title,
        mediaUrl: "https://farm" + farm + ".staticflickr.com/" + server + "/" + id + "_" + secret + ".jpg"
      }));
    }).catch( err => {
      throw new Error("There was trouble mapping the Flickr photo data:" + err);
    });
};

exports.getFlickrImages = getFlickrImages;