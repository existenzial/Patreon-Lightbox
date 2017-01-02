function handleSearch(e) {
  var searchSubmit = document.getElementById("search-submit");
      searchSubmit.addEventListener("submit", fetchSearchFromFlickr, false);

  e.preventDefault();
}

function fetchSearchFromFlickr (searchTerm) {
  // console.log(`Searching API for: ${searchTerm}`);
  searchTerm = document.getElementById("search-term").value;
  if (searchTerm !== null) {
    getFlickrImages(searchTerm);
    searchTerm = "";
  }
}