// function imports
const { add, multiply } = require('./math');

// SUT : System Under Test
// Test suite -> test cases -> assertions -> matchers

describe('math.js', () => {
  describe('add()', () => {
    test('adds two numbers correctly', () => {
      // arrange (setup)
      // const expected = 4;
      // Act (Run SUT)
      // const actual = math.add(2, 2);

      // Assert
      // expect(actual).toEqual(expected); // assertion
      // using a toEqual matcher ^

      // can execute code in one line if it's clear enough
      expect(add(2, 2)).toBe(4);
      expect(add(1, 3)).toBe(4);
      expect(add(-1, 3)).toBe(2);
    });
    // test cases
    // strings
    // undefined, NaN, null
    // only one argument
    // no arguments
    // objects, arrays, booleans
    // extra arguments

    it('should return null when arguments are not numbers', () => {
      expect(add()).toBeNull;
      expect(add(1)).toBeNull;
      expect(add(null, 1)).toBeNull;
      expect(add(undefined, 3)).toBeNull;
      expect(add({}, 2)).toBeNull;
      expect(add([], 1)).toBeNull;
      expect(add(NaN, '3')).toBeNull;
      expect(add(NaN, 4)).toBeNull;
    });
  });

  describe('multiply()', () => {
    it('multiplies two numbers', () => {
      expect(multiply(3, 4)).toBe(12);
    });
  });
});
