import { GET } from '@/lib/fetch'
import { IPost } from '@/types'
import { UserCard } from '@/components/UserCard'

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id
  const domain = process.env.NEXT_PUBLIC_DOMAIN
  const post: IPost = await GET(`${domain}/api/post/${id}`)
  console.log({ post })

  return (
    <section className='flex flex-col justify-center items-center bg-primary_bg_color px-4 pt-6 pb-32 mt-[64px] text-center text-slate-300 relative'>
      <main className='grid grid-cols-3 gap-4 max-w-7xl'>
        <div className='col-span-2'>
          {/* post */}
          <div className='text-left bg-secondary_bg_color p-4 rounded'>
            <h1 className='text-slate-300 text-3xl font-bold my-4'>
              {post.title}
            </h1>
            <img src={post.image} alt={post.title} className='rounded mb-4' />

            <UserCard
              id={post.user}
              views={post.views}
              date={`${post.createdAt}`}
            />

            <div className='flex gap-4 my-4'>
              {post.tags.map((tag: string, i: number) => (
                <p key={i}>#{tag}</p>
              ))}
            </div>

            <div className='leading-6'>
              <p>{post.body}</p>
            </div>
          </div>

          <div className='bg-secondary_bg_color h-[150px] mt-4 rounded'></div>

          {/* comments */}
          <div className='mt-4 rounded'>
            <h2 className='text-2xl font-bold text-left mb-4'>Comments</h2>
            <div className='text-left bg-secondary_bg_color p-4 rounded mb-4'>
              <div className='flex justify-between items-center'>
                <div className='flex gap-4 items-center'>
                  <div className='relative h-14 w-14 rounded'>
                    <img
                      src='https://images.pexels.com/photos/5428264/pexels-photo-5428264.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                      className='absolute w-full h-full object-cover rounded'
                      alt=''
                    />
                  </div>
                  <div>
                    <p>by Amshul Anand</p>
                    <p className='text-slate-400'>Dec 16 2020</p>
                  </div>
                </div>
              </div>
              <p className='mt-4'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo
                aliquid enim distinctio, dolorem officiis voluptatibus at quos,
                non nihil numquam tenetur, nesciunt assumenda. Mollitia earum
                provident vel nemo laborum, distinctio quis corrupti recusandae
                eius inventore non quos voluptatum voluptates nobis.
              </p>
            </div>
            <div className='text-left bg-secondary_bg_color p-4 rounded'>
              <div className='flex justify-between items-center'>
                <div className='flex gap-4 items-center'>
                  <div className='relative h-14 w-14 rounded'>
                    <img
                      src='https://images.pexels.com/photos/5428264/pexels-photo-5428264.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                      className='absolute w-full h-full object-cover rounded'
                      alt=''
                    />
                  </div>
                  <div>
                    <p>by Amshul Anand</p>
                    <p className='text-slate-400'>Dec 16 2020</p>
                  </div>
                </div>
              </div>
              <p className='mt-4'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo
                aliquid enim distinctio, dolorem officiis voluptatibus at quos,
                non nihil numquam tenetur, nesciunt assumenda. Mollitia earum
                provident vel nemo laborum, distinctio quis corrupti recusandae
                eius inventore non quos voluptatum voluptates nobis.
              </p>
            </div>
          </div>
        </div>

        <div className=''>
          <div className='bg-secondary_bg_color rounded'>
            <div className='h-80 p-4'></div>
            <div className='h-80 p-4'></div>
          </div>
        </div>
      </main>
    </section>
  )
}
export default Page
