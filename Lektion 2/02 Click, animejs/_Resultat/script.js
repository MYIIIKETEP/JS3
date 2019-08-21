function performAction() {
  anime({
    targets: ".modal",
    scale: 1.3,
    opacity: 0,
    easing: "easeInCubic",
    duration: 400,
    complete: function() {
      resetToDefaultState();
    }
  });
}

function cancelAction() {
  anime({
    targets: ".modal",
    scale: 0.6,
    opacity: 0,
    easing: "easeInCubic",
    duration: 400,
    complete: function() {
      resetToDefaultState();
    }
  });
}

function resetToDefaultState() {
  anime.timeline().add({
    targets: ".modal",
    scale: 1
  }).add({
    targets: ".modal",
    opacity: 1,
    easing: "easeInCubic",
    duration: 400,
    delay: 300
  });
}

var performButton = document.querySelector(".modal-button-right");
var cancelButton = document.querySelector(".modal-button-left");

performButton.addEventListener("click", performAction);
cancelButton.addEventListener("click", cancelAction);
