function init() {
//add your javascrip between these two lines of code

function display() {
  var text = entry.value;
  alert("DeAnthony Nesbit: " + text);
  document.getElementById("textoutput").innerHTML = text;
}

var signal =
document.getElementById("entrybutton");
var entry = 
document.getElementById("entryinput");

signal.addEventListener("click", display);

}

window.addEventListener('load', init);
