const test = [0, 4, -6];
const test2 = [1, 2, 3];

function containsNegative(arr) {
  return arr.findIndex((element) => element<0)!=-1;
}

console.log(containsNegative(test2));
