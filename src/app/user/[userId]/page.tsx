import Link from 'next/link'

const Page = () => {
  return (
    <section className='flex flex-col justify-center items-center bg-primary_bg_color px-4 pt-4 pb-32 mt-[64px] text-center text-slate-300 relative'>
      <main className='relative max-w-7xl'>
        <div className='bg-secondary_bg_color p-6 pt-[120px] mt-[150px] rounded-[10px]'>
          <div className='absolute top-0 left-1/2 -translate-x-1/2'>
            <div className='relative h-[270px] w-[270px] rounded-[8px]'>
              <img
                src='https://images.pexels.com/photos/5428264/pexels-photo-5428264.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                className='absolute w-full h-full object-cover rounded-[8px]'
                alt=''
              />
            </div>
          </div>
          <h1 className='font-bold text-xl mt-4'>Anshul Anand</h1>
          <div className='grid grid-cols-4 gap-4 mt-8'>
            <span>
              <span className='font-bold mr-2'>Username:</span>@Anshul-Anand-56
            </span>
            <span>
              <span className='font-bold mr-2'>Joined:</span>1 January 2025
            </span>
            <span>
              <span className='font-bold mr-2'>Location:</span>New Delhi
            </span>
            <span>
              <span className='font-bold mr-2'>Views:</span>10k views
            </span>
          </div>
          <p className='mt-8 text-center'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            natus, ipsum atque dignissimos, perspiciatis voluptatum at, nisi
            alias ipsam incidunt maiores blanditiis! Laudantium, cum accusamus.
          </p>
        </div>

        <Link
          href={''}
          className='flex bg-secondary_bg_color h-[350px] w-full mt-4'
        >
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
    </section>
  )
}
export default Page
