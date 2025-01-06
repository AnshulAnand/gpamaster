import page from './page.module.css'
import getFormattedDate from '@/lib/getFormattedDate'
import { getSortedPostsData, getPostData } from '@/lib/posts'
import { notFound } from 'next/navigation'

export function generateStaticParams() {
  const posts = getSortedPostsData()

  return posts.map(post => ({
    postId: post.id,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ blogId: string }>
}) {
  const posts = getSortedPostsData()
  const blogId = (await params).blogId

  const post = posts.find(post => post.id === blogId)

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: post.title,
  }
}

const Page = async ({ params }: { params: Promise<{ blogId: string }> }) => {
  const posts = getSortedPostsData()
  const blogId = (await params).blogId

  if (!posts.find(post => post.id === blogId)) notFound()

  const { title, date, contentHtml, image } = await getPostData(blogId)

  const pubDate = getFormattedDate(date)

  return (
    <section className='flex flex-col justify-center items-center bg-primary_bg_color px-4 pt-16 pb-32 mt-[64px] text-center text-slate-300 relative'>
      <h1 className='text-2xl md:text-3xl lg:text-5xl text-slate-200 font-extrabold'>
        {title}
      </h1>
      <div className='flex items-center gap-4 mt-5'>
        <p>{pubDate}</p>
        <span className='w-[5px] h-[5px] bg-slate-400 rotate-45'></span>
        <p>3 min read</p>
      </div>

      <main className='grid lg:grid-cols-5 gap-4 max-w-[1400px] w-full mt-6'>
        <div className='relative lg:col-span-5 h-96 bg-secondary_bg_color rounded-[8px]'>
          <img
            src={image}
            className='absolute w-full h-full object-cover rounded-[8px]'
            alt={title}
          />
        </div>
        <div className='h-44 lg:h-80 w-full p-4 bg-secondary_bg_color'></div>
        <article
          className={`${page.style_content} h-auto w-full lg:col-span-3 flex flex-col gap-2 text-left`}
        >
          <section dangerouslySetInnerHTML={{ __html: contentHtml }} />
        </article>
        <div className='h-40 lg:h-80 w-full p-4 bg-secondary_bg_color'></div>
      </main>
    </section>
  )
}
export default Page
