// create fibonacci series

function fibonacciSeries(n) {
  var fibo = [0, 1];

  for (let i = 2; i <= n; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
  }
  return fibo;
}

var result = fibonacciSeries(55);

for (let i = 0; i < result.length; i++) {
  const element = result[i];
  console.log(element);
}
