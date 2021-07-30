import { sum, show } from '../src/index';

test('adds 1 + 2 to equal 3', () => {
  expect(sum([1, 2, 3, 4])).toBe(10);
});

test('levi_show', () => {
  expect(show('levi')).toBe('levi_levi');
});
