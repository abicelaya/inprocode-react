import React from "react";
import { useAppContext } from "../../context/AppContext";

const Variation = () => {
  const { expensesData } = useAppContext();

  const today = "Sábado";
  const yesterday = "Viernes";

  const todayExpense =
    expensesData.find((expense) => expense.day === today)?.amount || 0;
  const yesterdayExpense =
    expensesData.find((expense) => expense.day === yesterday)?.amount || 0;

  const variation =
    yesterdayExpense === 0
      ? 0
      : ((todayExpense - yesterdayExpense) / yesterdayExpense) * 100;

  return (
    <div className="p-4 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold">Variación</h2>
      <p className="text-xl mt-2">{variation.toFixed(2)} %</p>
      <p>respecto a ayer</p>
    </div>
  );
};

export default Variation;
