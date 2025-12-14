let arr = [
  1, 2, 3, 3, 2, 1, 4, 3, 4, 6, 3, 2, 4, 5, 6, 4, 23, 12, 12, 34, 5, 4,
];

console.log(arr);

let uniqueNum = [];
let largest = -Infinity;
let secondLargest = -Infinity;

for (let i = 0; i < arr.length; i++) {
  let isDuplicate = false;
  for (let j = 0; j < uniqueNum.length; j++) {
    if (arr[i] == uniqueNum[j]) {
      isDuplicate = true;
      break;
    }
  }
  if (isDuplicate == false) {
    uniqueNum.push(arr[i]);
  }
}
console.log("these are unique numbers from arr ", uniqueNum);

for (let k = 0; k < uniqueNum.length; k++) {
  if (uniqueNum[k] > largest) {
    secondLargest = largest;
    largest = uniqueNum[k];
  } else if (uniqueNum[k] > secondLargest && uniqueNum[k] < largest) {
    secondLargest = uniqueNum[k];
  }
}

console.log("largest from arr", largest);
console.log("second largest from arr", secondLargest);
