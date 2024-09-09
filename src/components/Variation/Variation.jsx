import React from 'react';
import { useAppContext } from '../../context/AppContext';

const Variation = () => {
  const { variation } = useAppContext();

  return (
    <div className=" p-4 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold">Variación</h2>
      <p className="text-xl mt-2">{variation} %</p>
      <p>respecto a ayer</p>
    </div>
  );
};

export default Variation;
