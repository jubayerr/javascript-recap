// function in JS

var number = 5;
var country = "Bangladesh";

function sayHello(n, c) {
  var greet = [];
  for (let i = 0; i < n; i++) {
    greet.push(`Good Morning, ${c}!`);
  }

  return greet[0];
}

var greetBangladesh = sayHello(number, country);

console.log(greetBangladesh);

// ### end code ###
