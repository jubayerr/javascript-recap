// reverse a string

function reverseString(s) {
  var reversed = "";
  for (let i = 0; i < s.length; i++) {
    const element = s[i];
    reversed = element + reversed;
  }
  return reversed;
}

var randomString = "I love coffee.";

var result = reverseString(randomString);

console.log(result);
