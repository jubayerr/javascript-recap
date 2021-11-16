// travelling in a jungle and counting wild animals

function animalCount(depth) {
  var animal = 0;

  if (depth <= 10) {
    animal = depth * 50;
  } else if (depth <= 20) {
    var firstPart = 10 * 50;
    var remaining = depth - 10;
    var secondPart = remaining * 100;
    animal = firstPart + secondPart;
  } else {
    var firstPart = 10 * 50;
    var secondPart = 10 * 100;
    var remaining = depth - 20;
    var thirdPart = remaining * 20;
    animal = firstPart + secondPart + thirdPart;
  }
  return animal;
}

var count = animalCount(17);

console.log(count);

// end code
