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

      // Grid - Row
      var row = document.createElement("div");
      row.className = "row";

      // Image - Collection iteration
      for (let i = 0; i < images.length; i++) {
        var image = images[i];

        // Column create on every iteration
        var col = document.createElement("div");
        col.className = "col";
        //console.log(image.id + " - " + image.title + " - " + image.mediaUrl);

        // API Success - Set Gallery
        var galleryThumbnails = document.getElementById("gallery-thumbnails");
        var galleryImage = createGalleryThumbnailImage();
            galleryImage.id = image.id; // Thumbnail - Key
            galleryImage.className = "gallery-thumbnail"; // Thumbnail - Class
            galleryImage.style.height = "130px"; // Thumbnail - Height
            galleryImage.setAttribute("alt", image.title); // Thumbnail - Title
            // setGalleryThumbnailDefaultAttributes(image, image.id, image.title, image.mediaUrl);
        // Lazy Load Thumbnail Images with 'data-src' attribute
        galleryImage.dataset.src = image.mediaUrl;
        lazyLoadGalleryImage(galleryImage);

        galleryImage.addEventListener("click", openModal, false);

        var galleryListItem = createGalleryThumbnailListItem();
        galleryListItem.appendChild(galleryImage);
        galleryThumbnails.appendChild(galleryListItem);

        /*
        LIGHTBOX - SLIDE
        <div id="slide[i]" class="slide">
          <div class="lightbox-position">slide[i] &nbsp;/&nbsp; images.length</div>
          <img src="test_images/img2.jpg" style="width:100%" alt="image.title">
        </div>
        */
        // API Success - Set Lightbox Slide
        var lightboxContent = document.getElementById("lightbox-content");
        var slide = document.createElement("div");
            slide.id = "slide" + i + 1;
            slide.className = "slide";
        var lightboxPosition = document.createElement("div");
            lightboxPosition.id = i + 1;
            lightboxPosition.innerHTML = lightboxPosition.id + "&nbsp;" + "/" + "&nbsp;" + images.length;
            lightboxPosition.style.color = "lightgrey";
        var slideImage = document.createElement("img");
            slideImage.src = image.mediaUrl;
            slideImage.setAttribute("alt", image.title);
            slideImage.style.width = "100%";

        slide.appendChild(lightboxPosition);
        slide.appendChild(slideImage);
        lightboxContent.appendChild(slide);
        /*
        LIGHTBOX - THUMBNAIL
        <div class="col">
          <img class="lightbox-thumbnail" src="test_images/img2.jpg" onclick="setCurrentSlide(4)" alt="image.title">
        </div>
        */
        // API Success - Set Lightbox Thumbnail
        /*
        var lightboxThumbnails = document.getElementById("lightbox-thumbnails");
        var lightboxThumbnail = document.createElement("img");
            lightboxThumbnail.className = "lightbox-thumbnail";
            lightboxThumbnail.src = image.mediaUrl;
            lightboxThumbnail.addEventListener("click", setCurrentSlide(i + 1), false);

        col.appendChild(lightboxThumbnail); //append thumbnail to current column
        lightboxThumbnails.appendChild(col); //append current column to thumbnail row
        */
      }

      return images; // Image - Collection
    }).catch( err => {
      throw new Error("There was trouble mapping the Flickr photo data:" + err);
    });
};
/* Gallery Utils */
function createGalleryThumbnailImage() {
  var galleryImage = document.createElement("img");

  return galleryImage;
};

function createGalleryThumbnailListItem() {
  var galleryListItem = document.createElement("li");

  return galleryListItem;
};

function addGalleryThumbnailListeners(image) {
  image.addEventListener("click", openModal, false);
};

function setGalleryThumbnailDefaultAttributes(image, id, title, src) {
  image.id = id;
  image.className = "gallery-thumbnail";
  image.style.height =  "130px";
  image.setAttribute("alt", title);
  image.dataset.src = src;

  addGalleryThumbnailListeners(image);

  return image;
};
