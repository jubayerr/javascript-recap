// mathematical operation in JS

var price1 = 25;
var price2 = 15;

price1++; // add 1
price2--; // minus 1

var total = price1 + price2;
// var total = price1 - price2;
// var total = price1 * price2;
// var total = price1 / price2;
// var total = price1 % price2; // modules (reminder of division)

console.log(total);

// another operation

var balance1 = -5;
var balance2 = 20.34;

var absoluteNumber = Math.abs(balance1);
var roundNumber = Math.round(balance2);
var ceilingNumber = Math.ceil(balance2);
var floorNumber = Math.floor(balance2);

var randomNumber = Math.random() * 10;
var randomResult = Math.round(randomNumber);

console.log(absoluteNumber);
console.log(roundNumber);
console.log(ceilingNumber);
console.log(floorNumber);
console.log(randomResult);

// ### end code ###
