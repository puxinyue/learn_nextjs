import React from 'react'
import { db } from '../../db'
import { sleep } from '@/app/utils'

export default async function Page({ params }: { params: { id: string } }) {
  await sleep(1000)
  const snippet = await db.snippet.findUnique({
    where: { id: parseInt(params.id) },
  })
  if (!snippet) {
    return <div>Snippet not found</div>
  }
  return (
    <div>
      <h1 className='text-2xl font-bold'>{snippet?.title}</h1>
      <pre className='bg-gray-100 p-4 rounded-md'>
        <code>{snippet?.code}</code>
      </pre>
    </div>
  )
}

export async function generateStaticParams() {
  const snippets = await db.snippet.findMany()
  return snippets.map((snippet) => ({ id: snippet.id.toString() }))
}
