function twoSum(nums, target) {
  // your code here
  const array = mergeSort(nums);

  let left = 0;
  let right = array.length - 1;

  let sum;

  while (left < right) {
    sum = array[left] + array[right];
    if (sum > target) {
      right--;
    } else if (sum < target) {
      left++;
    } else {
      return [left, right];
    }
  }

  return -1;
}

function mergeSort(array) {
  if (array.length === 1) {
    return array;
  }
  let left;
  let right;

  if (array.length % 2 === 1) {
    left = array.slice(0, (array.length + 1) / 2);
    right = array.slice((array.length + 1) / 2);
  } else {
    left = array.slice(0, array.length / 2);
    right = array.slice(array.length / 2);
  }

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let array = [];
  let leftPointer = 0;
  let rightPointer = 0;
  let remainSide;
  let remainSidePointer;

  while (leftPointer < left.length && rightPointer < right.length) {
    if (left[leftPointer] < right[rightPointer]) {
      array.push(left[leftPointer]);
      leftPointer++;
    } else {
      array.push(right[rightPointer]);
      rightPointer++;
    }
  }

  if (leftPointer === left.length) {
    remainSide = right;
    remainSidePointer = rightPointer;
  } else {
    remainSide = left;
    remainSidePointer = leftPointer;
  }

  return (array = array.concat(remainSide.slice(remainSidePointer)));
}

console.log(twoSum([2, 7, 11, 15], 18));
