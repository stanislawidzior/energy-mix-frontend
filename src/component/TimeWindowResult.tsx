import { useEffect } from "react";
import {useFetchTimeWindow} from "../hook/useFetchTimeWindow";

type props = {
    windowSize: number,
    setDisableButton: (disable: boolean) => void
}
function formatDateString(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleString(["en-US"],{
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
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

    if (isLoading || isFetching) return <div className="time-window-result"><div>Loading...</div></div>;
    if (error) return <div className="time-window-result"><div>Error occurred: {(error as Error).message}</div></div>;
    if (!data) return <div className="time-window-result"><div>No data available</div></div>;
    
    return (
    <div className="time-window-result">
      <h2>Optimal Clean Energy Time Window</h2>
      {data && (
        <div className="result-content">
          <div className="result-dates">
            <div className="result-item">
              <p className="label">Start Date:</p>
              <p className="value">{formatDateString(data.from)}</p>
            </div>
            <div className="result-item">
              <p className="label">End Date:</p>
              <p className="value">{formatDateString(data.to)}</p>
            </div>
            </div>
            <div className="result-item">
            <p className="label">Clean Energy Percentage:</p>
            <p className="value">{data.clean_energy_percentage}%</p>
          </div>
        </div>
      )}
    </div>
  );
}
export default TimeWindowResult;