import ClientButton from '@/app/components/ClientButton'
import { db } from '../../../db'
import React from 'react';
import ClientEditor from '@/app/components/ClientEditor';
import type { Snippet } from '@prisma/client'
export default async function Page({ params }: { params: { id: string } }) {

  const snippet: Snippet = await db.snippet.findUnique(
    {
      where: { id: parseInt(params.id) }
    }) as Snippet
  if (!snippet || isNaN(snippet?.id)) {
    return <div>Snippet not found</div>
  }
  return (
    <div>
      <ClientEditor snippet={snippet} />
    </div>
  )
}
