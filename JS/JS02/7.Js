function removeDuplicates(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}
const arr = [1, 1, 2, 3, 4, 4, 4, 4];

console.log(removeDuplicates(arr));
console.log(arr.indexOf(1));
