// Insertion Sort Big O - O(n^2)

// function insertionSort(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     let currentVal = arr[i];
//     let j;

//     for (j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
//       arr[j + 1] = arr[j];
//     }
//     arr[j + 1] = currentVal;
//   }

//   return arr;
// }

// console.log(insertionSort([5, 3, 4, 1, 2])); // [1,2,3,4,5]

function insertionSort(arr, comparator) {
  // Default comparator for numbers
  if (typeof comparator !== "function") {
    comparator = function (a, b) {
      return a - b;
    };
  }

  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    let j;

    // Move larger elements one position ahead
    for (j = i - 1; j >= 0 && comparator(currentVal, arr[j]) < 0; j--) {
      arr[j + 1] = arr[j];
    }

    // Insert current value into correct spot
    arr[j + 1] = currentVal;
  }

  return arr;
}

const kitties = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];

function strComp(a, b) {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  }
  return 0;
}

console.log(insertionSort(kitties, strComp)); // ["Blue", "Garfield", "Grumpy", "Heathcliff", "LilBub"]
