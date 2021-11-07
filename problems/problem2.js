// is a Leap Year or not

function isLeapYear(year) {
  var leapYear = false;
  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    leapYear = true;
  }
  return leapYear;
}

var result = isLeapYear(2020);

console.log(result);

// end code ###
