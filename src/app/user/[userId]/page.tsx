import Posts from '@/components/UserProfile/Posts'
import Profile from '@/components/UserProfile/Profile'

const Page = async ({ params }: { params: Promise<{ userId: string }> }) => {
  const id = (await params).userId

  return (
    <section className='flex flex-col justify-center items-center bg-primary_bg_color px-4 pt-6 pb-32 mt-[64px] text-center text-slate-300 relative'>
      <main className='relative max-w-7xl'>
        <Profile id={id} />
        <Posts id={id} />
      </main>
    </section>
  )
}
export default Page
