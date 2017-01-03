var searchForm = document.getElementById("search");
    searchForm.addEventListener("submit", stopRefresh);
    searchForm.addEventListener("click", stopRefresh);
var searchTerm = document.getElementById("search-term");
    searchTerm.addEventListener("change", handleSearch);

function stopRefresh(e) {
  e.preventDefault();
  return false;
}

function handleSearch(e) {
  e.preventDefault();

  console.log("search Test triggered!!!!!");
  console.log(`Searching API for: ${this.value.toLowerCase()}`);

  getFlickrImages(this.value.toLowerCase()); //standardize input to lowercase

}
