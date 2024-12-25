'use client'

import PDFViewer from '@/components/PDFViewer'
import Table from '@/components/Table'
import { useState } from 'react'

const Page = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const [pdfUrl, setPdfUrl] = useState('')

  const SetModalOpenFunc = (value: boolean) => {
    setModalOpen(value)
  }

  const SetPdfUrlFunc = (value: string) => {
    setPdfUrl(value)
  }

  const data = [
    ['lorem ispum', '19 Dec 2024', 'lorem'],
    ['lorem ispum', '19 Dec 2024', 'lorem'],
    ['lorem ispum', '19 Dec 2024', 'lorem'],
  ]

  return (
    <section className='flex flex-col justify-center items-center bg-primary_bg_color px-4 pt-4 pb-16 mt-[64px] text-center text-slate-300 relative'>
      <main className='max-w-7xl w-full mt-6'>
        <h1 className='text-slate-200 text-3xl font-bold text-left border-b border-b-slate-800 pb-2'>
          Mathematics
        </h1>
        <div className='py-4'>
          <h2 className='text-slate-200 text-xl font-bold text-left'>Notes</h2>
          <Table
            setPdfUrlFunc={SetPdfUrlFunc}
            setModalOpenFunc={SetModalOpenFunc}
            data={data}
          />
        </div>
        <div className='py-4'>
          <h2 className='text-slate-200 text-xl font-bold text-left'>Notes</h2>
          <Table
            setPdfUrlFunc={SetPdfUrlFunc}
            setModalOpenFunc={SetModalOpenFunc}
            data={data}
          />
        </div>
        <div className='py-4'>
          <h2 className='text-slate-200 text-xl font-bold text-left'>Notes</h2>
          <Table
            setPdfUrlFunc={SetPdfUrlFunc}
            setModalOpenFunc={SetModalOpenFunc}
            data={data}
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
