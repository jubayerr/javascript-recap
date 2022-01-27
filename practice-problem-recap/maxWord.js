// find maximum element from an array

function maxElement(str) {
  var longStr = "";
  for (let i = 0; i < str.length; i++) {
    const element = str[i];
    if (longStr.length < element.length) {
      longStr = element;
    }
  }
  return longStr;
}

var nameList = ["jonas", "bartosz", "mikkel", "martha"];

var result = maxElement(nameList);

console.log(result); // bartosz
