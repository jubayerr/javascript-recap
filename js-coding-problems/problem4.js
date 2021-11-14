// find the largest element of an array

var marks = [44, 35, 55, 66, 74, 80, 86];

var max = marks[0];

for (var i = 0; i < marks.length; i++) {
  var element = marks[i];
  if (element > max) {
    max = element;
  }
}

console.log("Highest marks is =", max);

// end code
