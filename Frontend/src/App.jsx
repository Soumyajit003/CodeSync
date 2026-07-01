import './App.css'
import { Editor } from '@monaco-editor/react'
import { MonacoBinding } from 'y-monaco'
import { useEffect, useRef, useMemo } from 'react'
import * as Y from 'yjs'
import { SocketIOProvider } from 'y-socket.io'


function App() {

  const editorRef = useRef(null);

  const yDoc = useMemo(() => new Y.Doc(), []);
  const yText = useMemo(() => yDoc.getText("monaco"), [yDoc]);

  const handleMount = (editor) => {
    editorRef.current = editor;

    const provider = new SocketIOProvider("http://localhost:3000", "monaco", yDoc, {
      autoConnect: true
    });
    const monacoBinding = new MonacoBinding(
      yText,
      editorRef.current.getModel(),
      new Set([editorRef.current]),
      provider.awareness
    )

  }

  return (
    <main className='h-screen w-full bg-neutral-900 flex gap-4 p-4'>
      <aside className='h-full w-1/5 bg-neutral-700 rounded-lg'></aside>
      <section className='bg-neutral-800 w-4/5 rounded-lg overflow-hidden'>
        <Editor
          height='100%'
          defaultLanguage='javascript'
          defaultValue="// write code here"
          theme='vs-dark'
          onMount={handleMount}
        />
      </section>
    </main>
  )
}

export default App
