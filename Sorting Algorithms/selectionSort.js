// Selection Sort Big O - O(n^2)
// function swap(arr, indx1, indx2) {
//   [arr[indx1], arr[indx2]] = [arr[indx2], arr[indx1]];
// }

// function selectionSort(arr) {
//   const swap = (arr, indx1, indx2) =>
//     ([arr[indx1], arr[indx2]] = [arr[indx2], arr[indx1]]);

//   for (let i = 0; i < arr.length; i++) {
//     let min = i;

//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] < arr[min]) {
//         min = j;
//       }
//     }

//     if (i !== min) {
//       swap(arr, i, min);
//     }
//   }

//   return arr;
// }

// console.log(selectionSort([5, 3, 4, 1, 2])); // [1,2,3,4,5]

function selectionSort(arr, comparator) {
  // Default comparator
  if (typeof comparator !== "function") {
    comparator = function (a, b) {
      return a - b;
    };
  }

  function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      // comparator < 0 means arr[j] should come first
      if (comparator(arr[j], arr[minIndex]) < 0) {
        minIndex = j;
      }
    }

    if (i !== minIndex) {
      swap(arr, i, minIndex);
    }
  }

  return arr;
}

// console.log(selectionSort([4, 20, 12, 10, 7, 9]));
var moarKittyData = [
  { name: "LilBub", age: 7 },
  { name: "Garfield", age: 40 },
  { name: "Heathcliff", age: 45 },
  { name: "Blue", age: 1 },
  { name: "Grumpy", age: 6 },
];

function oldestToYoungest(a, b) {
  return b.age - a.age;
}

console.log(selectionSort(moarKittyData, oldestToYoungest));
