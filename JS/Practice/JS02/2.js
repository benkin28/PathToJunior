function removeByIndex(arr, idx) {
  return arr.filter((element, index) => index != idx);
}

console.log(removeByIndex([1, 2, 3], 0));
