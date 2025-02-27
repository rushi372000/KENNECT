import { useEffect, useRef } from "react";
import { Chart as ChartJS, DoughnutController, ArcElement } from "chart.js";

ChartJS.register(DoughnutController, ArcElement);

const StatusChart = ({ stats }) => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    if (chartRef.current && stats) {
      // Destroy the existing chart instance if it exists
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }

      // Create a new chart instance
      const ctx = chartRef.current.getContext("2d");
      chartInstanceRef.current = new ChartJS(ctx, {
        type: "doughnut",
        data: {
          labels: ["Open", "Closed"],
          datasets: [
            {
              data: [stats.open, stats.closed],
              backgroundColor: ["#0366d6", "#2cbe4e"],
            },
          ],
        },
      });
    }

    // Cleanup function to destroy the chart on unmount
    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, [stats]);

  return <canvas ref={chartRef}></canvas>;
};

export default StatusChart;
