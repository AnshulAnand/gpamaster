'use client'

import PDFViewer from '@/components/PDFViewer'
import Table from '@/components/Table'
import du from '@/lib/subjects/du'
import { useParams } from 'next/navigation'
import { useState } from 'react'

const Page = () => {
  const { college } = useParams<{ college: string }>()

  const [course, setCourse] = useState('')
  const [semester, setSemester] = useState('')
  const [subject, setSubject] = useState('')
  const [modalOpen, setModalOpen] = useState(false)
  const [pdfUrl, setPdfUrl] = useState('')
  const [showNotes, setShowNotes] = useState(false)

  console.log({ course, subject })

  const handleCourseChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCourse(e.target.value)
    setSemester('')
    setSubject('')
    setShowNotes(false)

    console.log({ course, semester, subject })
  }

  const handleSemChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSemester(e.target.value)
    setSubject('')
    setShowNotes(false)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setShowNotes(true)

    console.log({ college, course, semester, subject })
  }

  const SetModalOpenFunc = (value: boolean) => {
    setModalOpen(value)
  }

  const SetPdfUrlFunc = (value: string) => {
    setPdfUrl(value)
  }

  return (
    <>
      <section className='flex flex-col justify-center items-center bg-primary_bg_color px-4 pt-12 pb-8 mt-[64px] text-center text-slate-300'>
        {/* Ad Banner */}
        <div className='relative max-w-5xl h-48 sm:h-80 md:h-[400px] w-full bg-green-200 mb-4'>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className='absolute w-full h-full object-cover'
            src='/images/banner.png'
            alt='banner'
          />
        </div>

        <h1 className='bg-gradient-to-r from-slate-200 via-slate-300 to-slate-500 inline-block text-transparent bg-clip-text text-3xl font-extrabold text-center mt-4'>
          <span className='bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 inline-block text-transparent bg-clip-text'>
            University of Delhi
          </span>
        </h1>
        <main className='max-w-7xl w-full mt-8'>
          <form onSubmit={handleSubmit} className='max-w-sm mx-auto'>
            {/* course drop down */}
            <label
              htmlFor='small'
              className='block mb-2 text-sm text-left font-medium text-white'
            >
              Select Course
            </label>
            <select
              value={course}
              onChange={handleCourseChange}
              className='block w-full p-2 mb-6 text-sm border rounded bg-secondary_bg_color border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500'
            >
              <option value=''>Select Course</option>
              {Object.keys(du).map(course => (
                <option key={course} value={course}>
                  {course}
                </option>
              ))}
            </select>

            {/* Semester drop down */}
            <label
              htmlFor='small'
              className='block mb-2 text-sm text-left font-medium text-white'
            >
              Select Semester
            </label>
            <select
              value={semester}
              onChange={handleSemChange}
              disabled={!course}
              className='block w-full p-2 mb-6 text-sm border rounded bg-secondary_bg_color border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500'
            >
              <option value=''>Select Semester</option>
              {course &&
                // @ts-ignore
                Object.keys(du[course]).map(sem => (
                  <option key={sem} value={sem}>
                    {sem}
                  </option>
                ))}
            </select>

            {/* subject drop down */}
            <label
              htmlFor='small'
              className='block mb-2 text-sm text-left font-medium text-white'
            >
              Select Subject
            </label>
            <select
              value={subject}
              onChange={e => setSubject(e.target.value)}
              disabled={!semester}
              className='block w-full p-2 mb-6 text-sm border rounded bg-secondary_bg_color border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500'
            >
              <option value=''>Select Subject</option>
              {course &&
                semester &&
                // @ts-ignore
                Object.keys(du[course][semester]).map((sub: string) => (
                  <option key={sub} value={sub}>
                    {sub}
                  </option>
                ))}
            </select>

            <button
              type='submit'
              disabled={!subject}
              className='text-white focus:ring-4 font-medium rounded text-sm px-5 py-2.5 me-2 mb-2 bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-blue-800'
            >
              Get resources
            </button>
          </form>
        </main>
      </section>

      {/* Displaying Resources */}

      {showNotes ? (
        <section
          className={`flex flex-col justify-center items-center bg-primary_bg_color px-4 pt-4 pb-16 text-center text-slate-300 relative`}
        >
          <main className='max-w-7xl w-full mt-6'>
            <h1 className='text-slate-200 text-3xl font-bold text-left border-b border-b-slate-800 pb-2'>
              {subject}
            </h1>
            {
              // @ts-ignore
              du[course][semester][subject]['hand-written'] ? (
                <div className='py-4'>
                  <h2 className='text-slate-200 text-xl font-bold text-left'>
                    Notes
                  </h2>
                  <Table
                    setPdfUrlFunc={SetPdfUrlFunc}
                    setModalOpenFunc={SetModalOpenFunc}
                    // @ts-ignore
                    data={du[course][semester][subject]['hand-written']}
                    isPDF={true}
                  />
                </div>
              ) : null
            }

            {
              // @ts-ignore
              du[course][semester][subject]['books'] ? (
                <div className='py-4'>
                  <h2 className='text-slate-200 text-xl font-bold text-left'>
                    Books
                  </h2>
                  <Table
                    setPdfUrlFunc={SetPdfUrlFunc}
                    setModalOpenFunc={SetModalOpenFunc}
                    // @ts-ignore
                    data={du[course][semester][subject]['books']}
                    isPDF={false}
                  />
                </div>
              ) : null
            }

            {
              // @ts-ignore
              du[course][semester][subject]['syllabus'] ? (
                <div className='py-4'>
                  <h2 className='text-slate-200 text-xl font-bold text-left'>
                    Syllabus
                  </h2>
                  <Table
                    setPdfUrlFunc={SetPdfUrlFunc}
                    setModalOpenFunc={SetModalOpenFunc}
                    // @ts-ignore
                    data={du[course][semester][subject]['syllabus']}
                    isPDF={true}
                  />
                </div>
              ) : null
            }

            {
              // @ts-ignore
              du[course][semester][subject].pyqs ? (
                <div className='py-4'>
                  <h2 className='text-slate-200 text-xl font-bold text-left'>
                    PYQs
                  </h2>
                  <Table
                    setPdfUrlFunc={SetPdfUrlFunc}
                    setModalOpenFunc={SetModalOpenFunc}
                    // @ts-ignore
                    data={du[course][semester][subject].pyqs}
                    isPDF={true}
                  />
                </div>
              ) : null
            }

            {
              // @ts-ignore
              du[course][semester][subject]['yt'] ? (
                <div className='py-4'>
                  <h2 className='text-slate-200 text-xl font-bold text-left'>
                    YouTube Playlists
                  </h2>
                  <Table
                    setPdfUrlFunc={SetPdfUrlFunc}
                    setModalOpenFunc={SetModalOpenFunc}
                    // @ts-ignore
                    data={du[course][semester][subject]['yt']}
                    isPDF={false}
                  />
                </div>
              ) : null
            }
          </main>

          {modalOpen && (
            <PDFViewer pdfUrl={pdfUrl} setModalOpenFunc={SetModalOpenFunc} />
          )}
        </section>
      ) : null}

      {/* Bottom note */}
      <section
        className={`flex flex-col justify-center items-center bg-primary_bg_color px-4 pt-4 pb-16 text-center text-slate-300 relative`}
      >
        <div className='w-full rounded p-4 bg-purple-500'>
          <p className='text-black text-sm'>
            Website is still under development phase. We are trying our best to
            improve it and enhance your experience.
          </p>
        </div>
      </section>
    </>
  )
}
export default Page
