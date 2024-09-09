import React from 'react';
import { useAppContext } from '../../context/AppContext.jsx';

const ExpenseToday = () => {
  const { expenseToday } = useAppContext();

  return (
    <div className=" p-4 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold">Gasto de Hoy</h2>
      <p className="text-xl mt-2">{expenseToday} €</p>
    </div>
  );
};

export default ExpenseToday;