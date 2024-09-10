import React from "react";
import { useAppContext } from "../../context/AppContext";

const TotalBalance = () => {
  const { expensesData } = useAppContext();

  const weekTotal = expensesData.reduce(
    (total, expense) => total + expense.amount,
    0
  );

  return (
    <div className="p-4 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold">Balance Total de la Semana</h2>
      <p className="text-xl mt-2">{weekTotal} €</p>
    </div>
  );
};

export default TotalBalance;
