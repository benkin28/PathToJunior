function isSafe(password) {
  var regularExpression =
    /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,128}$/;
  let out = true;
  regularExpression.test(password) ? (out = true) : (out = false);
  return out;
}
console.log(isSafe("9a!F2gdgfdfv"));
