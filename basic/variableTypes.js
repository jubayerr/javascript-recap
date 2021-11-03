// variable types

var product = "tShirt"; // this is string type variable

var tShirtPrice = 100; // this is number type variable

var isCotton = true; // this is boolean type variable

// outputs

console.log(typeof product);
console.log(typeof tShirtPrice);
console.log(isCotton);
console.log(typeof isCotton);

// another example

var todaysWeather = "Sunny";
var todaysTemperature = 30;
var isHotToday = true;

if (todaysTemperature <= 25) {
  isHotToday = false;
}

var weatherUpdate = `Today is ${todaysWeather} day and ${todaysTemperature} deg celcius. Weather is ${
  isHotToday ? "Hot" : "Cold"
} today.`;

console.log(weatherUpdate);

// ### end code ###
