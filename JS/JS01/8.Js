function encryptCaesar(str, shift) {
  let code = "";
  for (let i = 0; i < str.length; i++) {
    code += String.fromCharCode(str.charCodeAt(i) + shift);
  }
  return code;
}
console.log(encryptCaesar("penis", 4));
