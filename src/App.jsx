import React from "react";
import { AppProvider } from "./context/AppContext.jsx";
import TotalBalance from "./components/TotalBalance/TotalBalance.jsx";
import ExpenseToday from "./components/ExpenseToday/ExpenceToday.jsx";
import Variation from "./components/Variation/Variation.jsx";
import Graph from "./components/Graph/Graph.jsx";

const App = () => {
  return (
    <AppProvider>
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-full md:w-1/3 p-6 flex flex-col gap-6">
          <TotalBalance />
          <Graph />
          <ExpenseToday />
          <Variation />
        </div>
      </div>
    </AppProvider>
  );
};

export default App;
