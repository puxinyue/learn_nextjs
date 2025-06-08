// export const dynamic = 'force-dynamic' // 强制动态加载
import Link from 'next/link'
import React from 'react'
import { db } from './db'
import ClientButton from './components/ClientButton'

export default async function Page() {
  const snippets = await db.snippet.findMany()
  return (
    <div>
      <Link href="/snippet/new" className='bg-blue-500 text-white p-2 rounded-md mt-4'>New Snippet</Link>
      <ul className='flex flex-col gap-2 mt-4'>
        {snippets.map((snippet) => (
          <li key={snippet.id} className='bg-gray-100 p-2 rounded-md'>
            <div className='flex justify-between items-center'>
              <Link href={`/snippet/${snippet.id}`} className='text-blue-500'>{snippet.title}</Link>
              <div className='flex gap-2'>
                <Link href={`/snippet/${snippet.id}/edit`} className='bg-blue-500 text-white p-2 rounded-md'>Edit</Link>
                <ClientButton id={snippet.id} action='delete'>Delete</ClientButton>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
