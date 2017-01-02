function handleSearch(e) {
  e.preventDefault();

  var searchSubmit = document.getElementById("search-submit");

  searchSubmit.addEventListener("submit", fetchSearchFromFlickr, false);
};

function fetchSearchFromFlickr (searchTerm) {
  searchTerm = document.getElementById("search-term").value;
  // console.log(`Searched Flickr for: ${searchTerm}`);
  if (searchTerm !== null) {
    getFlickrImages(searchTerm);
    searchTerm = "";
  }
};