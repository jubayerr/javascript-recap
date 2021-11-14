// swap variable

var a = 5;
var b = 8;
var c = a;

console.log("before swap", a, b);

a = b;
b = c;

console.log("after swap", a, b);

// swap without variable

var x = 10;
var y = 15;

console.log("before swap", x, y);

x = x + y;
y = x - y;
x = x - y;

console.log("after swap", x, y);

// destructing

var p = 12;
var q = 16;

console.log("before swap", p, q);

[p, q] = [q, p];

console.log("after swap", p, q);

// end code
