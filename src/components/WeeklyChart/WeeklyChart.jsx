import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useAppContext } from "../../context/AppContext";
import { useTranslation } from "react-i18next";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

const WeeklyChart = () => {
  const { t } = useTranslation();
  const { expensesData, currentDay } = useAppContext();

  const labels = expensesData.map((expense) =>
    t(`days.${expense.day.toLowerCase()}`)
  );
  const data = expensesData.map((expense) => expense.amount);

  const currentDayIndex = expensesData.findIndex(
    (expense) => expense.day === currentDay
  );

  const backgroundColors = expensesData.map((_, index) =>
    index === currentDayIndex
      ? "rgba(255, 99, 132, 0.5)"
      : "rgba(0, 123, 255, 0.5)"
  );

  const chartData = {
    labels,
    datasets: [
      {
        label: t("weeklyExpenses"),
        data,
        backgroundColor: backgroundColors,
        borderColor: "#007bff",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.label}: ${tooltipItem.raw} €`;
          },
        },
      },
    },
    scales: {
      x: {
        title: {
          display: false,
        },
      },
      y: {
        title: {
          display: false,
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="p-4 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold">{t("chartTitle")}</h2>
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default WeeklyChart;
