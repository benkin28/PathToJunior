function getRow(arr, i) {
  const result = [];
  for (let row of arr) {
    result.push(row[i]);
  }
  return result;
}

console.log(
  getRow(
    [
      [1, 2],
      [3, 4],
    ],
    0
  )
);
