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
    <div className="p-4 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold">{t('totalBalance.title')}</h2> 
      <p className="text-xl mt-2">{weekTotal} €</p>
    </div>
  );
};

export default TotalBalance;

