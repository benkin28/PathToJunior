function count(arr, item) {
  return arr.reduce((acc, next) => {
    return next === item ? acc + 1 : acc + 0;
  }, 0);
}

console.log(count([1, 2, 3, 3, 3], 1));
