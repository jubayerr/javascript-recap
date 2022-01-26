// generate random number

var randomNum = Math.random() * 6;

var randomDice = Math.ceil(randomNum);

// console.log(randomDice);

switch (randomDice) {
  case 1:
    console.log("one");
    break;
  case 2:
    console.log("two");
    break;
  case 3:
    console.log("three");
    break;
  case 4:
    console.log("four");
    break;
  case 5:
    console.log("five");
    break;
  case 6:
    console.log("six");
    break;
  default:
    console.log("something wrong");
    break;
}
