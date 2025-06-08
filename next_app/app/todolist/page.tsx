'use client'
import React, { useEffect, useState } from 'react'

export default function page() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/api/todos')
      .then(res => res.json())
      .then(data => setTodos(data.data))
  }, [])

  const handleSubmit = (e: any) => {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)
    const todo = formData.get('todo')
    fetch('http://localhost:3000/api/todos', {
      method: 'POST',
      body: JSON.stringify({ todo }),
    })
      .then(res => res.json())
      .then(data => setTodos(data.data))
    e.target.reset()
  }
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <form onSubmit={handleSubmit}>
        <input type="text" name="todo" className="border-2 border-gray-300 rounded-md p-2" />
        <button type="submit" className="bg-blue-500 text-white rounded-md p-2 ml-2">
          提交
        </button>
      </form>
      <ul>
        {todos?.map((todo: any) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  )
}
