// eslint-disable-next-line no-unused-vars
function getSum(a, b) {
  const sum = a + b;
  return sum;
}

function randomNumber(a, b) {
  if (a > b || a === b) {
    return console.error("Wrong randomNumber parameters");
  }
  return (Math.floor(Math.random() * b) + a);
}

function checkInputLength(stringNumber, maxStringLength) {
  if (length.stringNumber <= maxStringLength) {
    return true;
  }
  return false;
}