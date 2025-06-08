'use client'
import React, { useActionState } from 'react'
import { addTodo } from '../actions'
import SubmitButton from './SubmitButton'
import ClientButton from './ClientButton'


const initialState = {
  message: 'Loading...'
}
export default function SubmitForm() {
  const [state, formAction] = useActionState(addTodo, initialState)
  return (
    <div className='flex flex-row items-center justify-center'>
      <form action={formAction}>
        <input type="text" name="todo" required className='border-2 border-gray-300 rounded-md p-2' />
        <SubmitButton>提交</SubmitButton>
      </form>
      <ClientButton>牛</ClientButton>
      <p>{state.message}</p>
    </div>
  )
}