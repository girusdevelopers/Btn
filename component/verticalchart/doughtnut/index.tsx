"use client";
import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Blue", "Green"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19],
      backgroundColor: ["rgb(0, 0, 255)", "rgb(60, 179, 113)"],
      borderColor: ["rgba(54, 162, 235, 1)", "rgba(75, 192, 192, 1)"],
      borderWidth: 1,
    },
  ],
};

export function DoughnutComponent() {
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    width: 370,
    height: 350,
  };

  return <Doughnut data={data} options={chartOptions} />;
}
