import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [showBtn, setShowBtn] = useState(false)
  const [todos, setTodos] = useState([
    {
      title: "Hey",
      desc : "I am learning react"
    },

    {
      title: "Hey another todo",
      desc: "pushing code on github"
    },

    {
      title: "Hey learner",
      desc: "contributing in open-source"
    }

  ])
 

  const Todo = ({todo}) =>{
    return (<>
    <div className="m-4 border-1"></div>
    <div className='todo'>{todo.title} </div>
  
    <div className='todo'>{todo.desc} </div>
    </>)
  }
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      {/* conditional rendering */}

     {showBtn?<button>I will be shown only when second button is clicked</button>: "thenga" }
      
      {/* {showBtn && <button>I will be shown only when second button is clicked</button>} */}

    {/* list rendering */}
      
      {todos.map(todo=>{
        return <Todo todo={todo}/>
      })}
     
      <div className="card">
        <button onClick={() => setShowBtn(!showBtn)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
