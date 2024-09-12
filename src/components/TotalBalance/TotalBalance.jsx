import React from "react";
import { useAppContext } from "../../context/AppContext";
import { useTranslation } from "react-i18next";


const TotalBalance = () => {
  const { t } = useTranslation();
  const { expensesData } = useAppContext();

  const weekTotal = expensesData.reduce(
    (total, expense) => total + expense.amount,
    0
  );

  return (
    <div className="p-4 pl-6 rounded-2xl bg-[#ff8a65] text-white font-montserrat">
      <h2 className="text ">{t('totalBalance.title')}</h2>
      <p className="text-3xl mt-2 font-semibold">{weekTotal} €</p>
    </div>
  );
};

export default TotalBalance;
