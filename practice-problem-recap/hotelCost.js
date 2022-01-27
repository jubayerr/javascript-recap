// counting hotel cost

function hotelCost(days) {
  var totalCost = 0;
  if (days <= 10) {
    totalCost = 100 * 50;
  } else if (days <= 20) {
    var firstPart = 10 * 100;
    var remaining = days - 10;
    var secondPart = remaining * 80;
    totalCost = firstPart + secondPart;
  } else {
    var firstPart = 10 * 100;
    var secondPart = 10 * 80;
    var remaining = days - 20;
    var thirdPart = remaining * 50;
    totalCost = firstPart + secondPart + thirdPart;
  }
  return totalCost;
}

var result = hotelCost(25);

console.log(result);
