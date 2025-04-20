import React from 'react'

const App = () => {
  const todos = [{
    id:1,
    title: "Go to gym",
    done: false
  },{
    id: 2,
    title: "Eat food",
    done: true
  }]

  
  const todosComponent = todos.map(todo => (
    <Todo key={todo.id} title={todo.title} done={todo.done} />
  ))

  return (
    <div>
      {todosComponent}
    </div>
  )
}

function Todo({title,done}) {
  return <div>
    {title} - {done ? "Done!" : "Not Done!"}
  </div>
}
export default App
