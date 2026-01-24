import { useState } from "react";
type props = {
    setWindowSize: (size: number) => void,
    windowSize: number,
    disableButton: boolean
}
function TimeWindowSelector(windowSizeProps: props) {
  const {setWindowSize, windowSize, disableButton } = windowSizeProps;
  const [selectedSize, setSelectedSize] = useState<number>(windowSize)
  
  function handleCalculate(){
    setWindowSize(selectedSize);
  }
  
  return (
    <div className="time-window-selector">
      <h2>Select Charging Duration:</h2>
      <select 
        id="window-size" 
        value={selectedSize}
        onChange={(e) => setSelectedSize(Number(e.target.value))}
        disabled={disableButton}>
          <option value={1}>1 hour</option>
          <option value={2}>2 hours</option>
          <option value={3}>3 hours</option>
          <option value={4}>4 hours</option>
          <option value={5}>5 hours</option>
          <option value={6}>6 hours</option>
        </select>
      <button className="calculate-btn" onClick={handleCalculate} disabled={disableButton}>
        Calculate
      </button>
    </div>
  );
}
export default TimeWindowSelector;