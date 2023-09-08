console.log(Math.min(...[-6, 2, 3]));
function mean(arr) {
  return arr.reduce((acc, next) => acc + next) / arr.length;
}
function median(arr) {
  arr.sort();
  return arr.length % 2 === 0
    ? arr[arr.length / 2 - 1]
    : arr[arr.length / 2 - 0.5];
}

console.log(median([1, 5, 3, 4, 7]));
