import React,{useState, useEffect} from 'react'
import style from "./Timer.module.css"
import { formatTime,calculateTime } from '../utils/auxiliaryFunction'
import { preview } from 'vite';

const Timer = () => {
 
    //states to manage time, initial time, running status and editing field with values
     
    const [time, setTime] = useState(0); // current time in seconds
    const [initialTime, setInitialTime] = useState(0); // time initially set by the user
    const [isRunning, setIsRunning] = useState(false) // track if the timer is running and paused
    const [editState, setEditState] = useState({field: null, value: ''});  // State for editing field and value

    //effect to update the progress bar as time counts down

    useEffect( () =>{
        const progress = initialTime > 0 ? (time/initialTime) * 100 : 0;
        document.documentElement.style.setProperty('--progress', `${progress}%`);
    },[time,initialTime]);

    //effect to handle timer countdown when it is running
    useEffect(() =>{
      let interval = null;
      if(isRunning && time > 0){
        interval = setInterval(() =>{
          setTime((prevTime)=> prevTime -1 ); // decrease time by 1 second
        },[1000]);
      }else if(time == 0){
        setIsRunning(false); // stop the timer when it reachers 0
      }
      return () => {
        if(interval) clearInterval(interval); // clear interval to prevent memory leaks
      }
    },[isRunning,time])

  return (
    <div>Timer</div>
  )
}

export default Timer