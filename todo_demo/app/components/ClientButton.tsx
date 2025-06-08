'use client'
import React, { startTransition, useState } from 'react'
import { deleteSnippet, updateSnippet } from '../actions'
export default function ClientButton({ children, id, action, data }:
  {
    children: React.ReactNode, id: number, action: 'delete' | 'edit', data?: { title: string, code: string }
  }) {
  const [isLoading, setIsLoading] = useState(false)
  const handleClick = async () => {
    try {
      setIsLoading(true)
      if (action === 'delete') {
        startTransition(async () => {
          //startTransition 这个回调函数，会在浏览器渲染线程空闲的时候执行，从而避免页面闪烁
          await deleteSnippet(id)
        })
      } else if (action === 'edit') {
        await updateSnippet(id, data || { title: 'test', code: 'test' })
      }
    } catch (error) {
      console.error(`Failed to ${action} snippet:`, error)
    } finally {
      setIsLoading(false)
    }
  }
  return (
    <button className={`${action === 'delete' ? 'bg-red-500' : 'bg-blue-500'} text-white p-2 rounded-md`} onClick={handleClick}>{isLoading ? 'Loading...' : children}</button>
  )
}
