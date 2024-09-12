import React from "react";
import { useAppContext } from "../../context/AppContext";
import { useTranslation } from "react-i18next";

const Variation = () => {
  const { t } = useTranslation();
  const { expensesData, currentDay } = useAppContext();

  const today = currentDay;
  const yesterdayIndex = (new Date().getDay() + 6) % 7;
  const yesterday = expensesData[yesterdayIndex - 1]?.day;

  const todayExpense =
    expensesData.find((expense) => expense.day === today)?.amount || 0;
  const yesterdayExpense =
    expensesData.find((expense) => expense.day === yesterday)?.amount || 0;

  const variation =
    yesterdayExpense === 0
      ? 0
      : ((todayExpense - yesterdayExpense) / yesterdayExpense) * 100;

  return (
    <div className="p-4 rounded-2xl ">
      <p className="font-bold mt-2">{variation.toFixed(2)}%</p>
      <p className="font-bold">{t("respectoAyer")}</p>
    </div>
  );
};

export default Variation;
