import { FLICKR_API_KEY } from './.credentials';

export const getFlickrImages = (searchTerm) => {
  const FLICKR_API_ENDPOINT = `https://api.flickr.com/services/rest/?method=flickr.photos.search&text=${searchQuery}&api_key=${FLICKR_API_KEY}&format=json&nojsoncallback=1&per_page=10`;

  return fetch(FLICKR_API_ENDPOINT)
    .then( response => {
      return response.json();
    }).catch( err => {
      throw new Error(`There was trouble retrieving data from Flickr: ${err}`);
    })
    .then( json => {
      return json.photos.photo.map(({
        farm,
        server,
        id,
        title,
        mediaUrl: `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`
      }));
    }).catch( err => {
      throw new Error(`There was trouble mapping the Flickr photo data: ${err}`);
    });
}