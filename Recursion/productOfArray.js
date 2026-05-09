function productOfArray(arr) {
  let product = 1;

  // Base case
  if (arr.length === 0) return 1;

  product *= arr[0] * productOfArray(arr.slice(1));
  return product;
}

console.log(productOfArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
