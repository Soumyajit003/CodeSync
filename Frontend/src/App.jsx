import './App.css'
import { Editor } from '@monaco-editor/react'

function App() {

  return (
    <main className='h-screen w-full bg-neutral-900 flex gap-4 p-4'>
      <aside className='h-full w-1/5 bg-neutral-700 rounded-lg'></aside>
      <section className='bg-neutral-800 w-4/5 rounded-lg overflow-hidden'>
        <Editor
          height='100%'
          defaultLanguage='javascript'
          defaultValue="// some comment"
          theme='vs-dark'
        />
      </section>
    </main>
  )
}

export default App
