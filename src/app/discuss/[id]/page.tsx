import { GET } from '@/lib/fetch'
import { IPost } from '@/types'
import { UserCard } from '@/components/UserCard'
import Comments from '@/components/Comments'
import { returnDate } from '@/lib/utils'

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id
  const domain = process.env.NEXT_PUBLIC_DOMAIN
  const post: IPost = await GET(`${domain}/api/post/${id}`)

  return (
    <section className='flex flex-col justify-center items-center bg-primary_bg_color px-4 pt-6 pb-32 mt-[64px] text-center text-slate-300 relative'>
      <main className='grid md:grid-cols-3 gap-4 max-w-7xl w-full'>
        <div className='grid place-content-center md:hidden bg-secondary_bg_color h-[200px] mt-4 rounded'>
          gpamaster.in
        </div>
        <div className='md:col-span-2'>
          {/* post */}
          <div className='text-left bg-secondary_bg_color p-4 rounded'>
            <h1 className='text-slate-300 text-3xl font-bold my-4'>
              {post.title}
            </h1>
            <img
              src={post.image || '/no-image-provided.png'}
              alt={post.title}
              className='rounded w-full mb-4'
            />

            <UserCard
              id={post.user}
              views={post.views}
              date={returnDate(post)}
            />

            <div className='flex gap-4 my-4'>
              {post.tags.map((tag: string, i: number) => (
                <p key={i}>{tag && `#${tag}`}</p>
              ))}
            </div>

            <div className='leading-6'>
              <p className='whitespace-pre-wrap'>{post.body}</p>
            </div>
          </div>

          <div className='bg-secondary_bg_color h-[200px] mt-4 rounded'></div>

          {/* comments */}
          <Comments post={post} />
        </div>

        <div className=''>
          <div className='bg-secondary_bg_color rounded'>
            <div className='grid place-content-center h-52 md:h-80 p-2'>
              gpamaster.in
            </div>
            <div className='grid place-content-center h-52 md:h-80 p-2'>
              gpamaster.in
            </div>
          </div>
        </div>
      </main>
    </section>
  )
}
export default Page
