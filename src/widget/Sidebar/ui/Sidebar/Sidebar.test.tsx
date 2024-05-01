import { fireEvent, screen } from '@testing-library/react';
import React from 'react';
import { Sidebar } from './Sidebar';
import { renderWithTranslation } from 'shared/lib/renderWithTranslation/renderWithTranslation';

describe('Sidebar', () => {
  test('in the document', () => {
    renderWithTranslation(<Sidebar />);
    expect(screen.getByTestId('test-sidebar')).toBeInTheDocument();
  });

  test('Open sidebar', () => {
    renderWithTranslation(<Sidebar />);
    const btn = screen.getByTestId('test-sidebar-button');
    expect(screen.getByTestId('test-sidebar')).toBeInTheDocument();
    fireEvent.click(btn);
    expect(screen.getByTestId('test-sidebar')).toHaveClass('collapsed');
  });
});
