import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {removeTodo} from '../features/todo/todoSlice'


const Todos = () => {
   
    const todos = useSelector(state => state.todos)
    const disptatch = useDispatch()

  return (
    <div>Todos</div>
    {todos.map((todo)=> (
        <li key={todo.id}>{todo.text}      <button onClick={()=> disptatch(removeTodo(todo.id))}>X</button></li>
   
    ))}
  )
}

export default Todos