import { render, screen } from '@testing-library/react';
import { MyButton, ThemeButton } from './MyButton';
import React from 'react';

describe('MyButton', () => {
  test('in the document', () => {
    render(<MyButton>Test</MyButton>);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });
  test('with theme', () => {
    render(<MyButton theme={ThemeButton.CLEAR}>Test</MyButton>);
    expect(screen.getByText('Test')).toBeInTheDocument();
    expect(screen.getByText('Test')).toHaveClass('clear');
    screen.debug();
  });
});
