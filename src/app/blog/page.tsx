import getFormattedDate from '@/lib/getFormattedDate'
import { getSortedPostsData } from '@/lib/posts'
import Link from 'next/link'

const Page = () => {
  const posts = getSortedPostsData()

  return (
    <section className='flex flex-col justify-center items-center bg-primary_bg_color px-4 pt-8 pb-32 mt-[64px] text-center text-slate-300'>
      <h1 className='bg-gradient-to-r from-slate-200 via-slate-300 to-slate-500 inline-block text-transparent bg-clip-text text-6xl font-extrabold text-center'>
        GPA Master{' '}
        <span className='bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 inline-block text-transparent bg-clip-text'>
          BLOGS.
        </span>
      </h1>
      <main className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-[1400px] w-full mt-8'>
        {posts.map(post => (
          <Link
            key={post.id}
            href={`/blog/${post.id}`}
            className='relative min-h-[400px] text-white row-span-2'
          >
            <img
              src={post.image}
              alt={post.title}
              className='absolute w-full h-full object-cover'
            />
            <span className='absolute top-4 right-4 px-3 py-2 bg-primary_bg_color text-white uppercase z-10 text-xs'>
              {post.tag}
            </span>
            <div className='absolute bottom-0 left-0 px-6 py-8 z-10 bg-transparent_dark_color w-full'>
              <div className='flex items-center gap-4 text-sm mb-8'>
                <span>{getFormattedDate(post.date)}</span>
                <span className='w-2 h-2 bg-slate-300 rotate-45'></span>
                <span>{post.read} Min read</span>
              </div>
              <h3 className='text-white text-2xl text-left'>
                {post.title.slice(0, 50) + '...'}
              </h3>
            </div>
          </Link>
        ))}
      </main>
    </section>
  )
}
export default Page
