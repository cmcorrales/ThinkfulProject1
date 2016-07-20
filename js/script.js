    /*var x = document.getElementById("slider").value;
    document.getElementById("slider").innerHTML = x;*/
$("#information").load("/information.html");

var sliderElement= document.getElementById("slider")
sliderElement.onchange=function(event) {
  console.log(event);
  var rangeValue = document.getElementById("rangevalue")
  rangeValue.innerHTML = event.target.value
  $(".information").hide();
  $("#" + rangeValue.value).show();
}

$(".information").hide();
