import classNames from './classNames';

describe('class names', () => {
  test('с первым аргументом', () => {
    expect(classNames('app', {}, [])).toBe('app');
  });

  test('с первым аргументом и массивом из одного класса', () => {
    expect(classNames('app', {}, ['theme'])).toBe('app theme');
  });

  test('с первым аргументом, массивом и объектом с true', () => {
    expect(classNames('app', { hover: true }, ['theme'])).toBe(
      'app theme hover'
    );
  });

  test('с первым аргументом, массивом и объектом с false', () => {
    expect(classNames('app', { class: true, class2: false }, ['theme'])).toBe(
      'app theme class'
    );
  });
});
