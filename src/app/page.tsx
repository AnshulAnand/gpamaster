import Link from 'next/link'

export default function Home() {
  return (
    <>
      {/*Hero */}
      <section className='flex flex-col justify-center items-center bg-primary_bg_color px-4 py-32 mt-[64px] text-center'>
        <h1 className='bg-gradient-to-r from-slate-200 via-slate-300 to-slate-500 inline-block text-transparent bg-clip-text text-6xl font-extrabold text-center'>
          All In One Solution For Students
        </h1>
        <p className='text-slate-300 inline-block bg-clip-text text-xl mt-4'>
          GPA Master provides Study Materials, Community and Other <br />{' '}
          Usefull resources & information to college students.
        </p>
        <span className='bg-gradient-to-r from-slate-500 via-slate-300 to-slate-500 mt-3 rounded-full px-4 py-1 shadow-[0px_50px_1000px_200px_rgba(59,_130,_246,_0.15)]'>
          <p className='text-black text-sm font-medium'>
            Completely redesigned
          </p>
        </span>

        {/* Blog showcase */}
        <div className='max-w-screen-xl w-screen mt-44'>
          <div className='flex w-full mb-4'>
            <div className='flex items-center justify-center'>
              <div className='w-full rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1'>
                <div className='flex h-full w-full items-center justify-center bg-secondary_bg_color back'>
                  <h1 className='py-2 px-4 font-black text-white uppercase'>
                    Blogs
                  </h1>
                </div>
              </div>
            </div>
            <div className='bg-secondary_bg_color flex items-center justify-start w-full text-left pl-4'>
              <p className='text-slate-300'>Quality blogs written for you</p>
            </div>
          </div>
          <div className='grid grid-rows-2 grid-cols-3 gap-4 w-full'>
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
            <Link href={``} className='relative min-h-[400px] text-white'>
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
            <Link href={``} className='relative min-h-[400px] text-white'>
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
              className='relative min-h-[400px] text-white col-span-2'
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
          </div>
        </div>

        <Link href={''} className='uppercase text-white mt-4'>
          <div className='flex items-center justify-center'>
            <div className='w-full rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1'>
              <div className='flex h-full w-full items-center justify-center bg-secondary_bg_color back rounded-full'>
                <h1 className='py-2 px-4 font-bold text-white uppercase text-sm'>
                  read more blogs
                </h1>
              </div>
            </div>
          </div>
        </Link>
      </section>

      {/* Notes */}
      <section className='flex flex-col justify-center items-center bg-primary_bg_color px-4 py-32 text-center'>
        <span className='bg-gradient-to-r from-slate-500 via-slate-300 to-slate-500 mt-2 rounded-full px-4 py-1 shadow-[0px_50px_1000px_200px_rgba(59,_130,_246,_0.15)]'>
          <p className='text-black text-sm font-medium'>Study Material</p>
        </span>
        <h1 className='bg-gradient-to-r from-slate-200 via-slate-300 to-slate-500 inline-block text-transparent bg-clip-text text-3xl font-extrabold text-center mt-4'>
          Enhance your preparation <br /> with Study Material provided by us
        </h1>
        <p className='text-slate-400 mt-4'>
          We provide material used by{' '}
          <span className='bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 inline-block text-transparent bg-clip-text'>
            9 CGPA holders
          </span>
          . Includes Previous Years Questions (PYQs), YouTube <br /> unit wise
          playlists, syllabus and other resources
        </p>
        <span className='flex gap-2'>
          <Link href={''} className='uppercase text-white mt-4'>
            <div className='flex items-center justify-center'>
              <div className='w-full rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1'>
                <div className='flex h-full w-full items-center justify-center bg-secondary_bg_color back rounded-full'>
                  <h1 className='py-2 px-4 font-bold text-white uppercase text-base'>
                    pricing
                  </h1>
                </div>
              </div>
            </div>
          </Link>
          <Link href={''} className='uppercase text-white mt-4'>
            <div className='flex items-center justify-center'>
              <div className='w-full rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1'>
                <div className='flex h-full w-full items-center justify-center bg-secondary_bg_color back rounded-full'>
                  <h1 className='py-2 px-4 font-bold text-white uppercase text-base'>
                    view notes
                  </h1>
                </div>
              </div>
            </div>
          </Link>
        </span>
      </section>

      {/* Discuss */}
      <section className='flex justify-center items-center bg-primary_bg_color px-4 py-32 text-center'>
        <img src='/undraw_messaging_1s2k.svg' alt='' />
        <div className='flex flex-col'>
          <h1 className='bg-gradient-to-r from-slate-200 via-slate-300 to-slate-500 inline-block text-transparent bg-clip-text text-3xl font-extrabold mt-4'>
            GPA Master now is also a platform <br /> for student community and
            discussion
          </h1>
          <p className='text-slate-400 mt-4 mb-4'>
            Write posts, doubts, questions and discussions <br /> and let your
            fellow-mates guide you
          </p>
          <div className='flex justify-center items-center'>
            <Link href={''} className='uppercase text-white'>
              <div className='flex items-center justify-center'>
                <div className='w-full rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1'>
                  <div className='flex h-full w-full items-center justify-center bg-secondary_bg_color back rounded-full'>
                    <h1 className='py-2 px-4 font-bold text-white uppercase text-base'>
                      write post
                    </h1>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
