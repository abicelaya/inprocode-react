import React from "react";
import { screen } from "@testing-library/react";
import TotalBalance from "../components/TotalBalance/TotalBalance";
import { renderWithProviders } from "../tests/test-utils";
import { TestAppProvider } from "../tests/TestAppProvider";

const mockExpensesData = [
  { day: "Lunes", amount: 100 },
  { day: "Martes", amount: 150 },
  { day: "Miércoles", amount: 130 },
  { day: "Jueves", amount: 90 },
  { day: "Viernes", amount: 110 },
  { day: "Sábado", amount: 75 },
  { day: "Domingo", amount: 200 },
];

describe("TotalBalance Component", () => {
  it("debería mostrar correctamente el balance total de la semana en español", () => {
    const expectedTotal = 855;

    renderWithProviders(
      <TestAppProvider expensesData={mockExpensesData}>
        <TotalBalance />
      </TestAppProvider>,
      { locale: "es" }
    );

    const balanceElement = screen.getByText(`${expectedTotal} €`);
    expect(balanceElement).toBeInTheDocument();

    const titleElement = screen.getByText(/balance total/i);
    expect(titleElement).toBeInTheDocument();
  });

  it("debería mostrar correctamente el balance total de la semana en inglés", () => {
    const expectedTotal = 855;

    renderWithProviders(
      <TestAppProvider expensesData={mockExpensesData}>
        <TotalBalance />
      </TestAppProvider>,
      { locale: "en" }
    );

    const balanceElement = screen.getByText(`${expectedTotal} €`);
    expect(balanceElement).toBeInTheDocument();

    const titleElement = screen.getByText(/total balance/i);
    expect(titleElement).toBeInTheDocument();
  });

  it("debería mostrar correctamente el balance total de la semana en catalán", () => {
    const expectedTotal = 855;

    renderWithProviders(
      <TestAppProvider expensesData={mockExpensesData}>
        <TotalBalance />
      </TestAppProvider>,
      { locale: "ca" }
    );

    const balanceElement = screen.getByText(`${expectedTotal} €`);
    expect(balanceElement).toBeInTheDocument();

    const titleElement = screen.getByText(/balanç total/i);
    expect(titleElement).toBeInTheDocument();
  });
});
