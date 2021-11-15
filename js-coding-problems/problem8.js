// reverse a string

var statement = "to be or not to be";

function reverseString(str) {
  var reverse = "";
  for (var i = 0; i < str.length; i++) {
    var element = str[i];
    reverse = element + reverse;
  }
  return reverse;
}

var result = reverseString(statement);

console.log(result);

// end code
