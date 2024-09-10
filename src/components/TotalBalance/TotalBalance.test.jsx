import { render, screen } from "@testing-library/react";
import TotalBalance from "./TotalBalance";
import CustomProvider from "../../context/CustomProvider";
import { it, describe, expect } from "vitest";
import React from "react";

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
  it("debería mostrar correctamente el balance total de la semana", () => {
    const expectedTotal = mockExpensesData.reduce(
      (total, expense) => total + expense.amount,
      0
    );

    render(
      <CustomProvider expensesData={mockExpensesData}>
        <TotalBalance />
      </CustomProvider>
    );

    const balanceElement = screen.getByText(`${expectedTotal} €`);
    expect(balanceElement).toBeInTheDocument();
  });
});
