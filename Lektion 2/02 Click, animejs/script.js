var animation = anime({
  targets: '.modal',
  translateX: 270,
  delay: function(el, i) { return i * 100; },
  direction: 'alternate',
  loop: true,
  autoplay: false,
  easing: 'easeInOutSine'
});






function performAction() {
  /* Animera om man trycker på OK */
console.log("go");
// animation.play();
anime({
  targets: '.modal',
  translateX: 250,
  scale: 2,
  rotate: '1turn'
});
}

function cancelAction() {
  anime({
    targets: '.modal',
    translateY: 250,
    scale: 1,
    rotate: '2turn'
  });
}

document.querySelector(".modal-button-right").addEventListener("click", performAction);
document.querySelector(".modal-button-left").addEventListener("click", cancelAction);
