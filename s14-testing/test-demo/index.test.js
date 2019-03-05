it('check equality', () => {
  expect({ one: 1 }).toEqual({ one: 1 });
  expect([1, 2]).toEqual([1, 2]);
  expect([1, 2, 3, 4]).toEqual(expect.arrayContaining([1, 2]));
});

// OTHER USEFUL MATCHES
/*
  .not
  .toBeCloseTo
  .toMatch
  .toContain
  .toHaveLength
  .arrayContaining
  .stringContaining
*/

it('repairs to full durability', () => {
  const item = {
    name: 'Lambda Shield',
    durability: 98,
    displayName: '[+3] Lambda Shield'
  };

  const expected = {
    name: 'Lambda Shield',
    durability: 100,
    displayName: '[+3] Lambda Shield'
  };

  // expect(enhancer.repair(item).toEqual(expected));
  expect(repair(item).durability).toBe(100);
});
