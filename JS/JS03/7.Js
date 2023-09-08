function product(arr) {
  return arr.reduce((acc, curr) => acc * curr);
}

const arr = [6, 6];

console.log(product(arr));
