import { double, power } from './number';

test('double', () => {
  expect(double(2)).toBe(4);
});

test('power', () => {
  expect(power(2, 4)).toBe(16);
});
