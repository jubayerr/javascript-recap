// function is JS

var number = 5;
var country = "Bangladesh";

function sayHello(n, c) {
  for (let i = 0; i < n; i++) {
    var greeting = `Good Morning, ${c}!`;
    return greeting;
  }
}

var greetBangladesh = sayHello(number, country);

console.log(greetBangladesh);

// ### end code ###
