// check leap year

function isLeapYear(n) {
  var leapYear = false;
  if ((n % 4 == 0 && n % 100 != 0) || n % 400 == 0) {
    leapYear = true;
  }
  return leapYear;
}

var result = isLeapYear(2020);

console.log(result);

function addNum(a, b) {
  var add = a + b;
  return add;
}

var myNum = addNum(50, 30);

console.log(myNum);
