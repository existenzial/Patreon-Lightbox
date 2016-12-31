var FLICKR_API_KEY = "bfdd8287d321ea98869bc753c1451a74";

function getFlickrImages(searchTerm) {
  var FLICKR_API_ENDPOINT = "https://api.flickr.com/services/rest/?method=flickr.photos.search&text=" + searchTerm + "&api_key=" + FLICKR_API_KEY + "&format=json&nojsoncallback=1&per_page=10";

  return fetch(FLICKR_API_ENDPOINT)
    .then( response => {
      return response.json();
    }).catch( err => {
      throw new Error("There was trouble retrieving data from Flickr:" + err);
    })
    .then( json => {
      var images = json.photos.photo.map( function(farm, server, id, secret, title) {
        var image = {
          farm: farm.farm,
          server: farm.server,
          id: farm.id,
          title: farm.title,
          mediaUrl: "https://farm" + farm.farm + ".staticflickr.com/" + farm.server + "/" + farm.id + "_" + farm.secret + ".jpg"
        };
        return image;
      });

      // Add Selected Image + Thumbnail DOM Elements
      for (let i = 0; i < images.length; i++) {
        console.log(images[i].id + " - " + images[i].title + " - " + images[i].mediaUrl);
        // API Success - Set Gallery Thumbnails
        var galleryThumbnails = document.getElementById("gallery-thumbnails");
        var galleryListItem = document.createElement("li");
        var galleryImage = document.createElement("img");

        galleryImage.id = images[i].id; // Thumbnail - Key
        galleryImage.className = "gallery-thumbnail"; // Thumbnail - Class
        galleryImage.style.height = "130px"; // Thumbnail - Height
        galleryImage.setAttribute("alt", images[i].title); // Thumbnail - Title

        // Lazy Load Thumbnail Images with 'data-src' attribute
        galleryImage.dataset.src = images[i].mediaUrl;
        lazyLoadGalleryImage(galleryImage);

        galleryImage.addEventListener("click", openModal, false);

        galleryListItem.appendChild(galleryImage);
        galleryThumbnails.appendChild(galleryListItem);
      }

      return images;
    }).catch( err => {
      throw new Error("There was trouble mapping the Flickr photo data:" + err);
    });
};
