function encryptCaesar(str, shift) {
  let code = "";
  for (let i = 0; i < str.length; i++) { // besser forOf/forEach
    code += String.fromCharCode(str.charCodeAt(i) + shift);
  }
  return code;
}
console.log(encryptCaesar("pe", 4));
