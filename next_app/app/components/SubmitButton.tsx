'use client'
import { useFormStatus } from 'react-dom'
import React, { useActionState } from 'react'


export default function SubmitButton({ children }: { children: React.ReactNode }) {
  const { pending } = useFormStatus()
  return (
    <button type="submit" disabled={pending} className='bg-blue-500 text-white rounded-md p-2 ml-2'>
      {pending ? 'Loading...' : children}
    </button>
  )
}
