import { useEffect, useRef } from "react";
import {
  Chart as ChartJS,
  LineController,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  LineController,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  Filler
);

const NewVsClosedChart = ({ weeklyData }) => {
  const chartRef = useRef(null);
  let chartInstance = null;

  useEffect(() => {
    if (chartRef.current && weeklyData.length > 0) {
      if (chartInstance) {
        chartInstance.destroy();
      }

      const ctx = chartRef.current.getContext("2d");
      const ratios = weeklyData.map((week) =>
        week.newIssues === 0 ? 0 : week.closedIssues / week.newIssues
      );

      chartInstance = new ChartJS(ctx, {
        type: "line",
        data: {
          labels: weeklyData.map((week) => week.label),
          datasets: [
            {
              label: "Closed/New Ratio",
              data: ratios,
              borderColor: "#f66a0a",
              backgroundColor: "rgba(246, 106, 10, 0.1)",
              tension: 0.1,
              fill: true,
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
                text: "Ratio (Closed/New)",
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

  return <canvas ref={chartRef}></canvas>;
};

export default NewVsClosedChart;
