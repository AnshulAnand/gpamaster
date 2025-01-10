import { subjectList } from '@/lib/subjects/subjectList'
import Link from 'next/link'

const Page = () => {
  return (
    <section className='flex flex-col justify-center items-center bg-primary_bg_color px-4 pt-12 pb-32 mt-[64px] text-center text-slate-300'>
      <span className='bg-gradient-to-r from-slate-500 via-slate-300 to-slate-500 mt-2 rounded-full px-4 py-1 shadow-[0px_50px_1000px_200px_rgba(59,_130,_246,_0.15)]'>
        <p className='text-black text-xs font-medium'>Study Material</p>
      </span>
      <h1 className='bg-gradient-to-r from-slate-200 via-slate-300 to-slate-500 inline-block text-transparent bg-clip-text text-3xl font-extrabold text-center mt-4'>
        Subject wise study material
        <br /> used by{' '}
        <span className='bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 inline-block text-transparent bg-clip-text'>
          9 CGPA holders
        </span>
      </h1>
      <main className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl w-full mt-8'>
        {subjectList.map((subject, i: number) => (
          <Link
            key={i}
            href={`/notes/${subject[0]}`}
            className='relative h-48 rounded-[8px]'
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={subject[1]}
              alt={subject[0]}
              className='absolute w-full h-full object-cover rounded-[8px] hover:scale-105 transition'
            />
            <span className='absolute text-slate-300 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-secondary_bg_color px-4 py-2 text-sm font-bold'>
              {subject[0]}
            </span>
          </Link>
        ))}
      </main>
    </section>
  )
}
export default Page
