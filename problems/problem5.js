// create a fibonacci Series using for loop

function fibonacci(n) {
  var fibo = [0, 1];

  for (let i = 2; i <= n; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
  }
  return fibo;
}

var result = fibonacci(10);

console.log(result);

// end code
