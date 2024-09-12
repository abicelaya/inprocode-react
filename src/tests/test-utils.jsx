import React from "react";
import { render } from "@testing-library/react";
import { I18nextProvider } from "react-i18next";
import i18n from "../i18n";
import { AppProvider } from "../context/AppContext"; 

const renderWithProviders = (ui, { locale = "es" } = {}) => {
  i18n.changeLanguage(locale);
  return render(
    <I18nextProvider i18n={i18n}>
      <AppProvider>{ui}</AppProvider>
    </I18nextProvider>
  );
};

export * from "@testing-library/react";
export { renderWithProviders };

