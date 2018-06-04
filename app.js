//typing effect
var i = 0;
var txt = 'Full Stack Programmer/Developer. I code, get too caffeinated and spend most of my time buying things from the gas station.';
var speed = 50;
function typeWriter() {
  if (i < txt.length) {
    document.getElementById("aboutme").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
