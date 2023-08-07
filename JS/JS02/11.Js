function inter(arr1, arr2) {
  return arr1.filter((item) => arr2.includes(item));
}

const arr1 = [1, 2, 3];
const arr2 = [2, 3, 4];

console.log(inter(arr1, arr2));
