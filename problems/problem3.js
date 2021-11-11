// calculate factorial of a number

function factorial(n) {
  var answer = 1;
  if (n == 0 || n == 1) {
    answer = 1;
  } else {
    for (var i = n; i >= 1; i--) {
      answer = answer * i;
    }
    return answer;
  }
}

var num = 10;

var result = factorial(num);

console.log(`The factorial of ${num} is ${result}`);

//  end code
