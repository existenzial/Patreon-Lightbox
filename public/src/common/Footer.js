// Footer
// Wrapper + Content DOM Elements
var Footer = function() {
  var footerOuterWrapper = document.getElementById("footer");
  var footerInnerWrapper = document.createElement("div");
  footerInnerWrapper.id = "footer-inner";
  footerInnerWrapper.className = "footer";

  var footerContent = document.createElement("p");
  footerContent.id = "footer-text";
  footerContent.innerHTML = "&copy &nbsp; Jazz Lyles, &nbsp; 2016 &nbsp; 𐊷";

  footerInnerWrapper.appendChild(footerContent);
  footerOuterWrapper.appendChild(footerInnerWrapper);
};

// Footer.constructor = Footer;
// Footer.prototype.setContent = function() {};
// Footer.prototype.getContent = function() {};

Footer();
console.log("Footer loaded");