import { useEffect, useState,useRef } from 'react'



import './App.css'
// import { WebSocket } from 'ws';

function App() {
  const [socket, setSocket] = useState();
  const inputRef = useRef();

  function sendMessage(){
    if(!socket){
      return;
    }

    const message = inputRef.current.value;

    //@ts-ignore
   socket.send(message);
  }

  useEffect(()=>{
    const ws = new WebSocket("ws://localhost:8080");
     
   
    setSocket(ws)
    //  receiveing message
  ws.onmessage = (e)=>{
    alert(e.data);
  }
   
  // return () => {
  //     ws.close();
  //   };

  },[]);

  return (
      <div>
        <input ref={inputRef} type="text" placeholder='message...' />
        <button onClick={sendMessage}>Send</button>
      </div>
  ) 
}

export default App
