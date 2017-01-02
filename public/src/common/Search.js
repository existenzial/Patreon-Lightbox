// Search
// Wrapper + Input + Submit DOM Elements
var Search = function() {
  var searchContainer = document.getElementById("search-container");

  var searchWrapper = document.createElement("div");
      searchWrapper.className = "search";

  var searchForm = document.createElement("form");
      searchForm.id = "search";
      searchForm.setAttribute("action", "POST");

  var searchInput = document.createElement("input");
      searchInput.id = "search-term";
      searchInput.type = "text";
      searchInput.name = "search-term";
      searchInput.setAttribute("placeholder", "Search...");

  var searchSubmit = document.createElement("input");
      searchSubmit.id = "search-submit";
      searchSubmit.type = "submit";
      searchSubmit.name = "load-gallery";
      searchSubmit.value = "Load Gallery";

  searchForm.appendChild(searchInput);
  searchForm.appendChild(searchSubmit);
  searchContainer.appendChild(searchWrapper);
};

//Search();
//console.log("Search Loaded");
