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

// end code
