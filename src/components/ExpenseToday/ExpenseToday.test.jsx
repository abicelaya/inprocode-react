import { render, screen } from "@testing-library/react";
import ExpenseToday from "./ExpenseToday";
import { AppProvider } from "../../context/AppContext";
import React from "react";

it("debería mostrar correctamente el gasto de hoy", () => {
  render(
    <AppProvider>
      <ExpenseToday />
    </AppProvider>
  );

  const todayExpenseElement = screen.getByText(/75 €/i);
  expect(todayExpenseElement).toBeInTheDocument();
});
