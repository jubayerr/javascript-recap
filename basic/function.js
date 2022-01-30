// javascript function

var randomNum = [24, 56, 86, 10, 22, 55, 66, 88];

function maxValue(n) {
  var max = 0;
  for (let i = 0; i < n.length; i++) {
    const element = n[i];
    if (max < element) {
      max = element;
    }
  }
  return max;
}

var result = maxValue(randomNum);

console.log(result);
