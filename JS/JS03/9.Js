function sumSquareEven(arr) {
  return arr
    .filter((element, index) => index % 2 !== 0)
    .reduce((acc, curr) => (acc += curr**2));
}

console.log(sumSquareEven([1, 2, 3, 4]));
