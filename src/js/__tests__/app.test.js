import ErrorRepository from '../app';

const error = new ErrorRepository();
test('translate(code) - this error is in the list', () => {
  expect(error.translate(404)).toBe('Not Found');
});

test('translate(code) method - this error is not in the list', () => {
  expect(error.translate(1)).toBe('Unknown error');
});
