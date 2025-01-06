'use client'

import Link from 'next/link'
import { useState } from 'react'
import { LuPencil } from 'react-icons/lu'
import { usePosts } from '@/swr/post'
import { IPost } from '@/types'
import readingTime, { returnDate } from '@/lib/utils'
import UserPostLoadingSkeleton from '@/components/Skeletons/UserPostLoadingSkeleton'

type FetchPostsProps = {
  page: number
}

const FetchPosts = ({ page }: FetchPostsProps) => {
  const { data, isLoading, isError } = usePosts(page, 4)

  if (isLoading)
    return (
      <>
        <UserPostLoadingSkeleton />
        <UserPostLoadingSkeleton />
        <UserPostLoadingSkeleton />
      </>
    )

  if (isError) return <h1>{isError.info.message}</h1>

  return data.map((post: IPost, i: number) => (
    <Link
      key={i}
      href={`/discuss/${post._id}`}
      className='flex flex-col md:flex-row bg-secondary_bg_color md:h-[350px] w-full focus:scale-[0.99] transition'
    >
      <div className='relative h-72 md:h-full w-full md:w-3/5 text-white row-span-2'>
        <img
          src={post.image || '/no-image-provided.png'}
          alt={post.title}
          className='absolute w-full h-full object-cover'
        />
      </div>
      <div className='px-6 py-8 z-10 bg-secondary_bg_color w-full'>
        <div className='flex items-center gap-4 text-sm mb-8'>
          <span>{returnDate(post)}</span>
          <span className='w-2 h-2 bg-slate-300 rotate-45'></span>
          <span>{readingTime(post.body)} Min read</span>
        </div>
        <h3 className='text-white text-2xl text-left'>{post.title}</h3>
        <div className='mt-4 flex flex-wrap gap-4'>
          {post.tags.map((tag: string, i: number) => (
            <p key={i}>#{tag}</p>
          ))}
        </div>
        <p className='text-left mt-4'>{post.body.slice(0, 100) + '...'}</p>
        <p className='mt-4 text-left'>by user: {post.user}</p>
      </div>
    </Link>
  ))
}

const Page = () => {
  const [count, setCount] = useState(1)

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let list: Array<any> = []
  for (let i = 0; i < count; i++) {
    list.push(<FetchPosts key={i + 1} page={i + 1} />)
  }

  return (
    <section className='relative flex flex-col justify-center items-center bg-primary_bg_color px-4 pt-24 pb-32 md:mt-[64px] text-center text-slate-300'>
      <Link
        href='/discuss/new'
        className='absolute top-24 right-6 md:right-16 flex justify-center items-center bg-secondary_bg_color p-4 rounded-full hover:scale-105 transition'
      >
        <LuPencil className='text-slate-300 text-lg' />
      </Link>

      <span className='bg-gradient-to-r from-slate-500 via-slate-300 to-slate-500 mt-2 rounded-full px-4 py-1 shadow-[0px_50px_1000px_200px_rgba(59,_130,_246,_0.15)] mb-4'>
        <p className='text-black text-xs font-medium'>Discussions</p>
      </span>
      <h1 className='bg-gradient-to-r from-slate-200 via-slate-300 to-slate-500 inline-block text-transparent bg-clip-text text-3xl md:text-5xl font-extrabold text-center mb-8 mb:mb-16'>
        Community Posts
      </h1>
      <main className='flex flex-col items-center justify-between max-w-7xl w-full mx-auto gap-6'>
        {list}
      </main>

      <button
        onClick={() => setCount(count + 1)}
        className='uppercase text-white mt-8 hover:scale-105 transition'
      >
        <div className='flex items-center justify-center'>
          <div className='w-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1 rounded-md'>
            <div className='flex h-full w-full items-center justify-center bg-secondary_bg_color back rounded-md'>
              <h1 className='py-2 px-4 font-bold text-white uppercase text-sm'>
                load more
              </h1>
            </div>
          </div>
        </div>
      </button>
    </section>
  )
}
export default Page
