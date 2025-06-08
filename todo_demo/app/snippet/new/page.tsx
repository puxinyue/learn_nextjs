
import React from 'react'
import { createTestSnippet } from '../../db'
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'
export default function Page() {
  const createSnippet = async (formData: FormData) => {
    'use server'
    const title = formData.get('title') as string
    const code = formData.get('code') as string
    await createTestSnippet(title, code)
    revalidatePath("/")
    redirect('/')
  }
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <form className='flex flex-col gap-4' action={createSnippet}>
        <div className='flex flex-col gap-2'>
          <label htmlFor="title">Title:</label>
          <input required type="text" name="title" className='border h-[46px] w-[400px]' />
        </div>
        <div className='flex flex-col gap-2'>
          <label htmlFor="code">Code:</label>
          <textarea required name="code" className='border h-[58px] w-[400px]'></textarea>
        </div>
        <button type="submit" className='bg-blue-500 text-white p-2 rounded-md'>Create</button>
      </form>
    </div>
  )
}
