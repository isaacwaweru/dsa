//////////////////////////// Binary Search /////////////////////////// Big O - O(log n)
function binarySearch(arr, el) {
  let left = 0;
  let right = arr.length - 1;
  let middle = Math.floor((left + right) / 2);

  while (arr[middle] !== el && left <= right) {
    if (arr[middle] < el) left = middle + 1;
    else right = middle - 1;

    middle = Math.floor((left + right) / 2);
  }

  return arr[middle] === el ? middle : -1;
}

const t1 = performance.now();
console.log(
  binarySearch(
    [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4,
      5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8,
      9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2,
      3, 4, 5, 6, 7, 8, 9, 10, 50, 100,
    ],
    100,
  ),
);
console.log(`Algorithm took: ${(performance.now() - t1) / 1000} secs`); // Algorithm took: 0.002450125 secs
