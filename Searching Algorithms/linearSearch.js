//////////////////////////// Linear Search /////////////////////////// Big O - O(n)
function linearSearch(arr, el) {
  // Loops each item to see whethers it's there
  for (let i = 0; i < arr.length; i++) {
    // If found, return the index
    if (arr[i] === el) return i;
  }

  // If not found, return -1
  return -1;
}

const t2 = performance.now();
console.log(
  linearSearch(
    [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4,
      5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8,
      9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2,
      3, 4, 5, 6, 7, 8, 9, 10, 50, 100,
    ],
    50,
  ),
);
console.log(`Algorithm took: ${(performance.now() - t2) / 1000} secs`); // Algorithm took: 0.003555534 secs
