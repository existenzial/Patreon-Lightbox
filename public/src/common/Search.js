// Search
// Wrapper + Input DOM Elements
var Search = function() {
  var searchContainer = document.getElementById("search-container");
  var searchForm = document.createElement("form");
      searchForm.id = "search";
      searchForm.setAttribute("action", "POST");

  var searchInput = document.createElement("input");
      searchInput.id = "search-term";
      searchInput.type = "text";
      searchInput.setAttribute("placeholder", "Search...");

  searchForm.appendChild(searchInput);
  searchContainer.appendChild(searchForm);
};

Search();
console.log("Search Loaded");
