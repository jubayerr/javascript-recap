// factorial

function factorial(n) {
  let total = 1;
  for (let i = 1; i <= n; i++) {
    total = total * i;
  }
  return total;
}

var result = factorial(10);

console.log(result);
