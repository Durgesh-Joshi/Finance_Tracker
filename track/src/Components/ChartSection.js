// src/Components/ChartSection.js
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { Bar, Pie } from "react-chartjs-2";

// ✅ Register Chart.js modules
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

function ChartSection({ title, labels, values }) {
  const barData = {
    labels,
    datasets: [
      {
        label: `${title} (₹)`,
        data: values,
        backgroundColor: ["#4CAF50", "#FF9800", "#2196F3", "#9C27B0", "#F44336"],
      },
    ],
  };

  const pieData = {
    labels,
    datasets: [
      {
        label: `${title} Share`,
        data: values,
        backgroundColor: ["#4CAF50", "#FF9800", "#2196F3", "#9C27B0", "#F44336"],
      },
    ],
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1 className="text-2xl font-bold mb-6">📊 {title}</h1>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "30px" }}>
        {/* Bar Chart */}
        <div style={{ background: "#fff", padding: "20px", borderRadius: "12px" }}>
          <h2 className="text-lg font-semibold mb-4">Breakdown</h2>
          <Bar data={barData} />
        </div>

        {/* Pie Chart */}
        <div style={{ background: "#fff", padding: "20px", borderRadius: "12px" }}>
          <h2 className="text-lg font-semibold mb-4">Share</h2>
          <Pie data={pieData} />
        </div>
      </div>
    </div>
  );
}

export default ChartSection;
