"use client"

import React from 'react'
import { addTodo } from '../actions'

export default function ClientButton({ children }: { children: React.ReactNode }) {
  return (
    <div className='bg-blue-500 text-white rounded-md p-2 ml-2' onClick={async () => {
      const formData = new FormData()
      formData.append('todo', '🐮')
      await addTodo(formData)
    }}>
      {children}
    </div>
  )
}
