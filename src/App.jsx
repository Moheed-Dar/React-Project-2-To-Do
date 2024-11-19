import './App.css'
import AddTodo from './components/AddTodo.jsx'
import Todos from './components/Todos.jsx'
import { useState } from 'react'
function App() {
  return (
   <>
    <h1 className="toh1">TO-DO-APP</h1>
      <AddTodo />
      <Todos />
   </>
  )
}

export default App
