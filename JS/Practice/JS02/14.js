function removeDuplicates(arr) {
  return arr.filter(
    (element, index) => arr.findIndex((elem) => elem === element) === index
  );
}

console.log(removeDuplicates([1, 2, 2, 3, 3, 3, 5]));
