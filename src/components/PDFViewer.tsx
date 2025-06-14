'use client'

import { useState } from 'react'
import { pdfjs, Document, Page } from 'react-pdf'
import { redirect } from 'next/navigation'
import { RxCross2 } from 'react-icons/rx'
import useCurrentUser from '@/swr/user'
import dayjs from 'dayjs'

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url
).toString()

type Props = {
  pdfUrl: string
  setModalOpenFunc: (value: boolean) => void
}

const PDFViewer = ({ pdfUrl, setModalOpenFunc }: Props) => {
  // const [pageNumber, setPageNumber] = useState<number>(1)
  const { currentUser, isError, isLoading } = useCurrentUser()
  const [numPages, setNumPages] = useState<number>()
  const [scale, setScale] = useState('2')

  if (isLoading) return <p>loading...</p>
  if (!currentUser) redirect('/auth')

  const date1 = dayjs(dayjs().format('YYYY-MM-DD'))
  const dateDiff = date1.diff(currentUser.lastPaymentDate, 'day')
  console.log({ date1, dateDiff })

  if (!currentUser.paymentStatus) redirect('/pricing')
  if (dateDiff > 365) redirect('/pricing')

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages)
  }

  return (
    <>
      {/* bg cover */}
      <div className='fixed top-0 left-0 h-full w-full bg-black z-[9999]'></div>
      <section className='fixed top-2 w-full flex justify-center z-[9999]'>
        {/* pdf viewer */}
        <main className='m-4 p-4 max-w-[1400px] h-[calc(100vh_-_75px)] w-full bg-secondary_bg_color z-50'>
          <div className='flex flex-wrap justify-between items-center mb-3'>
            <p className='text-slate-400 text-sm'>
              {/* Page {pageNumber} of {numPages} */}
              {numPages} pages
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
                type='range'
                min='1'
                max='5'
                value={scale}
                className='w-full h-1 rounded-lg appearance-none cursor-pointer bg-gray-700'
              />
            </span>
            <button
              onClick={() => setModalOpenFunc(false)}
              className='flex justify-center items-center bg-black opacity-50 p-2 rounded-full hover:opacity-60 hover:font-bold
              '
            >
              <RxCross2 className='text-base text-slate-50' />
            </button>
          </div>

          <div className='overflow-auto h-full w-full'>
            <Document
              file={pdfUrl}
              onLoadSuccess={onDocumentLoadSuccess}
              // className={'rotate-180'}
              // className={`flex flex-col justify-center items-center gap-1`}
            >
              {/* eslint-disable-next-line prefer-spread */}
              {Array.apply(null, Array(numPages)).map((x, i) => (
                <Page
                  key={i}
                  renderTextLayer={false}
                  renderAnnotationLayer={false}
                  pageNumber={i + 1}
                  scale={parseInt(scale)}
                  className='mb-1'
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
