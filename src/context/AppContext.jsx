import React, { createContext, useState, useContext, useEffect } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const initialExpensesData = [
    { day: "Lunes", amount: 100 },
    { day: "Martes", amount: 150 },
    { day: "Miércoles", amount: 130 },
    { day: "Jueves", amount: 90 },
    { day: "Viernes", amount: 110 },
    { day: "Sábado", amount: 75 },
    { day: "Domingo", amount: 200 },
  ];

  const [expensesData, setExpensesData] = useState(initialExpensesData);

  const getDayOfWeek = (index) => {
    const days = [
      "Lunes",
      "Martes",
      "Miércoles",
      "Jueves",
      "Viernes",
      "Sábado",
      "Domingo",
    ];
    return days[index];
  };

  const getCurrentDay = () => {
    const today = new Date();
    const dayIndex = today.getDay();
    return getDayOfWeek(dayIndex === 0 ? 6 : dayIndex - 1);
  };

  const [currentDay, setCurrentDay] = useState(getCurrentDay());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDay(getCurrentDay());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <AppContext.Provider value={{ expensesData, currentDay }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
