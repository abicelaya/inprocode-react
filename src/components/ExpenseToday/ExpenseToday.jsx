import React from "react";
import { useAppContext } from "../../context/AppContext";

const ExpenseToday = () => {
  const { expensesData } = useAppContext();

  // suponiendo que hoy es "Sábado"
  const today = "Sábado";
  const todayExpense =
    expensesData.find((expense) => expense.day === today)?.amount || 0;

  return (
    <div className="p-4 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold">Gasto de Hoy</h2>
      <p className="text-xl mt-2">{todayExpense} €</p>
    </div>
  );
};

export default ExpenseToday;
