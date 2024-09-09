import React from 'react';
import { useAppContext } from '../../context/AppContext';

const Graph = () => {
  const { graph } = useAppContext();

  return (
    <div className=" p-4 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold">Gastos - Ultima semana</h2>
      <p className="text-xl mt-2">{graph}</p>
      
    </div>
  );
};

export default Graph;