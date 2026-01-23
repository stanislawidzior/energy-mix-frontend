import './App.css'

function App() {
  async function fetchData() {
    const response = await fetch('http://localhost:8080/api/v1/energy-mix');
    const data = await response.json();
    console.log(data);
  }
  fetchData();
  return (
    <>
      <canvas id="myChart"></canvas>
    </>
  )
}

export default App
