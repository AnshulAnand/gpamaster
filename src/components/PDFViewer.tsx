'use client'

import { useState } from 'react'
import { pdfjs, Document, Page } from 'react-pdf'
import { RxCross2 } from 'react-icons/rx'

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url
).toString()

const PDFViewer = () => {
  const [numPages, setNumPages] = useState<number>()
  const [pageNumber, setPageNumber] = useState<number>(1)
  const [scale, setScale] = useState('2')
  const [modalOpen, setModalOpen] = useState(true)

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages)
  }

  return (
    <>
      {/* bg cover */}
      <div className='absolute top-0 left-0 h-full w-full bg-black opacity-60'></div>
      <section className='absolute top-0 w-full flex justify-center'>
        {/* pdf viewer */}
        <main className='m-4 p-4 max-w-[1400px] h-[1000px] w-full bg-secondary_bg_color z-50'>
          <div className='flex flex-wrap justify-between items-center mb-3'>
            <p className='text-slate-400 text-sm'>
              Page {pageNumber} of {numPages}
            </p>
            <span className='flex justify-center items-center gap-2'>
              <label
                htmlFor='minmax-range'
                className='block text-sm font-medium text-white'
              >
                Scale:
              </label>
              <input
                onChange={e => setScale(e.target.value)}
                id='minmax-range'
                type='range'
                min='1'
                max='5'
                value={scale}
                className='w-full h-1 rounded-lg appearance-none cursor-pointer bg-gray-700'
              />
            </span>
            <button
              onClick={() => setModalOpen(false)}
              className='flex justify-center items-center bg-black opacity-50 p-2 rounded-full hover:opacity-60 hover:font-bold
              '
            >
              <RxCross2 className='text-base text-slate-50' />
            </button>
          </div>

          <div className='overflow-auto h-full w-full'>
            <Document
              file='/sample-pdf.pdf'
              onLoadSuccess={onDocumentLoadSuccess}
              className={`flex flex-col justify-center items-center gap-1`}
            >
              {Array.apply(null, Array(numPages)).map((x, i) => (
                <Page
                  key={i}
                  renderTextLayer={false}
                  renderAnnotationLayer={false}
                  pageNumber={pageNumber}
                  scale={parseInt(scale)}
                />
              ))}
            </Document>
          </div>
        </main>
      </section>
    </>
  )
}
export default PDFViewer
