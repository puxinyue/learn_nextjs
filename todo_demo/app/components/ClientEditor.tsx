'use client'
import React, { useRef } from 'react';

import Editor from '@monaco-editor/react';
import ClientButton from './ClientButton';
import type { Snippet } from '@prisma/client'

export default function ClientEditor({ snippet }: {
  snippet: Snippet
}) {
  const [value, setValue] = React.useState('');
  const editorRef = useRef<any>(null);
  function handleEditorDidMount(editor: any, monaco: any) {
    editorRef.current = editor;
  }
  function handleChange(newValue: any, e: any) {
    setValue(newValue)
  }
  return (
    <>
      <Editor
        height="50vh"
        theme="vs-dark"
        defaultLanguage="javascript"
        defaultValue={snippet?.code || "// some comment"}
        onMount={handleEditorDidMount}
        onChange={handleChange}
      />
      <ClientButton
        action='edit'
        id={snippet.id}
        data={{
          title: snippet?.title,
          code: value || editorRef.current?.getValue()
        }}
      >
        Save
      </ClientButton>
    </>
  )
}
