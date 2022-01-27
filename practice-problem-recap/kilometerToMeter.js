// convert kilometer to meter

function kilometerToMeter(n) {
  var meter = n * 1000;
  return meter;
}

function meterToFeet(n) {
  var feet = n * 3.28084;
  return feet;
}

var result = kilometerToMeter(7);
var result2 = meterToFeet(result);

console.log("meter: ", result, ", feet: ", result2);
