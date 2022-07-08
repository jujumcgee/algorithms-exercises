/*
  Write a function that performs mergesort
  Name the function mergeSort
  It will take in a array of numbers and return a sorted array numbers

  You'll need to write more than just one function
*/
const merge = (sortedArrayLeft, sortedArrayRight) => {
  let leftIndex = 0;
  let rightIndex = 0;

  const results = [];
  for (let i = 0; i < sortedArrayLeft.length + sortedArrayRight.length; i++) {
    if (leftIndex === sortedArrayLeft.length) {
      results.push(sortedArrayRight[rightIndex]);
      rightIndex++;
    } else if (rightIndex === sortedArrayRight.length) {
      results.push(sortedArrayLeft[leftIndex]);
      leftIndex++;
    } else if (sortedArrayLeft[leftIndex] <= sortedArrayRight[rightIndex]) {
      results.push(sortedArrayLeft[leftIndex]);
      leftIndex++;
    } else {
      results.push(sortedArrayRight[rightIndex]);
      rightIndex++;
    }
  }
  return results;
};
const mergeSort = (nums) => {
  if (nums.length < 2) {
    return nums;
  }

  const lastLeftIndex = Math.floor(nums.length / 2);
  const leftArray = nums.slice(0, lastLeftIndex);
  const rightArray = nums.slice(lastLeftIndex);

  const sortedLeft = mergeSort(leftArray);
  const sortedRight = mergeSort(rightArray);

  return merge(sortedLeft, sortedRight);
};

// unit tests
// do not modify the below code
test("merge sort", function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  const ans = mergeSort(nums);
  expect(ans).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
