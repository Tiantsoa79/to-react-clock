import './App.css';
import { useState } from 'react';
import React from 'react';
import { Clock } from './clock';
import { Timer } from './myTimer';
import { Button } from './Button';


function App() {
  let [position, setPosition] = useState(0);
  return (
<>
{position === 0 ? <Clock /> : <Timer setState={setPosition} state={position} />}
<Button state={position} setState={setPosition} />
</>
  );
}
export default App;
