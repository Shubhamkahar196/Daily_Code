import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <button>Home</button>
        <button>My network</button>
        <button>Jobs</button>
        <button>Messaging</button>
        <button>Notification</button>
    </>
  )
}

export default App
