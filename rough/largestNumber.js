// Find the largest number in the array

const arrayList = [10, 2, 3, 4, 5, 6, 7, 8, 9];

let largest = 0;

for (let i = 0; i < arrayList.length; i++) {
  const element = arrayList[i];
  if (element > largest) {
    largest = element;
  }
}

console.log(largest);
