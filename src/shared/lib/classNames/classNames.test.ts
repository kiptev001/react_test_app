import classNames from './classNames';

describe('class names', () => {
  test('should first', () => {
    expect(classNames('app', {}, ['theme'])).toBe('app theme');
  });
});
