import { render, screen } from '@testing-library/react';
import Variation from './Variation';
import { AppProvider } from '../../context/AppContext'; 
import { it } from 'vitest';
import React from 'react';

it('deberia mostrar correctamente el % de variación', () => {
  render(
    <AppProvider>
      <Variation />
    </AppProvider>
  );

  const variationElement = screen.getByText(/2.4 %/i);
  expect(variationElement).toBeInTheDocument();
});
