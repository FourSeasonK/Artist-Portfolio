
//reference: https://www.w3schools.com/howto/howto_js_typewriter.asp
var i = 0;
var typo = 'Will you enjoy the meager freedom that exists within the frame, or will you break free of it and fly with great wings?';
var speed = 50;

function moveType() {
  if (i < typo.length) {
    document.getElementById("display").innerHTML += typo.charAt(i);
    i++;
    setTimeout(moveType, speed);
    
  }

  
}