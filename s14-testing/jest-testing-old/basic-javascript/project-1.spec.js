const helpers = require('./project-1');

// start testing!

describe('numbers', () => {
  it('multiple by ten', () => {
    expect(helpers.multiplyByTen(1)).toBe(10);
    expect(helpers.multiplyByTen(3)).toBe(30);
  });

  it('subtract by 5', () => {
    expect(helpers.subtractFive(10)).toBe(5);
    expect(helpers.subtractFive(100)).toBe(95);
  });

  it('two numbers are equal', () => {
    expect(helpers.areEqual(1, 1)).toBe(true);
    expect(helpers.areEqual(12, 12)).toBe(true);
    expect(helpers.areEqual(1, 2)).toBe(false);
  });

  it('less than ninety', () => {
    expect(helpers.lessThanNinety(5)).toBe(true);
    expect(helpers.lessThanNinety(20)).toBe(true);
    expect(helpers.lessThanNinety(100)).toBe(false);
  });

  it('greater than fifty', () => {
    expect(helpers.greaterThanFifty(55)).toBe(true);
    expect(helpers.greaterThanFifty(105)).toBe(true);
    expect(helpers.greaterThanFifty(44)).toBe(false);
  });

  // add
  // subtract
  // divide
  // multiply
  // getRemainder
  // isEven
  // isOdd
  // square
  // raiseToPower
  // roundNumber
  // roundUp
  // addExclamationPoint
  // combinesName
  // getGreeting
  // getRectangleArea
  // getTriangleArea
  // getCircleArea
  //getRectangularPrismVolume
});

describe('strings', () => {
  it('two strings are the same length', () => {
    expect(helpers.areSameLength('test', 'work')).toBe(true);
    expect(helpers.areSameLength('thank', 'today')).toBe(true);
    expect(helpers.areSameLength('yes', 'no')).toBe(false);
  });
});
