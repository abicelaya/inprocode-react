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
    index === currentDayIndex ? "#a9cce3" : "#ff8a65"
  );

  const chartData = {
    labels,
    datasets: [
      {
        label: t("weeklyExpenses"),
        data,
        backgroundColor: backgroundColors,
        borderColor: "transparent",
        borderWidth: 0,
        borderRadius: 6,
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
        grid: {
          display: false,
        },
        ticks: {
          color: "#6b7280",
          font: {
            family: "Montserrat, sans-serif",
          },
        },
      },
      y: {
        title: {
          display: false,
        },
        beginAtZero: true,
        grid: {
          display: false,
        },
        ticks: {
          color: "#6b7280",
          font: {
            family: "Montserrat, sans-serif",
          },
        },
      },
    },
  };

  return (
    <div className="p-6 rounded-2xl shadow-none bg-white">
      <h2
        className="text-2xl font-semibold mb-4"
        style={{ fontFamily: "Montserrat, sans-serif" }}
      >
        {t("chartTitle")}
      </h2>
      <div className="p-4">
        <Bar data={chartData} options={options} />
      </div>
    </div>
  );
};

export default WeeklyChart;
