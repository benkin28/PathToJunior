const arr1 = [4, 2, 5, 1, 3];
const arr2 = [6, 7, 102, 9, 10];
function sortBySize(a,b) {
  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  } else {
    return 0;
  }
}
console.log(arr2.concat(arr1).sort(sortBySize));
