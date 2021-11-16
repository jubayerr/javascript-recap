// count hotel cost

function hotelCost(day) {
  var cost = 0;

  if (day <= 10) {
    cost = day * 100;
  } else if (day <= 20) {
    var firstCost = 10 * 100;
    var remaining = day - 10;
    secondCost = remaining * 80;
    cost = firstCost + secondCost;
  } else {
    var firstCost = 10 * 100;
    var secondCost = 10 * 80;
    var remaining = day - 20;
    var thirdCost = remaining * 50;
    cost = firstCost + secondCost + thirdCost;
  }
  return cost;
}

var result = hotelCost(25);

console.log(result);

// end code
