    /*var x = document.getElementById("slider").value;
    document.getElementById("slider").innerHTML = x;*/
var sliderElement= document.getElementById("slider")
sliderElement.onchange=function(event) {
  console.log(event);
  document.getElementById("rangevalue").innerHTML = event.target.value
}
sliderElement.onchange=function(event) {
  if (document.getElementById("rangevalue") == 0) {
    $('.information0').hide();
    $(".information1").hide();
    $(".information2").hide();
    $(".information3").hide();
    $(".information4").hide();
    $(".information5").hide();
    $(".information6").hide();
    $(".information7").hide();
    $(".information8").hide();
    $(".information9").hide();
    $(".information10").hide();
    $(".information11").hide();
    $(".information12").hide();
  else if (document.getElementById("rangevalue") == 1) {
    $(".information1").show();
    $(".information2").hide();
    $(".information3").hide();
    $(".information4").hide();
    $(".information5").hide();
    $(".information6").hide();
    $(".information7").hide();
    $(".information8").hide();
    $(".information9").hide();
    $(".information10").hide();
    $(".information11").hide();
    $(".information12").hide();
  }
  else if (document.getElementById("rangevalue") == 2) {
    $(".information1").hide();
    $(".information2").show();
    $(".information3").hide();
    $(".information4").hide();
    $(".information5").hide();
    $(".information6").hide();
    $(".information7").hide();
    $(".information8").hide();
    $(".information9").hide();
    $(".information10").hide();
    $(".information11").hide();
    $(".information12").hide();
}
else if (document.getElementById("rangevalue") == 3) {
  $(".information1").hide();
  $(".information2").hide();
  $(".information3").show();
  $(".information4").hide();
  $(".information5").hide();
  $(".information6").hide();
  $(".information7").hide();
  $(".information8").hide();
  $(".information9").hide();
  $(".information10").hide();
  $(".information11").hide();
  $(".information12").hide();
}
else if (document.getElementById("rangevalue") == 4) {
  $(".information1").hide();
  $(".information2").hide();
  $(".information3").hide();
  $(".information4").show();
  $(".information5").hide();
  $(".information6").hide();
  $(".information7").hide();
  $(".information8").hide();
  $(".information9").hide();
  $(".information10").hide();
  $(".information11").hide();
  $(".information12").hide();
}
else if (document.getElementById("rangevalue") == 5) {
  $(".information1").hide();
  $(".information2").hide();
  $(".information3").hide();
  $(".information4").hide();
  $(".information5").show();
  $(".information6").hide();
  $(".information7").hide();
  $(".information8").hide();
  $(".information9").hide();
  $(".information10").hide();
  $(".information11").hide();
  $(".information12").hide();
}
else if (document.getElementById("rangevalue") == 6) {
  $(".information1").hide();
  $(".information2").hide();
  $(".information3").hide();
  $(".information4").hide();
  $(".information5").hide();
  $(".information6").show();
  $(".information7").hide();
  $(".information8").hide();
  $(".information9").hide();
  $(".information10").hide();
  $(".information11").hide();
  $(".information12").hide();
}
else if (document.getElementById("rangevalue") == 7) {
  $(".information1").hide();
  $(".information2").hide();
  $(".information3").hide();
  $(".information4").hide();
  $(".information5").hide();
  $(".information6").hide();
  $(".information7").show();
  $(".information8").hide();
  $(".information9").hide();
  $(".information10").hide();
  $(".information11").hide();
  $(".information12").hide();
}
else if (document.getElementById("rangevalue") == 8) {
  $(".information1").hide();
  $(".information2").hide();
  $(".information3").hide();
  $(".information4").hide();
  $(".information5").hide();
  $(".information6").hide();
  $(".information7").hide();
  $(".information8").show();
  $(".information9").hide();
  $(".information10").hide();
  $(".information11").hide();
  $(".information12").hide();
}
else if (document.getElementById("rangevalue") == 9) {
  $(".information1").hide();
  $(".information2").hide();
  $(".information3").hide();
  $(".information4").hide();
  $(".information5").hide();
  $(".information6").hide();
  $(".information7").hide();
  $(".information8").hide();
  $(".information9").show();
  $(".information10").hide();
  $(".information11").hide();
  $(".information12").hide();
}
else if (document.getElementById("rangevalue") == 10) {
  $(".information1").hide();
  $(".information2").show();
  $(".information3").hide();
  $(".information4").hide();
  $(".information5").hide();
  $(".information6").hide();
  $(".information7").hide();
  $(".information8").hide();
  $(".information9").hide();
  $(".information10").show();
  $(".information11").hide();
  $(".information12").hide();
}
else if (document.getElementById("rangevalue") == 11) {
  $(".information1").hide();
  $(".information2").hide();
  $(".information3").hide();
  $(".information4").hide();
  $(".information5").hide();
  $(".information6").hide();
  $(".information7").hide();
  $(".information8").hide();
  $(".information9").hide();
  $(".information10").hide();
  $(".information11").show();
  $(".information12").hide();
}
else if (document.getElementById("rangevalue") == 12) {
  $(".information1").hide();
  $(".information2").show();
  $(".information3").hide();
  $(".information4").hide();
  $(".information5").hide();
  $(".information6").hide();
  $(".information7").hide();
  $(".information8").hide();
  $(".information9").hide();
  $(".information10").hide();
  $(".information11").hide();
  $(".information12").show();
}
}
