// check prime number

function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      return `${n} is not a prime number`;
    }
  }
  return `${n} is a prime number`;
}

var result = isPrime(33);

console.log(result);

// end code
