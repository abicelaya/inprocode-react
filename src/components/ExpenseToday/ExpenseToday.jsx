import React from "react";
import { useAppContext } from "../../context/AppContext";
import { useTranslation } from "react-i18next";

const ExpenseToday = () => {
  const { t } = useTranslation();
  const { expensesData, currentDay } = useAppContext();

  const formattedDay = currentDay.toLowerCase();

  const translatedDay = t(`days.${formattedDay}`);

  const todayExpense =
    expensesData.find((expense) => expense.day === currentDay)?.amount || 0;

  return (
    <div className="p-4 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold">
        {t("expenseToday.title")} - {translatedDay}
      </h2>
      <p className="text-xl mt-2">{todayExpense} €</p>
    </div>
  );
};

export default ExpenseToday;
