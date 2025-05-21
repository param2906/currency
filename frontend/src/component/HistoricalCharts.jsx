import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
  Title,
} from "chart.js";

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
  Title
);

const HistoricalChart = ({ data, coin }) => {
  const prices = data.prices.map((p) => p[1]);
  const labels = data.prices.map((p) => new Date(p[0]).toLocaleDateString());

  const chartData = {
    labels,
    datasets: [
      {
        label: `${coin} (last 7 days)`,
        data: prices,
        borderColor: "red",
      },
    ],
  };

  return <Line data={chartData} />;
};

export default HistoricalChart;
