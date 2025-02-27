import { useEffect, useRef } from "react";
import {
  Chart as ChartJS,
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

const WeeklyIssuesChart = ({ weeklyData }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartRef.current && weeklyData.length > 0) {
      if (chartInstance.current) {
        chartInstance.current.destroy(); // Destroy old instance
      }

      const ctx = chartRef.current.getContext("2d");
      chartInstance.current = new ChartJS(ctx, {
        type: "bar",
        data: {
          labels: weeklyData.map((week) => week.label),
          datasets: [
            {
              label: "New Issues",
              data: weeklyData.map((week) => week.newIssues),
              backgroundColor: "#0366d6",
            },
            {
              label: "Closed Issues",
              data: weeklyData.map((week) => week.closedIssues),
              backgroundColor: "#2cbe4e",
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: "Number of Issues",
              },
            },
            x: {
              title: {
                display: true,
                text: "Week",
              },
            },
          },
        },
      });
    }
  }, [weeklyData]);

  return (
    <canvas ref={chartRef} style={{ width: "100%", height: "400px" }}></canvas>
  );
};

export default WeeklyIssuesChart;