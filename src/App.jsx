import React from "react";
import { AppProvider } from "./context/AppContext.jsx";
import './i18n';
import TotalBalance from "./components/TotalBalance/TotalBalance.jsx";
import ExpenseToday from "./components/ExpenseToday/ExpenseToday.jsx";
import Variation from "./components/Variation/Variation.jsx";
import Graph from "./components/Graph/Graph.jsx";
import LanguageSelector from "./components/LanguageSelector/LanguageSelector.jsx";

const App = () => {
  return (
    <AppProvider>
      <div className="min-h-screen flex flex-col items-center justify-center">
        <LanguageSelector />
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
