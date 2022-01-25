// swap variable

var a = 5;
var b = 7;

console.log(`before swap: a = ${a}, b = ${b}`);

var temp = a;
var a = b;
var b = temp;

console.log(`after swap: a = ${a}, b = ${b}`);

// swap without temp variable

var x = 10;
var y = 15;

console.log(`before swap: x = ${x}, y = ${y}`);

x = x + y;
y = x - y;
x = x - y;

console.log(`after swap: x = ${x}, y = ${y}`);

// swap in programming language specific

var p = 11;
var q = 12;

console.log(`before swap: p = ${p}, q = ${q}`);

[p, q] = [q, p];

console.log(`after swap: p = ${p}, q = ${q}`);

//#####END######//
