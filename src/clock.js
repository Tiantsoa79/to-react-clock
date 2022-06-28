import React from "react";
import './App.css';
import {  useEffect, useState } from 'react';
import "./Clock.css";

export function Clock() {
    const [date, setDate] = useState(new Date());
    let timer;
  
    useEffect(() => {
      timer = setInterval(()=>{
        setDate(new Date())
      });
  
    return ()=> {
      clearInterval(timer);
    };
  })
  
  
    return(
      <div className='clock'>
      <p className='clocker'>
        <span>{date.getHours().toString().padStart(2, 0)}</span>:
        <span>{date.getMinutes().toString().padStart(2, 0)}</span>:
        <span>{date.getSeconds().toString().padStart(2, 0)}</span>
      </p>
      </div>
    )
  }
  
  
  /*
  class Montre extends React.Component {
    
  constructor(props){
    super(props)
    this.state = {date: new Date()}
    this.timer = null;
  }
  
  componentDidMount () {
    this.timer = window.setInterval(this.tick.bind(this), 1000)
  }
  
  componentWillUnmount () {
  window.clearInterval(this.timer)
  }
  
  tick () {
    this.setState({date: new Date})
  }
  
  render () {
    return <div  className="clockStyle">
     <p >{this.state.date.toLocaleTimeString()} </p>
    </div>
  }
  }
  */