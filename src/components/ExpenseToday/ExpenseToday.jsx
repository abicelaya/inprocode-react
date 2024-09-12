import React from "react";
import { useAppContext } from "../../context/AppContext";
import { useTranslation } from "react-i18next";

const ExpenseToday = () => {
  const { t } = useTranslation();
  const { expensesData, currentDay } = useAppContext();

  const todayExpense =
    expensesData.find((expense) => expense.day === currentDay)?.amount || 0;

  return (
    <div className="p-4 rounded-2xl ">
      <p className="text-sm font-semibold text-gray-400">
        {t("expenseToday.title")}
      </p>
      <p className="text-4xl font-bold mt-2">{todayExpense} €</p>
    </div>
  );
};

export default ExpenseToday;
