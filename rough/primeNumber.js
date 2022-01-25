// check whether a number is a prime number or not

function checkPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      return `${n} is not a prime number`;
    }
  }
  return `${n} is a prime number`;
}

var num1 = checkPrime(7);
var num2 = checkPrime(13);
var num3 = checkPrime(15);

console.log(num1);
console.log(num2);
console.log(num3);
