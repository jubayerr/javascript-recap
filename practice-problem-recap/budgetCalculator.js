// budget calculator

function budgetCalculator(watch, phone, laptop) {
  var total = 0;
  var price1 = watch * 50;
  var price2 = phone * 100;
  var price3 = laptop * 500;
  total = price1 + price2 + price3;
  return total;
}

var result = budgetCalculator(2, 2, 1);

console.log(result);
