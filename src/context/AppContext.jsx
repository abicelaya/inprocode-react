import React, { createContext, useState, useContext } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  //estado inicial para los datos
  const [totalBalance, setTotalBalance] = useState(0);
  const [expenseToday, setExpenseToday] = useState(0);
  const [variation, setVariation] = useState(0);

  //datos para la grafica
  const [expensesData, setExpensesData] = useState([
    { day: "Lunes", amount: 100 },
    { day: "Martes", amount: 150 },
    { day: "Miércoles", amount: 130 },
    { day: "Jueves", amount: 90 },
    { day: "Viernes", amount: 110 },
    { day: "Sábado", amount: 75 },
    { day: "Domingo", amount: 200 },
  ]);

  return (
    <AppContext.Provider
      value={{ totalBalance, expenseToday, variation, expensesData }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
