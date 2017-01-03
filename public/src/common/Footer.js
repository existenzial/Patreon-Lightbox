// Footer
// Wrapper + Content DOM Elements
var Footer = function() {
  var footerWrapper = document.getElementById("footer");

  var footerContent = document.createElement("p");
      footerContent.id = "footer-text";
      footerContent.innerHTML = "&copy &nbsp; Jazz Lyles, &nbsp; 2016";

  footerWrapper.appendChild(footerContent);
};

Footer();
console.log("Footer loaded");