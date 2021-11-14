// sum of all numbers in array

let marks = [35, 34, 44, 50, 42, 40];

function sumOfArray(numbers) {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    let element = numbers[i];
    sum += element;
  }
  return sum;
}

var total = sumOfArray(marks);

console.log(total);

// end code
