function removeByValue(arr, value) {
  return arr.filter((item) => item != value);
}

console.log(removeByValue([1, 2, 3], 3));
