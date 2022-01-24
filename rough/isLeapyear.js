// check leap year or not

var year = 2020;
var year2 = 2021;
var year3 = 2022;
var year4 = 2023;
var year5 = 2024;
var year6 = 2000;

function isLeapYear(n) {
  var leapYear = false;
  if ((n % 4 == 0 && n % 100 != 0) || n % 400 == 0) {
    leapYear = true;
  }
  return leapYear;
}

var result = isLeapYear(year);
var result2 = isLeapYear(year2);
var result3 = isLeapYear(year3);
var result4 = isLeapYear(year4);
var result5 = isLeapYear(year5);
var result6 = isLeapYear(year6);

console.log(result, result2, result3, result4, result5, result6);
