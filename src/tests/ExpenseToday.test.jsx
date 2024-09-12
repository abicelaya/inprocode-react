import React from "react";
import { screen } from "@testing-library/react";
import ExpenseToday from "../components/ExpenseToday/ExpenseToday";
import { renderWithProviders } from "../tests/test-utils";
import { TestAppProvider } from "../tests/TestAppProvider";

describe("ExpenseToday Component", () => {
  it("debería mostrar correctamente el gasto de hoy en español", () => {
    renderWithProviders(
      <TestAppProvider>
        <ExpenseToday />
      </TestAppProvider>,
      { locale: "es" }
    );

    const todayExpenseElement = screen.getByText("90 €");
    expect(todayExpenseElement).toBeInTheDocument();
  });

  it("debería mostrar correctamente el gasto de hoy en inglés", () => {
    renderWithProviders(
      <TestAppProvider>
        <ExpenseToday />
      </TestAppProvider>,
      { locale: "en" }
    );

    const todayExpenseElement = screen.getByText("90 €");
    expect(todayExpenseElement).toBeInTheDocument();
  });

  it("debería mostrar correctamente el gasto de hoy en catalán", () => {
    renderWithProviders(
      <TestAppProvider>
        <ExpenseToday />
      </TestAppProvider>,
      { locale: "ca" }
    );

    const todayExpenseElement = screen.getByText("90 €");
    expect(todayExpenseElement).toBeInTheDocument();
  });
});
