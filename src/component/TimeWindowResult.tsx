import { useEffect } from "react";
import {useFetchTimeWindow} from "../hook/useFetchTimeWindow";

type props = {
    windowSize: number,
    setDisableButton: (disable: boolean) => void
}

function TimeWindowResult(props : props) {
    const {windowSize, setDisableButton} = props;  
    const { data, error, isLoading, isFetching, refetch } = useFetchTimeWindow(windowSize);
    
    useEffect(() => {
        refetch();
    }, [windowSize, refetch]);

    useEffect(() => {
        setDisableButton(isLoading || isFetching);
    }, [isLoading, isFetching, setDisableButton]);

    if (isLoading || isFetching) return <div>Loading...</div>;
    if (error) return <div>Error occurred: {(error as Error).message}</div>;
    if (!data) return <div>No data available</div>;
    
    return (
    <div className="time-window-result">
      <h2>Recommended Time Window</h2>
      {data && (
        <div className="result-content">
          <div className="result-item">
            <span className="label">Clean Energy Percentage:</span>
            <span className="value">{data.clean_energy_percentage}%</span>
          </div>
          <div className="result-dates">
            <div className="result-item">
              <span className="label">Start Date:</span>
              <span className="value">{data.from}</span>
            </div>
            <div className="result-item">
              <span className="label">End Date:</span>
              <span className="value">{data.to}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default TimeWindowResult;