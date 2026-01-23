
import './App.css'
import { useFetchEnergyMix } from './hook/useFetchEnergyMix';
import { Chart } from 'react-chartjs-2';
import { Chart as ChartJS, LineController, LineElement, PointElement, LinearScale, Title } from 'chart.js';
 
function App() {

  const {data,error, isFetching, isLoading} = useFetchEnergyMix();
  if(isLoading || isFetching) {
    return <div>Loading...</div>
  }
  if(error) {
    return <div>Error occurred: {(error as Error).message}</div>
  }
 ChartJS.register(LineController, LineElement, PointElement, LinearScale, Title);

  return (
    <>
    <Chart type='line' data={chartData} />
    </>
  )
}

export default App
