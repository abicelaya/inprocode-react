import { render, screen } from '@testing-library/react';
import TotalBalance from './TotalBalance';
import { AppProvider } from '../../context/AppContext'; 
import { it } from 'vitest';
import React from 'react';

it('deberia mostrar correctamente el balance total', () => {
  render(
    <AppProvider>
      <TotalBalance />
    </AppProvider>
  );

  const balanceElement = screen.getByText(/3323 €/i); 
  expect(balanceElement).toBeInTheDocument(); 
});
