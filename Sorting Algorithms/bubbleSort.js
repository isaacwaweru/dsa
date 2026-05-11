// Bubble Sort Big O - O(n^2) Best Case O(n)
// function swap(arr, indx1, indx2) {
//   [arr[indx1], arr[indx2]] = [arr[indx2], arr[indx1]];
// }

// function bubbleSort(arr) {
//   let noSwaps;
//   for (let i = arr.length; i > 0; i--) {
//     noSwaps = true;
//     for (let j = 0; j < i - 1; j++) {
//       console.log(arr[j], arr[j + 1]);
//       if (arr[j] > arr[j + 1]) {
//         swap(arr, j, j + 1);
//         noSwaps = false;
//       }
//     }
//     if (noSwaps) break;
//   }

//   return arr;
// }

// console.log(bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]));
// // console.log(bubbleSort([5,3,4,1,2,-33]));

function bubbleSort(arr, comparator) {
  // Default comparator (ascending order for numbers)
  if (typeof comparator !== "function") {
    comparator = function (a, b) {
      return a - b;
    };
  }

  let noSwaps;

  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;

    for (let j = 0; j < i - 1; j++) {
      // If comparator returns positive,
      // it means arr[j] should come after arr[j + 1]
      if (comparator(arr[j], arr[j + 1]) > 0) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        noSwaps = false;
      }
    }

    // Stop early if already sorted
    if (noSwaps) break;
  }

  return arr;
}
bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]);
