import { useFetchEnergyMix } from '../hook/useFetchEnergyMix';
import {Chart as ChartJS, ArcElement, PieController, Tooltip, Legend, Title, type ChartConfiguration,} from 'chart.js';
import { Chart } from 'react-chartjs-2';
import type { IDailySummary } from '../type/IEnergyMix';

ChartJS.register(PieController, ArcElement, Tooltip, Legend, Title);
const CHART_COLORS = [
  'rgb(255, 99, 132)',
  'rgb(255, 159, 64)',
  'rgb(255, 205, 86)',
  'rgb(75, 192, 192)',
  'rgb(54, 162, 235)',
  'rgb(153, 102, 255)',
  'rgb(201, 203, 207)',
];

function PieCharts() {
  const { data, error, isLoading, isFetching } = useFetchEnergyMix();
  if (isLoading || isFetching) return <div>Loading...</div>;
  if (error) return <div>Error occurred: {(error as Error).message}</div>;
  if (!data) return <div>No data available</div>;

  function getChartData(day : IDailySummary) {
    let labels = Object.keys(day.avgEnergyMix);
    let values = Object.values(day.avgEnergyMix);
    let colors = CHART_COLORS.slice(0, labels.length);  
    return {
      labels,
      datasets: [
        {
          label: "avarage percentage value",
          data: values,
          backgroundColor: colors,
        },
      ],
    };
  };
  function getChartOptions(title: string, day: IDailySummary): ChartConfiguration<'pie'>['options'] {
  
  return {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: title + ": " + day.clean_energy_percentage + "% clean" },
    },
  };
  }

  return (
    <div className="chart-wrapper">
      <h1>UK Energy Mix 3 day summary</h1>
    <div className="chart-container">
      
      <div className="chart">
        <Chart type="pie" data={getChartData(data.today)} options={getChartOptions("Today", data.today)} />
      </div>
      <div className="chart">
        <Chart type="pie" data={getChartData(data.tomorrow)} options={getChartOptions("Tomorrow", data.tomorrow)} />
      </div>
      <div className="chart">
        <Chart type="pie" data={getChartData(data.day_after_tomorrow)} options={getChartOptions("In two days", data.day_after_tomorrow)} />
      </div>
    </div>
   </div>
  );
}

export default PieCharts;
