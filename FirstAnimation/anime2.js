var textWrapper = document.querySelector('.ml2');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

  anime({
    targets: '.ml2',
    translateX: 500,
    direction: 'alternate',
    loop: true,
    easing: 'linear'
  });   


  anime({
    targets: '.m2',
    translateX: 250,
    loop: true
  });
  anime({
      targets: '.m3',
  opacity: 0,
  duration: 1000,
  easing: "easeOutExpo",
  delay: 1000,
  loop: true
});
anime({
  targets: '#one',
  translateX: 250,
  easing: 'easeInOutSine'
});

anime({
  targets: '#two',
  translateX: 250,
  direction: 'reverse',
  easing: 'easeInOutSine'
});

anime({
  targets: '#three',
  translateX: 250,
  direction: 'alternate',
  easing: 'easeInOutSine'
});

anime({
  targets: '.steps #stepsC',
  translateX: 250,
  direction: 'alternate',
  loop: true,
  easing: 'steps(5)'
})