// find maximum value from an array

var randomNum = [10, 20, 30, 50];

function findMax(n) {
  var max = 0;
  for (let i = 0; i < n.length; i++) {
    const element = n[i];
    if (element > max) {
      max = element;
    }
  }
  return max;
}

var result = findMax(randomNum);

console.log(result);
