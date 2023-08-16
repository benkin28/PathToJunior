const test = [0, 4, -6];
const test2 = [1, 2, 3];

function containsNegativeorZero(arr) {
  return arr.findIndex((element) => element <=0) != -1;
}

function containsOnlyPositive(arr) {
    return !containsNegativeorZero(arr);
}

console.log(containsOnlyPositive(test2));
