import React from "react";
import { screen } from "@testing-library/react";
import Variation from "../components/Variation/Variation";
import { renderWithProviders } from "../tests/test-utils";
import { TestAppProvider } from "../tests/TestAppProvider";

describe("Variation Component", () => {
  it("debería mostrar correctamente el % de variación en español", () => {
    renderWithProviders(
      <TestAppProvider>
        <Variation />
      </TestAppProvider>,
      { locale: "es" }
    );

    const variationElement = screen.getByText("-30.77%");
    expect(variationElement).toBeInTheDocument();

    const respectElement = screen.getByText(/respecto a ayer/i);
    expect(respectElement).toBeInTheDocument();
  });

  it("debería mostrar correctamente el % de variación en inglés", () => {
    renderWithProviders(
      <TestAppProvider>
        <Variation />
      </TestAppProvider>,
      { locale: "en" }
    );

    const variationElement = screen.getByText("-30.77%");
    expect(variationElement).toBeInTheDocument();

    const respectElement = screen.getByText(/compared to yesterday/i);
    expect(respectElement).toBeInTheDocument();
  });

  it("debería mostrar correctamente el % de variación en catalán", () => {
    renderWithProviders(
      <TestAppProvider>
        <Variation />
      </TestAppProvider>,
      { locale: "ca" }
    );

    const variationElement = screen.getByText("-30.77%");
    expect(variationElement).toBeInTheDocument();

    const respectElement = screen.getByText(/respecte a ahir/i);
    expect(respectElement).toBeInTheDocument();
  });
});
