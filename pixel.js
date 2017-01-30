//Creating the canvas
var theCanvas = document.getElementById('canvas');
// var thePallete = document.getElementById('palette');


//Creating all the pixels.
for ( var i = 0; i <= 1409; i++ ) {
  var thePixel = document.createElement('div');
//give the big div a style. using css.
  thePixel.className = "box";
  thePixel.setAttribute("style", "float: left; width:15px; height:15px; border:1px solid black; boarder-radius:2px");
  thePixel.addEventListener("click", function(){
  this.style.backgroundColor = document.getElementById("picker").value;
});
  //appending the pixel to the canvas.
  theCanvas.appendChild(thePixel);
}


let input = document.createElement('input');
  input.type = "color";
  input.id = 'picker';
  thePixel.appendChild(input);



  button.addEventListener('click', function() {
    var paintDiv = document.getElementsByTagName('div')
    for (var i = 0; i < paintDiv.length; i++) {
      paintDiv[i].style.backgroundColor = 'white';
  }
  });
