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

const ClosureRateChart = ({ weeklyData }) => {
  const chartRef = useRef(null);
  let chartInstance = null;

  useEffect(() => {
    if (chartRef.current && weeklyData.length > 0) {
      if (chartInstance) {
        chartInstance.destroy();
      }

      const ctx = chartRef.current.getContext("2d");

      chartInstance = new ChartJS(ctx, {
        type: "bar",
        data: {
          labels: weeklyData.map((week) => week.label),
          datasets: [
            {
              label: "Weekly Closure Rate (%)",
              data: weeklyData.map((week) => week.closureRate),
              backgroundColor: "#6f42c1",
            },
          ],
        },
        options: {
          responsive: true,
          scales: {
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: "Closure Rate (%)",
              },
              suggestedMax: 100,
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

  return <canvas ref={chartRef}></canvas>;
};

export default ClosureRateChart;
