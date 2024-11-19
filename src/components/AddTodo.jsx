
import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {addTodo} from '../features/todo/todoSlice' 

function AddTodo() {

    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }

  return (
    <form onSubmit={addTodoHandler} className="space-x-3 mt-10">
      <input
        type="text"
        id="input1"
        className="bg-yellow-600 placeholder:text-cyan-50 rounded border border-gray-700 focus:border-green-500 focus:ring-1 focus:ring-white-900 text-base outline-none hover:bg-pink-800 cursor-pointer text-white py-1 px-14 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Please enter your text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        id="button1"
        className="text-white  font-mono bg-indigo-500 border-l-white-2  py-2 px-6 focus:outline-1 hover:bg-green-600  hover:text-yellow-100 rounded text-lg"
      >
        Add Todo
      </button>
    </form>
  )
}

export default AddTodo