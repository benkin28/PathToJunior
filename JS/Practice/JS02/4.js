function range(start, stop, step) {
  let remaining = stop;
  let result = [];
  let iter = 0;
  while (remaining - step > 0) {
    result.push(start + step * iter);
    remaining -= step;
    iter++;
  }
    return result;
}

console.log(range(1, 10, 3));
