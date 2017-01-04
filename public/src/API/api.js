var FLICKR_API_KEY = "bfdd8287d321ea98869bc753c1451a74";

function getFlickrImages(searchTerm) {
  var FLICKR_API_ENDPOINT = "https://api.flickr.com/services/rest/?method=flickr.photos.search&tags=" + searchTerm + "&text=" + searchTerm + "&api_key=" + FLICKR_API_KEY + "&safe_search=true&format=json&nojsoncallback=1&per_page=10";

  return fetch(FLICKR_API_ENDPOINT)
    .then( response => {
      return response.json();
    }).catch( err => {
      throw new Error("There was trouble retrieving data from Flickr:" + err);
    })
    .then( json => {
      // Gallery - State - Reset
      var thumbs = document.getElementById("gallery-thumbnails").children;
      if (thumbs.length) { gallery.galleryStateReset() }

      // Image - Collection (from API)
      var images = json.photos.photo.map( function(farm, server, id, secret, title) {
        // Image - Model
        var image = {
          farm: farm.farm,
          server: farm.server,
          id: farm.id,
          title: farm.title,
          mediaUrl: "https://farm" + farm.farm + ".staticflickr.com/" + farm.server + "/" + farm.id + "_" + farm.secret + ".jpg"
        };
        return image; // Image - Model
      });

      // Image - Collection - Iteration
      var slideIdx = 1;
      for (let i = 0; i < images.length; i++) {
        var image = images[i];

        slideIdx = (i + 1);

        // API Success - Set Gallery
        var galleryInner = gallery.galleryInnerWrapper; //div
        var galleryThumbnails = gallery.galleryThumbnails; //div

        var galleryImage = createGalleryThumbnailImage();
            setGalleryThumbnailDefaultAttributes(galleryImage, image.id, image.title, image.mediaUrl);
            lazyLoadGalleryImage(galleryImage);

        var galleryListItem = createGalleryThumbnailListItem();

        galleryListItem.appendChild(galleryImage);
        galleryThumbnails.appendChild(galleryListItem);
        galleryInner.appendChild(galleryThumbnails);

        // API Success - Set Lightbox Slide
        var lightboxContent = document.getElementById("lightbox-content");
        var slideContainer = document.getElementById("slide-container");
        var slide = createLightboxSlide(i);
        var slideTitle = createLightboxSlideTitle(image);
        var slideImage = createLightboxSlideImage(image);
        addGalleryThumbnailListeners(galleryImage, slideIdx);

        slide.appendChild(slideTitle);
        slide.appendChild(slideImage);

        slideContainer.appendChild(slide);
        lightboxContent.appendChild(slideContainer);
      }

      return images; // Image - Collection
    }).catch( err => {
      throw new Error("There was trouble mapping the Flickr photo data:" + err);
    });
}