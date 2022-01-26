// Remove duplicate item from an array

function removeDuplicates(item) {
  var realNames = [];
  for (let i = 0; i < item.length; i++) {
    const element = item[i];
    if (realNames.indexOf(element) == -1) {
      realNames.push(element);
    }
  }
  return realNames;
}

var nameList = [
  "jonas",
  "martha",
  "mikkel",
  "jonas",
  "mikkel",
  "bartosz",
  "martha",
];

var result = removeDuplicates(nameList);

console.log(result);
