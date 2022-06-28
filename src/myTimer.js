import React from "react";
import './App.css';
import {  useEffect, useState } from 'react';
import "./Clock.css";


function padStartDigit(digit) {
    return digit.toString().padStart(2, "0");
}

export function Timer({ state, setState }) {
    const [time, setTime] = useState([0, 0, 0]);

    const changes = (position, value, max) => {
        value = value.target.value;
        value = isNaN(value) ? "" :
            value > max ? time[position] :
                value;

        let timeSlice = time.slice();
        timeSlice[position] = value;
        setTime(timeSlice);
    }

    const countTimer = () => {
        let timeSlice = time.slice();
        if (!(time[0] === 0 && time[1] === 0 && time[2] === 0)) {
            timeSlice[2]--;
        } else {
            setState(1);
            alert("finished");
        }

        setTime(timeSlice);
    }

    const design = (state === 1 ?
        <div className="clock">
            <input type="text" value={time[0]} onChange={e => changes(0, e, 23)} />
            <input type="text" value={time[1]} onChange={e => changes(1, e, 59)} />
            <input type="text" value={time[2]} onChange={e => changes(2, e, 59)} />
        </div> : <TimerView time={time} setTimer={countTimer} />
    );
    return design;
}

  

function TimerView({ time, setTimer }) {
    let idInterval = null;
    useEffect(() => {
        idInterval = setInterval(() => {
            setTimer();
        }, 1000)
        return () => clearInterval(idInterval);
    });
    return (
        <div className="clock">
            <span>{padStartDigit(time[0])}: </span>
            <span>{padStartDigit(time[1])}: </span>
            <span>{padStartDigit(time[2])}</span>
        </div>
    );
}
  
