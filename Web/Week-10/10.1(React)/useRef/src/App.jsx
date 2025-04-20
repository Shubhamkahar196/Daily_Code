import { useRef, useState } from 'react'

import './App.css'

function LearnUseRef() {


      // ugly way 
      // function focusOnInput(){
      //   document.getElementById("name").focus()
      // }

      //better way
      // defining ref 
      
      const inputRef = useRef(); 
      // 3 way to give the value 
      // const valueRef = useRef();
      //let value = 1;
      // const [value, setvalue] = useState(1);
       
      // 3 approach is best way to give value

      
      function focusOnInput() {
            //     document.getElementById("name").focus()
            //access the dom node and call the focus method
            inputRef.current.focus();
      }


      return <div>
            Sign up
            <input ref={inputRef}  type="text" />
            <input type="text" />
            <button onClick={focusOnInput}>submit</button>
      </div>


}
// creata a clock with start and stop button

function App(){
      const [currentCount, setCurrentCount] =  useState(1);
      // const [timer, setTimer] = useState(0);
      const timer = useRef();
      //  let timer = 0
      function startClock(){
      //     timer = setInterval(function(){
      //             setCurrentCount(c => c+1);
      //       },1000);
        let value = setInterval(function (){
            setCurrentCount(c => c+1);
        },1000);
      //   setTimer(value);
      timer.current = value;
      }

      function stopClock(){
            console.log(timer);
            clearInterval(timer.current);
      }

      return <div>
            {currentCount}
            <br />
            <button onClick={startClock}>Start</button>
            <button onClick={stopClock}>Stop</button>
      </div>
}




export default App
