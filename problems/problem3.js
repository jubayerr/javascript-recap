// calculate factorial of a number

function getFactorial(n) {
  var factorial = 1;

  for (var i = 1; i <= n; i++) {
    factorial = factorial * i;
  }
  return factorial;
}

var result = getFactorial(10);
console.log(result);

//  end code
