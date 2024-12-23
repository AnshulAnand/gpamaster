'use client'

// Import React dependencies.
import { useState } from 'react'
// Import the Slate editor factory.
import { createEditor } from 'slate'
// Import the Slate components and React plugin.
import { Slate, Editable, withReact } from 'slate-react'

const initialValue = [
  {
    type: 'paragraph',
    children: [{ text: 'A line of text in a paragraph.' }],
  },
]

const Page = () => {
  const [editor] = useState(() => withReact(createEditor()))

  return (
    <section className='flex flex-col justify-center items-center bg-primary_bg_color px-4 pt-4 pb-32 mt-[64px] text-center text-slate-300 relative'>
      {/* Add the editable component inside the context. */}
      <Slate editor={editor} initialValue={initialValue}>
        <Editable />
      </Slate>
    </section>
  )
}
export default Page
