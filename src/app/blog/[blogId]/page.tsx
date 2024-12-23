const Page = () => {
  return (
    <section className='flex flex-col justify-center items-center bg-primary_bg_color px-4 pt-16 pb-32 mt-[64px] text-center text-slate-300 relative'>
      <h1 className='text-5xl text-slate-200 font-extrabold'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </h1>
      <div className='flex items-center gap-4 mt-5'>
        <p>Dec 6th 2024</p>
        <span className='w-[5px] h-[5px] bg-slate-400 rotate-45'></span>
        <p>3 min read</p>
      </div>

      <main className='grid grid-cols-5 gap-4 max-w-[1400px] w-full mt-6'>
        <div className='relative col-span-5 h-96 bg-secondary_bg_color rounded-[8px]'>
          <img
            src='https://images.pexels.com/photos/5428264/pexels-photo-5428264.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            className='absolute w-full h-full object-cover rounded-[8px]'
            alt=''
          />
        </div>
        <div className='h-80 bg-secondary_bg_color'></div>
        <div className='col-span-3'></div>
        <div className='h-80 bg-secondary_bg_color'></div>
      </main>
    </section>
  )
}
export default Page
