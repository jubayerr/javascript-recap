// convert inch to feet

var tableSize = 50;
var doorSize = 60;
var roomSize = 156;

function converter(inch) {
  var feet = inch / 12;
  return feet;
}

var result = converter(tableSize);
var result2 = converter(doorSize);
var result3 = converter(roomSize);
var result4 = converter(228);

console.log(result);
console.log(result2);
console.log(result3);
console.log(result4);
