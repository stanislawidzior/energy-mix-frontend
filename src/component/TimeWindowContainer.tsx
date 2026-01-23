import React, { useState } from 'react';
import TimeWindowSelector from './TimeWindowSelector';
import TimeWindowResult from './TimeWindowResult';

function TimeWindowContainer(){

    const [windowSize, setWindowSize] = useState<number>(1);
    const [disableButton, setDisableButton] = useState<boolean>(false);

    return (
    <div className="time-window-container">
      <TimeWindowSelector setWindowSize={setWindowSize} windowSize={windowSize} disableButton={disableButton} />
      <TimeWindowResult windowSize={windowSize} setDisableButton={setDisableButton}/>
    </div>
  );
};
export default TimeWindowContainer;