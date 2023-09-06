function binarySearchPosition(numbers, target) {
  // your code here
  let left = 0;
  let right = numbers.length - 1;
  let mid;
  while (right >= left) {
    mid = Math.floor((right + left) / 2);
    if (target > numbers[mid]) {
      left = mid + 1;
    } else if (target < numbers[mid]) {
      right = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
}

console.log(binarySearchPosition([1, 2, 5, 6, 7], 1)); // should print 0
console.log(binarySearchPosition([1, 2, 5, 6, 7], 6)); // should print 3
