/* APP - DOM UTILS */

// APP - KEY - EVENT LISTENERS - ADD
document.addEventListener("keydown", function(e){
  if (e.keyCode === 37) { slideshowPrevious(1) }
  else if (e.keyCode === 39) { slideshowNext(1) }
}, false);