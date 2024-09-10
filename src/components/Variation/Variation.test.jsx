import { render, screen } from "@testing-library/react";
import Variation from "./Variation";
import { AppProvider } from "../../context/AppContext";
import React from "react";

it("debería mostrar correctamente el % de variación", () => {
  render(
    <AppProvider>
      <Variation />
    </AppProvider>
  );

  const variationElement = screen.getByText(/-31.82 %/i);
  expect(variationElement).toBeInTheDocument();
});
