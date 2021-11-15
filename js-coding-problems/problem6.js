// remove duplicate item from an array

var rollNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 5, 6, 2];
var uniqueRoll = [];

for (var i = 0; i < rollNumber.length; i++) {
  var element = rollNumber[i];
  var index = uniqueRoll.indexOf(element);
  if (index == -1) {
    uniqueRoll.push(element);
  }
}

console.log(uniqueRoll);

// end code
