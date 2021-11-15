// count the number of words in a string

var speech = "I like football very much!";

var count = 0;

for (var i = 0; i < speech.length; i++) {
  var element = speech[i];
  if (element == " " && speech[i - 1] != " ") {
    count++;
  }
}

count++;

console.log(count);

// end code
