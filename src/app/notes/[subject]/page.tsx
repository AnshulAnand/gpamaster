'use client'

import PDFViewer from '@/components/PDFViewer'
import Table from '@/components/Table'
import { useState } from 'react'
import { useParams } from 'next/navigation'
import data from '@/lib/subjects/data'

const Page = () => {
  const { subject } = useParams<{ subject: string }>()
  const [modalOpen, setModalOpen] = useState(false)
  const [pdfUrl, setPdfUrl] = useState('')

  const SetModalOpenFunc = (value: boolean) => {
    setModalOpen(value)
  }

  const SetPdfUrlFunc = (value: string) => {
    setPdfUrl(value)
  }

  // @ts-ignore
  const subjData = data[subject]
  console.log({ subjData })

  return (
    <section className='flex flex-col justify-center items-center bg-primary_bg_color px-4 pt-4 pb-16 mt-[64px] text-center text-slate-300 relative'>
      <main className='max-w-7xl w-full mt-6'>
        <h1 className='text-slate-200 text-3xl font-bold text-left border-b border-b-slate-800 pb-2'>
          {subject}
        </h1>
        <div className='py-4'>
          <h2 className='text-slate-200 text-xl font-bold text-left'>
            Hand-written
          </h2>
          <Table
            setPdfUrlFunc={SetPdfUrlFunc}
            setModalOpenFunc={SetModalOpenFunc}
            data={subjData['hand-written']}
            isPDF={true}
          />
        </div>
        <div className='py-4'>
          <h2 className='text-slate-200 text-xl font-bold text-left'>Books</h2>
          <Table
            setPdfUrlFunc={SetPdfUrlFunc}
            setModalOpenFunc={SetModalOpenFunc}
            data={subjData['books']}
            isPDF={true}
          />
        </div>
        <div className='py-4'>
          <h2 className='text-slate-200 text-xl font-bold text-left'>
            Syllabus
          </h2>
          <Table
            setPdfUrlFunc={SetPdfUrlFunc}
            setModalOpenFunc={SetModalOpenFunc}
            data={subjData['syllabus']}
            isPDF={true}
          />
        </div>
        <div className='py-4'>
          <h2 className='text-slate-200 text-xl font-bold text-left'>PYQs</h2>
          <Table
            setPdfUrlFunc={SetPdfUrlFunc}
            setModalOpenFunc={SetModalOpenFunc}
            data={subjData.pyqs}
            isPDF={true}
          />
        </div>
        <div className='py-4'>
          <h2 className='text-slate-200 text-xl font-bold text-left'>
            YouTube Playlists
          </h2>
          <Table
            setPdfUrlFunc={SetPdfUrlFunc}
            setModalOpenFunc={SetModalOpenFunc}
            data={subjData.yt}
            isPDF={false}
          />
        </div>
      </main>

      {modalOpen && (
        <PDFViewer pdfUrl={pdfUrl} setModalOpenFunc={SetModalOpenFunc} />
      )}
    </section>
  )
}
export default Page
