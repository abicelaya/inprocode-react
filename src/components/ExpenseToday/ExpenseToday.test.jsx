import { render, screen } from '@testing-library/react';
import ExpenseToday from './ExpenseToday';
import { AppProvider } from '../../context/AppContext'; 
import { it } from 'vitest';
import React from 'react';

it('deberia mostrar correctamente el gasto de hoy', () => {
  render(
    <AppProvider>
      <ExpenseToday />
    </AppProvider>
  );

  const todayExpenseElement = screen.getByText(/75.46 €/i); 
  expect(todayExpenseElement).toBeInTheDocument(); 
});
