import React, { createContext, useContext, useState } from "react";

const TestAppContext = createContext();

export const TestAppProvider = ({ children }) => {
  const testExpensesData = [
    { day: "Lunes", amount: 100 },
    { day: "Martes", amount: 150 },
    { day: "Miércoles", amount: 130 },
    { day: "Jueves", amount: 90 },
    { day: "Viernes", amount: 110 },
    { day: "Sábado", amount: 75 },
    { day: "Domingo", amount: 200 },
  ];

  const [currentDay, setCurrentDay] = useState("Jueves");

  return (
    <TestAppContext.Provider
      value={{ expensesData: testExpensesData, currentDay: currentDay }}
    >
      {children}
    </TestAppContext.Provider>
  );
};

export const useTestAppContext = () => useContext(TestAppContext);
