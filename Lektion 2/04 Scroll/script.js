function checkForVisibility() {
  var headers = document.querySelectorAll(".header");
  headers.forEach(function(header) {
    if (isElementInViewport(header)) {
      header.classList.add("headerVisible");
    }
    else{
       header.classList.remove("headerVisible");
    }
    /* Bonus-uppgift: Om elementet -inte- finns längre i viewporten, göm det då igen
     * så att det kan animeras in igen när det kommer tillbaka i viewporten
     */
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
  /* Lyssna på scroll-eventet, och kör funktionen checkForVisibility */
  addEventListener("scroll",checkForVisibility,false);
}