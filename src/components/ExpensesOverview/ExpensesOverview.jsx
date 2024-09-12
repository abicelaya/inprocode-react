import React from "react";
import ExpenseToday from "../ExpenseToday/ExpenseToday";
import Variation from "../Variation/Variation";

const ExpensesOverview = () => {
  return (
    <div className="flex p-4 space-x-12 bg-white rounded-2xl">
      <div className="flex-1">
        <ExpenseToday />
      </div>
      <div className="flex-1">
        <Variation />
      </div>
    </div>
  );
};

export default ExpensesOverview;
