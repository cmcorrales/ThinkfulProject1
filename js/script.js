    /*var x = document.getElementById("slider").value;
    document.getElementById("slider").innerHTML = x;*/
var sliderElement= document.getElementById("slider")
sliderElement.onchange=function(event) {
  console.log(event);
  document.getElementById("rangevalue").innerHTML = event.target.value
}
