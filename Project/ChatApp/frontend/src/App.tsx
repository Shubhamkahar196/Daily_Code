// import { useEffect, useRef, useState } from 'react'
// import './App.css'

// function App() {
//  // State to store chat messages with initial "Hello from server!" message 
//  const [messages, setMessages] = useState(["Hello from server!"])
 
//  // Refs to store WebSocket connection and input element
//  const wsRef = useRef(); // WebSocket connection reference
//  const inputRef = useRef(); // Input field reference

//  useEffect(() => {
//    // Create new WebSocket connection to local server
//    const ws = new WebSocket("ws://localhost:8080");
   
//    // Handle incoming messages from server
//    ws.onmessage = (event) => {
//      setMessages(m => [...m, event.data]) // Add new message to messages array
//    }

//    // Store WebSocket connection in ref for later use
//    //@ts-ignore
//    wsRef.current = ws;

//    // When connection opens, send join room message
//    ws.onopen = () => {
//      ws.send(JSON.stringify({
//        type:"join",
//        payload:{
//          roomId: "red" // Join room with ID "red"
//        }
//      }))
//    }

//    // Cleanup: close WebSocket when component unmounts
//    return () => {
//      ws.close()
//    }
//  }, []) // Empty dependency array means this runs once on mount

//  return (
//    // Main chat interface UI
//    <div className='h-screen bg-black'>
//      <br /><br /><br />
//      <div className='h-[85vh]'>
//        {/* Display all messages */}
//        {messages.map(message => <div className='m-8'> 
//          <span className='bg-white text-black rounded p-4 '>            
//            {message} 
//          </span>
//        </div>)}
//      </div>
//      {/* Message input and send button */}
//      <div className='w-full bg-white flex'>
//        <input ref={inputRef} id="message" className="flex-1 p-4"></input>
//        <button onClick={() => {
//          // @ts-ignore
//          const message = inputRef.current?.value;
//          // Send chat message through WebSocket
//          // @ts-ignore
//          wsRef.current.send(JSON.stringify({
//            type: "chat",
//            payload: {
//              message: message
//            }
//          }))

//        }} className='bg-purple-600 text-white p-4'>
//          Send message
//        </button>
//      </div>
//    </div>
//  )
// }

// export default App






import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [messages, setMessages] = useState(["hi there", "hello"]);
  const wsRef = useRef();
  const inputRef = useRef();

  useEffect(() => {
    const ws = new WebSocket("http://localhost:8080");
    ws.onmessage = (event) => {
      setMessages(m => [...m, event.data])
    }
    wsRef.current = ws;

    ws.onopen = () => {
      ws.send(JSON.stringify({
        type: "join",
        payload: {
          roomId: "red"
        }
      }))
    }
    return () => {
      ws.close()
    }
  }, []);

  return (
    <div className='h-screen bg-black'>
      <br /><br /><br />
      <div className='h-[85vh]'>
        {messages.map(message => <div className='m-8'> 
          <span className='bg-white text-black rounded p-4 '>            
            {message} 
          </span>
        </div>)}
      </div>
      <div className='w-full bg-white flex'>
        <input ref={inputRef} id="message" className="flex-1 p-4"></input>
        <button onClick={() => {
          const message = inputRef.current?.value;
          wsRef.current.send(JSON.stringify({
            type: "chat",
            payload: {
              message: message
            }
          }))

        }} className='bg-purple-600 text-white p-4'>
          Send message
        </button>
      </div>
    </div>
  )
}

export default App