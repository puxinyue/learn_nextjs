import React from 'react'
import { getTodos } from '../actions'
import SubmitForm from '../components/SubmitForm'


export default async function page() {
  const todos = await getTodos()

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <SubmitForm />
      <ul>
        {todos.data?.map((todo: any) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  )
}
