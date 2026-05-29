const { add, multiply } = require('./math');

test('adds two numbers correctly', () => {
  expect(add(2, 3)).toBe(5);
  expect(add(-1, 1)).toBe(0);
});

test('multiplies two numbers correctly', () => {
  expect(multiply(3, 4)).toBe(12);
  expect(multiply(0, 99)).toBe(0);
});
