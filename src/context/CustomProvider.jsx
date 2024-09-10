import React from "react";
import { AppProvider } from "./AppContext";

const CustomProvider = ({ children, expensesData }) => (
  <AppProvider value={{ expensesData }}>{children}</AppProvider>
);

export default CustomProvider;
