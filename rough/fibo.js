// calculate fibonacci series

function fibonacci(n) {
  var total = 0;

  for (let i = 1; i <= n; i++) {
    total = total + i;
  }
  return total;
}

var result = fibonacci(10);

console.log(result); // 55
