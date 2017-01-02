// Search - User Input
var Search = function() {
  var row = document.getElementById("search-container");

  var searchWrapper = document.createElement("div");
      searchWrapper.className = "search";

  var searchForm = document.createElement("form");
      searchForm.setAttribute("action", "POST");

  var searchInput = document.createElement("input");
      searchInput.id = "search-term";
      searchInput.type = "text";
      searchInput.name = "search-term";
      searchInput.setAttribute("placeholder", "Search...");

  var searchSubmit = document.createElement("input");
      searchInput.id = "search-submit";
      searchInput.type = "submit";
      searchInput.name = "load-gallery";
      searchInput.value = "Load Gallery";
      searchInput.onclick = handleSearch;

  searchForm.appendChild(searchInput);
  searchForm.appendChild(searchSubmit);
  row.appendChild(searchWrapper);
};

Search();
console.log("Search Loaded");

/* SEARCH - ACTION */
function handleSearch() {
  //TODO: handle API search with user-input
};