import Link from 'next/link'

const Page = () => {
  return (
    <section className='flex flex-col justify-center items-center bg-primary_bg_color px-4 pt-24 pb-32 mt-[64px] text-center text-slate-300'>
      <span className='bg-gradient-to-r from-slate-500 via-slate-300 to-slate-500 mt-2 rounded-full px-4 py-1 shadow-[0px_50px_1000px_200px_rgba(59,_130,_246,_0.15)] mb-4'>
        <p className='text-black text-sm font-medium'>Discussions</p>
      </span>
      <h1 className='bg-gradient-to-r from-slate-200 via-slate-300 to-slate-500 inline-block text-transparent bg-clip-text text-5xl font-extrabold text-center mb-16'>
        Community Posts
      </h1>
      <main className='flex flex-col items-center justify-between max-w-7xl w-full mx-auto gap-6'>
        <Link href={''} className='flex bg-secondary_bg_color h-[350px] w-full'>
          <div className='relative h-full w-3/5 text-white row-span-2'>
            <img
              src={`https://images.pexels.com/photos/5428264/pexels-photo-5428264.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`}
              alt=''
              className='absolute w-full h-full object-cover'
            />
          </div>
          <div className='px-6 py-8 z-10 bg-secondary_bg_color w-full'>
            <div className='flex items-center gap-4 text-sm mb-8'>
              <span>{'Dec 5th 2021'}</span>
              <span className='w-2 h-2 bg-slate-300 rotate-45'></span>
              <span>{'1 min'} Min read</span>
            </div>
            <h3 className='text-white text-2xl text-left'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              rerum quasi harum possimus adipisci perferendis.
            </h3>
            <div className='mt-4 flex gap-4'>
              <p>#wlefb</p>
              <p>#wlefb</p>
              <p>#wlefb</p>
            </div>
            <p className='text-left mt-4'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
              cumque rerum cum. Tempora nobis voluptatum amet perspiciatis
              deserunt delectus fuga! Pariatur fuga excepturi inventore
              similique mollitia doloremque doloribus esse illo!
            </p>
            <p className='mt-4 text-left'>by Anshul Anand</p>
          </div>
        </Link>
        <Link href={''} className='flex bg-secondary_bg_color h-[350px] w-full'>
          <div className='relative h-full w-3/5 text-white row-span-2'>
            <img
              src={`https://images.pexels.com/photos/5428264/pexels-photo-5428264.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`}
              alt=''
              className='absolute w-full h-full object-cover'
            />
          </div>
          <div className='px-6 py-8 z-10 bg-secondary_bg_color w-full'>
            <div className='flex items-center gap-4 text-sm mb-8'>
              <span>{'Dec 5th 2021'}</span>
              <span className='w-2 h-2 bg-slate-300 rotate-45'></span>
              <span>{'1 min'} Min read</span>
            </div>
            <h3 className='text-white text-2xl text-left'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              rerum quasi harum possimus adipisci perferendis.
            </h3>
            <div className='mt-4 flex gap-4'>
              <p>#wlefb</p>
              <p>#wlefb</p>
              <p>#wlefb</p>
            </div>
            <p className='text-left mt-4'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
              cumque rerum cum. Tempora nobis voluptatum amet perspiciatis
              deserunt delectus fuga! Pariatur fuga excepturi inventore
              similique mollitia doloremque doloribus esse illo!
            </p>
            <p className='mt-4 text-left'>by Anshul Anand</p>
          </div>
        </Link>
        <Link href={''} className='flex bg-secondary_bg_color h-[350px] w-full'>
          <div className='relative h-full w-3/5 text-white row-span-2'>
            <img
              src={`https://images.pexels.com/photos/5428264/pexels-photo-5428264.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`}
              alt=''
              className='absolute w-full h-full object-cover'
            />
          </div>
          <div className='px-6 py-8 z-10 bg-secondary_bg_color w-full'>
            <div className='flex items-center gap-4 text-sm mb-8'>
              <span>{'Dec 5th 2021'}</span>
              <span className='w-2 h-2 bg-slate-300 rotate-45'></span>
              <span>{'1 min'} Min read</span>
            </div>
            <h3 className='text-white text-2xl text-left'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              rerum quasi harum possimus adipisci perferendis.
            </h3>
            <div className='mt-4 flex gap-4'>
              <p>#wlefb</p>
              <p>#wlefb</p>
              <p>#wlefb</p>
            </div>
            <p className='text-left mt-4'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
              cumque rerum cum. Tempora nobis voluptatum amet perspiciatis
              deserunt delectus fuga! Pariatur fuga excepturi inventore
              similique mollitia doloremque doloribus esse illo!
            </p>
            <p className='mt-4 text-left'>by Anshul Anand</p>
          </div>
        </Link>
      </main>

      <Link href={''} className='uppercase text-white mt-8'>
        <div className='flex items-center justify-center'>
          <div className='w-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1 rounded-md'>
            <div className='flex h-full w-full items-center justify-center bg-secondary_bg_color back rounded-md'>
              <h1 className='py-2 px-4 font-bold text-white uppercase text-sm'>
                load more
              </h1>
            </div>
          </div>
        </div>
      </Link>
    </section>
  )
}
export default Page
