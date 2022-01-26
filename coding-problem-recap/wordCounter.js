// count the number of words in a string

function wordCounter(s) {
  var counter = 1;
  for (let i = 0; i < s.length; i++) {
    const element = s[i];
    if (element == " ") {
      counter++;
    }
  }
  return counter;
}

var randomSentence = "a brown fox jumps over the lazy dog quickly";

var result = wordCounter(randomSentence);

console.log(result);
