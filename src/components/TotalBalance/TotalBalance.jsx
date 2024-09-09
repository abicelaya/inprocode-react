import React from 'react';
import { useAppContext } from '../../context/AppContext';

const TotalBalance = () => {
  const { totalBalance } = useAppContext();

  return (
    <div className=" p-4 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold">Balance Total</h2>
      <p className="text-xl mt-2">{totalBalance} €</p>
    </div>
  );
};

export default TotalBalance;
