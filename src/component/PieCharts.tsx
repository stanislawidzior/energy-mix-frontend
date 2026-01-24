import { useFetchEnergyMix } from '../hook/useFetchEnergyMix';
import {Chart as ChartJS, ArcElement, PieController, Tooltip, Legend, Title, type ChartConfiguration,} from 'chart.js';
import { Chart } from 'react-chartjs-2';
import type { IDailySummary } from '../type/IEnergyMix';

ChartJS.register(PieController, ArcElement, Tooltip, Legend, Title);
const CHART_COLORS_MAP:Record<string,string> = {
    hydro: 'rgb(0, 255, 50)',
    wind: 'rgb(100, 200, 50)',
    solar: 'rgb(150, 255, 50)',
    nuclear: 'rgb(200, 255, 50)',
    biomass: 'rgb(255, 255, 50)',
    gas: 'rgb(255, 100, 50)',
    coal: 'rgb(255, 0, 50)', 
    other: 'rgb(150, 150, 150)'
}
  



function PieCharts() {
    console.count('PieCharts render');
  const { data, error, isLoading, isFetching } = useFetchEnergyMix();
  if (isLoading || isFetching) return <div>Loading...</div>;
  if (error) return <div>Error occurred: {(error as Error).message}</div>;
  if (!data) return <div>No data available</div>;

  function getChartData(day : IDailySummary) {
    let labels:string[] = [];
    let values:number[] = [];
    let backgroundColors:string[] = [];
    for(let fuel of Object.keys(CHART_COLORS_MAP)){
        if(!(fuel in day.avgEnergyMix)) continue;
        labels.push(fuel);
        values.push(day.avgEnergyMix[fuel]);
        backgroundColors.push(CHART_COLORS_MAP[fuel]);
    }
    return {

        labels,
        datasets: [{
            data: values,
            backgroundColor: backgroundColors,
        }]
    };
  };
  function getChartOptions(title: string, day: IDailySummary): ChartConfiguration<'pie'>['options'] {
    return {
    responsive: true,
    animation:false,
    plugins: {
        legend: { position: 'top' },
        title: { display: true, text: title + ": " + day.clean_energy_percentage + "% clean energy" },
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
