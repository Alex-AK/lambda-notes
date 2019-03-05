module.exports = {
  add,
  multiply
};

function add(a, b) {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  } else {
    // throw new Error('Inputs require numbers');
    return null;
  }
}

function multiply(a, b) {
  return a * b;
}
