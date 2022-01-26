// sum of all number in an array

function sum(n) {
  var total = 0;
  for (let i = 0; i < n.length; i++) {
    const element = n[i];
    total = total + element;
  }
  return total;
}

var randomNum = [10, 20, 30, 40, 50];

var result = sum(randomNum);

console.log(result);
