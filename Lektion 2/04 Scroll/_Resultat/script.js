function checkForVisibility() {
  var headers = document.querySelectorAll(".header");
  var picture = document.querySelector(".t");
  var driv = document.querySelector(".section");
  headers.forEach(function(header) {
    if (isElementInViewport(header)) {
      header.classList.add("headerVisible");
      
    } else {
      header.classList.remove("headerVisible");
      
    }

  if(isElementInViewport(picture)){
    picture.classList.add("imgVis");
  }
  else{
    picture.classList.remove("imgVis");
  }
    
  });
}

function isElementInViewport (el) {
  var rect = el.getBoundingClientRect();

  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth) 
  );
}

if (window.addEventListener) {
  addEventListener('DOMContentLoaded', checkForVisibility, false); 
  addEventListener('load', checkForVisibility, false);
  addEventListener('scroll', checkForVisibility, false);
}