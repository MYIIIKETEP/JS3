$(document).on("click","#go",function(){
console.log("lol");
$("#go").remove();
$(".obs").removeClass("ctb")
.append("<img class ='myPic' src='https://www.teknikmagasinet.se/storage/ma/62a6190ec20741c1850677c0615b9aca/686abc06eb984a0ba6647d944d737008/800-1467-0-png.Png/0C52EEBA81BD329BA65C34B387DF399DA0DA2DC2/102796.png'>")
.append("<h2 class='txt mtxt1'>Iphone 6</h2><br><h2 class='txt mtxt2'>4.7-inch Screen</h2><br><h2 class='txt mtxt3'>128GB</h2>");


anime({
  targets: '.myPic',
  translateX: 1350,
  opacity: [0,1],
  scale: 1,
  duration: 5500,
  rotate: '3turn'
});

var tl = anime.timeline({
    easing: 'easeOutExpo',
    duration: 550,
    opacity:[0,1]
  });
  
  tl
  .add({
    targets: '.mtxt1',
    translateX: 550,
  })
  .add({
    targets: '.mtxt2',
    translateX: 550,
  })
  .add({
    targets: '.mtxt3',
    translateX: 550,
  });
});