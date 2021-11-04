// array

var friendsAge = [21, 22, 23, 24, 25, 26];

for (let i = 0; i < friendsAge.length; i++) {
  const element = friendsAge[i];
  console.log(i, element);
}

friendsAge[0] = 23;

var position = friendsAge.indexOf(24);

console.log(friendsAge);
console.log(position);

// array advanced

friendsAge.push(20);
friendsAge.push(30);
var totalFriends = friendsAge.length;

console.log(friendsAge);
console.log(totalFriends);

friendsAge.pop();
console.log(friendsAge);

// add & remove element from the beginning and slice

var cast = ["Jonas", "Bartosz", "Magnus", "Mikkel"];

cast.push("Martha"); // add element in the last

console.log(cast);

cast.shift(); // remove element from the beginning

cast.unshift("Franziska"); // add element at the beginning

console.log(cast);

var slicedCast = cast.slice(2, 5); // take element from array

console.log(slicedCast);

console.log(cast);

var splicedCast = cast.splice(2, 4); // cut element from array

console.log(splicedCast);

console.log(cast);

// ### end code ###
