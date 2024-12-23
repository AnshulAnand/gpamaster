import Table from '@/components/Table'

const Page = () => {
  const data = [
    ['lorem ispum', '19 Dec 2024', 'lorem'],
    ['lorem ispum', '19 Dec 2024', 'lorem'],
    ['lorem ispum', '19 Dec 2024', 'lorem'],
  ]

  return (
    <section className='flex flex-col justify-center items-center bg-primary_bg_color px-4 pt-4 pb-16 mt-[64px] text-center text-slate-300'>
      <main className='max-w-7xl w-full mt-6'>
        <h1 className='text-slate-200 text-3xl font-bold text-left border-b border-b-slate-800 pb-2'>
          Mathematics
        </h1>
        <div className='py-4'>
          <h2 className='text-slate-200 text-xl font-bold text-left'>Notes</h2>
          <Table data={data} />
        </div>
        <div className='py-4'>
          <h2 className='text-slate-200 text-xl font-bold text-left'>Notes</h2>
          <Table data={data} />
        </div>
        <div className='py-4'>
          <h2 className='text-slate-200 text-xl font-bold text-left'>Notes</h2>
          <Table data={data} />
        </div>
      </main>
    </section>
  )
}
export default Page
