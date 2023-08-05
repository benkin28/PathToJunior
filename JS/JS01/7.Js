function isprime(n) {
  if (n <= 1) {
    console.log("gib richtig ein");
  }
  let prime = true;
  for (i = 2; i < n / 2; i++) {
    if (n % i == 0) {
      prime = false;
    }
  }
  return prime;
}
console.log(isprime(1));
