function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function performOp(a, b, op) {
  switch (op) {
    case "+":
      return a + b;
      break;
    case "-":
      return a - b;
      break;
    default:
      throw new Error("Kek");
  }
}

export { add, subtract, performOp };
