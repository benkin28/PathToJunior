function sumOfDigits(number) {
  const digits = number.toString().split("");
  let sum = 0;
  for (digit of digits) {
    sum += Number(digit);
  }
  return sum;
}
console.log(sumOfDigits(888));
