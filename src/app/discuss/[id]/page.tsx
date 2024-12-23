import Link from 'next/link'

const Page = () => {
  return (
    <section className='flex flex-col justify-center items-center bg-primary_bg_color px-4 pt-4 pb-32 mt-[64px] text-center text-slate-300 relative'>
      <main className='grid grid-cols-3 gap-4 max-w-7xl'>
        <div className='col-span-2'>
          {/* post */}
          <div className='text-left bg-secondary_bg_color p-4 rounded'>
            <h1 className='text-slate-300 text-3xl font-bold my-4'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </h1>
            <img
              src='https://images.pexels.com/photos/5428264/pexels-photo-5428264.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              className='rounded mb-4'
              alt=''
            />

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
              <p className='text-slate-400'>1.2k views</p>
            </div>

            <div className='flex gap-4 my-4'>
              <Link href={''}>#fuy</Link>
              <Link href={''}>#fuy</Link>
              <Link href={''}>#fuy</Link>
            </div>

            <div className='leading-6'>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi ipsum repudiandae enim ad ducimus nostrum
                necessitatibus rerum pariatur odio, repellat adipisci magni
                impedit nisi culpa dicta aperiam, velit eum et! Placeat
                repudiandae ab architecto quasi. Ipsum labore neque dolorum
                quidem in, aperiam unde maxime sunt hic exercitationem voluptate
                et tempora nobis ad quas a minima ea, autem alias placeat?
                Tempore dolorem cupiditate optio doloremque possimus sequi unde,
                minus soluta quidem ipsam praesentium sunt. Saepe, ex
                perferendis dolores necessitatibus fugiat, ut totam earum eaque
                pariatur minus maxime delectus in tenetur tempora voluptatibus
                nisi impedit, dignissimos recusandae. Recusandae veniam esse
                eaque provident. <br /> Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Reprehenderit facilis repellat adipisci quidem
                maiores fugit dolorem architecto mollitia sapiente fuga illo, ad
                consequuntur doloremque, sequi quis fugiat officiis? Voluptates
                labore quidem laborum magni blanditiis vero quas quos! Et
                commodi eum eius neque, maxime fugiat possimus earum? Iure vitae
                accusantium eum molestias repellat debitis quia fugit quisquam
                obcaecati, voluptatibus minus maxime asperiores quibusdam
                dolorem officia quod nesciunt suscipit ut, ipsam quam itaque
                exercitationem inventore eius! Perspiciatis obcaecati est hic
                placeat non aspernatur facilis distinctio expedita soluta,
                reprehenderit, quod quasi nam praesentium culpa cupiditate rem,
                vitae sint? Aliquam delectus mollitia labore similique?
              </p>
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
