'use client'

import { usePosts } from '@/swr/post'
import Link from 'next/link'

const Posts = ({ id }: { id: string }) => {
  const { data, isError, isLoading } = usePosts(1, 25, id)

  console.log({ data })

  if (isLoading) return <p>loading...</p>

  return (
    <>
      {data.map((post, i: number) => (
        <Link
          key={i}
          href={`/discuss/${post._id}`}
          className='flex bg-secondary_bg_color h-[350px] w-full mt-4'
        >
          <div className='relative h-full w-3/5 text-white row-span-2'>
            <img
              src={post.image}
              alt={post.title}
              className='absolute w-full h-full object-cover'
            />
          </div>
          <div className='px-6 py-8 z-10 bg-secondary_bg_color w-full'>
            <div className='flex items-center gap-4 text-sm mb-8'>
              <span>{`${post.createdAt}`}</span>
              <span className='w-2 h-2 bg-slate-300 rotate-45'></span>
              <span>{'1 min'} Min read</span>
            </div>
            <h3 className='text-white text-2xl text-left'>{post.title}</h3>
            <div className='mt-4 flex gap-4'>
              {post.tags.map((tag: string, i: number) => (
                <p key={i}>#{tag}</p>
              ))}
            </div>
            <p className='text-left mt-4'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
              cumque rerum cum. Tempora nobis voluptatum amet perspiciatis
              deserunt delectus fuga! Pariatur fuga excepturi inventore
              similique mollitia doloremque doloribus esse illo!
            </p>
            <p className='mt-4 text-left'>by {id}</p>
          </div>
        </Link>
      ))}
    </>
  )
}
export default Posts
