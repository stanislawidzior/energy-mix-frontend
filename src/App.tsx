import './App.css'
import { useFetchEnergyMix } from './hook/useFetchEnergyMix';
import { ArcElement, Chart, Legend, PieController, Tooltip, type ChartConfiguration } from 'chart.js';
function App() {

  const {data,error, isFetching, isLoading} = useFetchEnergyMix();
  if(isLoading || isFetching) {
    return <div>Loading...</div>
  }
  if(error) {
    return <div>Error occurred: {(error as Error).message}</div>
  }
  console.log(data);
  const DATA_COUNT = Object.keys(data ?? {}).length;
  Chart.register(PieController, ArcElement, Tooltip, Legend);
  const CHART_COLORS = {
  red: 'rgb(255, 99, 132)',
  orange: 'rgb(255, 159, 64)',
  yellow: 'rgb(255, 205, 86)',
  green: 'rgb(75, 192, 192)',
  blue: 'rgb(54, 162, 235)',
  purple: 'rgb(153, 102, 255)',
  grey: 'rgb(201, 203, 207)'
  };
  const chartData = {
  labels: Object.keys(data?.today ?? {}),
  datasets: [
    {
      label: 'Today',
      data: Object.values(data?.today?.avgEnergyMix ?? {}),
      backgroundColor: Object.values(CHART_COLORS),
    }
  ]
  };
const config: ChartConfiguration<'pie'> = {
  type: 'pie',
  data: chartData,
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Pie Chart'
      }
    }
  },
};
new Chart(
  document.getElementById('myChart') as HTMLCanvasElement,
  config
);
  return (
    <>
      <canvas id="myChart"></canvas>
    </>
  )
}

export default App
