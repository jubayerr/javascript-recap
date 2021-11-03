// numbers

var number1 = 25; // integer
var number2 = 15.5; // float
var number3 = "10"; // string

number3 = parseInt(number3);

var sumOfTwoNumber = number1 + number2 + number3;

// sumOfTwoNumber = "" + sumOfTwoNumber; // number to string convert

console.log(sumOfTwoNumber);

// to fix floating number

var price1 = 0.1;
var price2 = 0.2;

var sumOfPrice = price1 + price2;

sumOfPrice = sumOfPrice.toFixed(2);

console.log(sumOfPrice);

// ### end code ###
