// Merges two already sorted arrays
// function merge(arr1, arr2) {
//   let results = [];
//   let i = 0;
//   let j = 0;

//   while (i < arr1.length && j < arr2.length) {
//     if (arr2[j] > arr1[i]) {
//       results.push(arr1[i]);
//       i++;
//     } else {
//       results.push(arr2[j]);
//       j++;
//     }
//   }

//   while (i < arr1.length) {
//     results.push(arr1[i]);
//     i++;
//   }

//   while (j < arr2.length) {
//     results.push(arr2[j]);
//     j++;
//   }

//   return results;
// }

// function mergeSort(arr) {
//   // Base case
//   if (arr.length <= 1) return arr;
//   let mid = Math.floor(arr.length / 2);
//   let left = mergeSort(arr.slice(0, mid));
//   let right = mergeSort(arr.slice(mid));

//   return merge(left, right);
// }

// console.log(mergeSort([10, 24, 76, 72]));

function merge(arr1, arr2, comparator) {
  // Default comparator for numbers
  if (typeof comparator !== "function") {
    comparator = function (a, b) {
      return a - b;
    };
  }

  let results = [];
  let i = 0;
  let j = 0;

  // Compare elements from both arrays
  while (i < arr1.length && j < arr2.length) {
    if (comparator(arr1[i], arr2[j]) <= 0) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }

  // Add remaining elements from arr1
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }

  // Add remaining elements from arr2
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }

  return results;
}

function mergeSort(arr, comparator) {
  // Default comparator
  if (typeof comparator !== "function") {
    comparator = function (a, b) {
      return a - b;
    };
  }

  // Base case
  if (arr.length <= 1) return arr;

  // Split array into halves
  let middle = Math.floor(arr.length / 2);

  let left = mergeSort(arr.slice(0, middle), comparator);
  let right = mergeSort(arr.slice(middle), comparator);

  // Merge sorted halves
  return merge(left, right, comparator);
}

mergeSort([4, 20, 12, 10, 7, 9]); // [4, 7, 9, 10, 12, 20]
