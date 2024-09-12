import React from "react";
import { AppProvider } from "./AppContext";

const CustomProvider = ({ children }) => (
  <AppProvider>{children}</AppProvider>
);

export default CustomProvider;
