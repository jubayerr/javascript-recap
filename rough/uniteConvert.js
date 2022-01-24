var tableSize = 50;

function converter(inch) {
  var feet = inch / 12;
  return feet;
}

var result = converter(tableSize);

console.log(result.toFixed(2));
