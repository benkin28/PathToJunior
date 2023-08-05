function isUpperCase(char) {
  return char === char.toUpperCase();
}
function isLowerCase(char) {
  return char === char.toLowerCase();
}

function isStrongPassword(password) {
  let isstrong = true;
  password.length >= 8 ? (isstrong = true) : (isstrong = false);
  let containsUpper = false;
  let containsLower = false;
  let isInt = false;
  let containsSpecial = false;
  for (let i = 0; i < password.length; i++) {
    if (isUpperCase(password[i])) {
      containsUpper = true;
    } else if (isLowerCase(password[i])) {
      containsLower = true;
    }
    if (Number.isInteger(Number(password[i]))) {
      isInt = true;
    }
  }
  return (isstrong =
    isstrong && containsUpper && containsLower && isInt && containsSpecial);
}

console.log(isStrongPassword("a3_AAAAAAAAAAAAAAAAAA"));
console.log(password.match);
