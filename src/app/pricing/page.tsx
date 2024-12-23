import { GiFullPizza } from 'react-icons/gi'

const Page = () => {
  return (
    <section className='flex flex-col justify-center items-center bg-primary_bg_color px-4 py-24 mt-[64px] text-center'>
      <div className='text-slate-300 flex justify-center gap-2 mb-4'>
        <span className='text-4xl mt-1'>&#8377;</span>
        <h1 className='bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 inline-an cblock text-transparent bg-clip-text text-7xl font-extrabold'>
          249
        </h1>
        <h2 className='font-bold text-red-500 text-5xl ml-2 mt-3 line-through'>
          299
        </h2>
      </div>
      <p className='text-slate-300 flex justify-center items-center'>
        Just at the cost of one single pizza{' '}
        <GiFullPizza className='text-4xl mx-1 text-orange-400' /> (which
        you&apos;ll probably devour in weekend ;)
      </p>
      <main className='grid grid-cols-3 gap-14 max-w-5xl w-full text-slate-300 bg-secondary_bg_color p-8 rounded-[8px] mt-6'>
        <div className='flex flex-col justify-between'>
          <h2 className='text-left bg-gradient-to-r from-slate-300 to-slate-400 inline-block text-transparent bg-clip-text text-4xl font-bold'>
            GPA Master <br />
            <span className='bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 inline-block text-transparent bg-clip-text text-9xl'>
              PRO.
            </span>
          </h2>
          <a href='' className='flex items-center justify-center rounded'>
            <div className='w-full rounded bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1'>
              <div className='flex h-full w-full items-center justify-center bg-secondary_bg_color back rounded'>
                <span className='flex justify-center items-center gap-2 p-2 font-black text-white uppercase w-full rounded'>
                  become a pro
                </span>
              </div>
            </div>
          </a>
        </div>

        <div className='col-span-2 border-l border-l-slate-700 pl-8'>
          <div className='flex justify-start items-center gap-4 mb-4'>
            <span className='bg-slate-300 py-4 px-6 rounded-full text-black font-bold'>
              1
            </span>
            <p>
              <span className='font-bold'>Subject Wise</span> Study Material
            </p>
          </div>
          <div className='flex justify-start items-center gap-4 mb-4'>
            <span className='bg-slate-300 py-4 px-6 rounded-full text-black font-bold'>
              2
            </span>
            <p>
              Notes used & prepared by <span className='font-bold'>9 SGPA</span>{' '}
              holders
            </p>
          </div>
          <div className='flex justify-start items-center gap-4 mb-4'>
            <span className='bg-slate-300 py-4 px-6 rounded-full text-black font-bold'>
              3
            </span>
            <p>Previous Year Questions (PYQs), YouTube Playlist links</p>
          </div>
          <div className='flex justify-start items-center gap-4 mb-4'>
            <span className='bg-slate-300 py-4 px-6 rounded-full text-black font-bold'>
              4
            </span>
            <p>
              One-time payment for{' '}
              <span className='font-bold'>entire semester</span> (4 months)
            </p>
          </div>
          <div className='flex justify-start items-center gap-4'>
            <span className='bg-slate-300 py-4 px-6 rounded-full text-black font-bold'>
              5
            </span>
            <p>Continuously updating and adding resources</p>
          </div>
        </div>
      </main>
    </section>
  )
}
export default Page
