import Link from 'next/link'

const Page = () => {
  return (
    <section className='flex flex-col justify-center items-center bg-primary_bg_color px-4 pt-8 pb-32 mt-[64px] text-center text-slate-300'>
      <h1 className='bg-gradient-to-r from-slate-200 via-slate-300 to-slate-500 inline-block text-transparent bg-clip-text text-6xl font-extrabold text-center'>
        GPA Master{' '}
        <span className='bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 inline-block text-transparent bg-clip-text'>
          BLOGS.
        </span>
      </h1>
      <main className='grid grid-cols-3 gap-4 max-w-[1400px] w-full mt-8'>
        <Link
          href={``}
          className='relative min-h-[400px] text-white row-span-2'
        >
          <img
            src={`https://images.pexels.com/photos/5428264/pexels-photo-5428264.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`}
            alt=''
            className='absolute w-full h-full object-cover'
          />
          <span className='absolute top-4 right-4 p-4 text-base bg-primary_bg_color text-white uppercase z-10'>
            {'sports'}
          </span>
          <div className='absolute bottom-0 left-0 px-6 py-8 z-10 bg-transparent_dark_color w-full'>
            <div className='flex items-center gap-4 text-sm mb-8'>
              <span>{'Dec 5th 2021'}</span>
              <span className='w-2 h-2 bg-slate-300 rotate-45'></span>
              <span>{'1 min'} Min read</span>
            </div>
            <h3 className='text-white text-2xl text-left'>{'Title'}</h3>
          </div>
        </Link>
        <Link
          href={``}
          className='relative min-h-[400px] text-white row-span-2'
        >
          <img
            src={`https://images.pexels.com/photos/5428264/pexels-photo-5428264.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`}
            alt=''
            className='absolute w-full h-full object-cover'
          />
          <span className='absolute top-4 right-4 p-4 text-base bg-primary_bg_color text-white uppercase z-10'>
            {'sports'}
          </span>
          <div className='absolute bottom-0 left-0 px-6 py-8 z-10 bg-transparent_dark_color w-full'>
            <div className='flex items-center gap-4 text-sm mb-8'>
              <span>{'Dec 5th 2021'}</span>
              <span className='w-2 h-2 bg-slate-300 rotate-45'></span>
              <span>{'1 min'} Min read</span>
            </div>
            <h3 className='text-white text-2xl text-left'>{'Title'}</h3>
          </div>
        </Link>
        <Link
          href={``}
          className='relative min-h-[400px] text-white row-span-2'
        >
          <img
            src={`https://images.pexels.com/photos/5428264/pexels-photo-5428264.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`}
            alt=''
            className='absolute w-full h-full object-cover'
          />
          <span className='absolute top-4 right-4 p-4 text-base bg-primary_bg_color text-white uppercase z-10'>
            {'sports'}
          </span>
          <div className='absolute bottom-0 left-0 px-6 py-8 z-10 bg-transparent_dark_color w-full'>
            <div className='flex items-center gap-4 text-sm mb-8'>
              <span>{'Dec 5th 2021'}</span>
              <span className='w-2 h-2 bg-slate-300 rotate-45'></span>
              <span>{'1 min'} Min read</span>
            </div>
            <h3 className='text-white text-2xl text-left'>{'Title'}</h3>
          </div>
        </Link>
      </main>
    </section>
  )
}
export default Page
