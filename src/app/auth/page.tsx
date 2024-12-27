import { getGoogleOAuthURL } from '@/lib/utils'
import { FcGoogle } from 'react-icons/fc'

const Page = () => {
  return (
    <section className='flex flex-col justify-center items-center bg-primary_bg_color px-4 pt-24 pb-32 mt-[64px] text-center text-slate-300 relative'>
      <main className=' max-w-[800px] w-full'>
        <div className='relative h-36 w-full text-white row-span-2 rounded-t-xl'>
          <img
            src={`/loginpage.jpg`}
            alt=''
            className='absolute w-full h-full object-cover rounded-t-xl'
          />
        </div>
        <div className='bg-secondary_bg_color p-4 rounded-b-xl'>
          <h1 className='bg-gradient-to-r from-slate-200 via-slate-300 to-slate-500 inline-block text-transparent bg-clip-text text-4xl font-extrabold text-center'>
            Welcome! to{' '}
            <span className='bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 inline-block text-transparent bg-clip-text'>
              GPA Master.
            </span>
          </h1>

          <p className='mt-4 text-lg'>Continue to your account</p>
          <p className='text-5xl mt-4 text-slate-200'>&#129171;</p>
          <p className='text-4xl text-slate-300'>&#129171;</p>
          <p className='text-2xl text-slate-400'>&#129171;</p>

          <a
            href={getGoogleOAuthURL()}
            className='flex items-center justify-center rounded'
          >
            <div className='w-full rounded bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1'>
              <div className='flex h-full w-full items-center justify-center bg-secondary_bg_color back rounded'>
                <span className='flex justify-center items-center gap-2 p-2 font-black text-white uppercase w-full rounded'>
                  continue with <FcGoogle className='text-3xl' />
                </span>
              </div>
            </div>
          </a>
        </div>
      </main>
    </section>
  )
}
export default Page
