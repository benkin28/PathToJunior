function isPrime(n) {
  if (n <= 1) {
    throw new Error("gib richtig ein");
  }
  let prime = true;
  for (i = 2; i < n / 2; i++) {
    if (n % i == 0) {
      prime = false;
    }
  }
  return prime;
}
console.log(isPrime(1));
