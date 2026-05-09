function addUpTo(n) {
  // Base case
  if (n === 1) return 1;
  return n + addUpTo(n - 1);
}

console.log(addUpTo(4));
