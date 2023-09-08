function getSortedKeys(obj) {
  return Object.keys(obj).sort();
}

function getSortedValues(obj) {
  return Object.values(obj).sort();
}

console.log(
  getSortedKeys({
    name: "Bennet",
    age: 19,
  })
);
console.log(
  getSortedValues({
    name: "Bennet",
    age: 19,
  })
);
