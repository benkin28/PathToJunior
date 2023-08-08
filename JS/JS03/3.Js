function moreThan4(arr) {
  return arr.reduce((acc, curr) => {
    if (curr.length > 4 && acc === 0) {
      acc = curr;
    }
    return acc;
  }, 0);
}

console.log(moreThan4(["hey", "he<e", "ddddddddddd"]));
