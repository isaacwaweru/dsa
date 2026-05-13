// Big O - O(n^2)
function printRow(spaces, bricks) {
  // Print spaces
  for (let i = 0; i < spaces; i++) {
    process.stdout.write(" ");
  }

  // Print bricks
  for (let j = 0; j < bricks; j++) {
    process.stdout.write("#");
  }

  // Newline
  process.stdout.write("\n");
}

function main(height) {
  for (let i = 0; i < height; i++) {
    printRow(height - i - 1, i + 1);
  }
}

main(4);
