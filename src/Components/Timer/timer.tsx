import React, { useState } from 'react';
import TimerButton from '..//Button/button';
import TimerImg from '../../image/timer.png';
import './timer.css'

const Timer = () => {
  const [counter, setCounter] = useState<number>(0)
  const [min, setMin] = useState<number>(0)
  return (
    <div className='timer-container'>
      <div>
        <img className="img-fluid" src={TimerImg} alt='timer' />
      </div>

      <div className='timer'>
        <span className='min'> {min} </span>: <span className='sec'> {counter}</span>
      </div>
      <br/>
      <div className='line'></div>
  
      <TimerButton
        counter={counter}
        setCounter={setCounter}
        min={min}
        setMin={setMin}
      />
      {/* <span className='line'></span> */}
    </div>

  );
}

export default Timer;