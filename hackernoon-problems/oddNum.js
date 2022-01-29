// Print the odd numbers less than 100

function printOdd(n) {
  var oddNumber = [];
  for (let i = 1; i < n; i++) {
    if (i % 2 != 0) {
      oddNumber.push(i);
    }
  }
  return oddNumber;
}

var result = printOdd(100);

console.log(result);
