// get maximum word in a string array

function maxName(arr) {
  var max = [0];

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element.length > max.length) {
      max = element;
    }
  }

  return max;
}

var friends = ["jonas", "martha", "bartosz", "mikkel"];

var maxFriend = maxName(friends);

console.log(maxFriend);

// end code
