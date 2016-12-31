// Header
// Wrapper + Logo + Title DOM Elements
var Header = function() {
  var headerOuterWrapper = document.getElementById("header");
  var headerInnerWrapper = document.createElement("div");
  headerInnerWrapper.id = "header-inner";
  headerInnerWrapper.className = "nav navbar";

  var headerLogo = document.createElement("img");
  headerLogo.id = "header-logo";
  headerLogo.src = "../patreon_logo.png";
  headerLogo.setAttribute("alt", "Patreon Logo");

  var headerTitle = document.createElement("h1");
  headerTitle.id = "header-title";
  headerTitle.innerHTML = "Patreon Lightbox";

  headerInnerWrapper.appendChild(headerLogo);
  headerInnerWrapper.appendChild(headerTitle);
  headerOuterWrapper.appendChild(headerInnerWrapper);
};

// Header.constructor = Header;
// Header.prototype.changeLogo = function() {};
// Header.prototype.changeTitle = function() {};
Header();
console.log("Header Loaded");
