import { getSortedPostsData } from '@/lib/posts'
import Link from 'next/link'
import { BsStars } from 'react-icons/bs'

export default function Home() {
  const posts = getSortedPostsData()

  return (
    <>
      {/*Hero */}
      <section className='flex flex-col justify-center items-center bg-primary_bg_color px-4 py-32 mt-[64px] text-center'>
        <span className='bg-gradient-to-r from-slate-500 via-slate-300 to-slate-500 mb-3 rounded-full px-4 py-1 shadow-[0px_50px_1000px_200px_rgba(59,_130,_246,_0.15)]'>
          <p className='text-black text-xs font-medium'>
            Completely redesigned
          </p>
        </span>
        <h1 className='bg-gradient-to-r from-slate-200 via-slate-300 to-slate-500 inline-block text-transparent bg-clip-text text-6xl md:text-7xl font-extrabold text-center'>
          All In One{' '}
          <span className='bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 inline-block text-transparent bg-clip-text font-extrabold'>
            Solution
          </span>{' '}
          For Students
        </h1>
        <p className='hidden text-slate-300 lg:inline-block bg-clip-text text-base lg:text-xl mt-4'>
          GPA Master provides Study Materials, Community and Other <br />{' '}
          Usefull resources & information to college students.
        </p>
        <div className='flex flex-wrap justify-center items-center mt-4 gap-2'>
          <Link
            href='/notes'
            className='text-white bg-[#FF9119] focus:ring-4 focus:outline-none font-medium text-sm px-5 py-2.5 text-center inline-flex items-center hover:bg-[#FF9119]/80 focus:ring-[#FF9119]/40 rounded-xl hover:-translate-y-1 transition'
          >
            Checkout resources <BsStars className='text-lg ml-2' />
          </Link>
          <Link
            href='/discuss'
            className='text-white bg-[#050708] focus:ring-4 focus:outline-none font-medium text-sm px-5 py-3 text-center inline-flex items-center hover:bg-[#050708]/40 focus:ring-gray-600 rounded-xl hover:-translate-y-1 transition'
          >
            Discussion
          </Link>
          <Link
            href='/blog'
            className='text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none font-medium text-sm px-5 py-2.5 text-center inline-flex items-center focus:ring-gray-500 rounded-xl hover:-translate-y-1 transition'
          >
            GPA Master Blogs
          </Link>
        </div>

        {/* Blog showcase */}
        <div className='max-w-screen-xl w-screen mt-16 lg:mt-40 px-4'>
          <div className='flex w-full mb-4'>
            <div className='flex items-center justify-center'>
              <div className='w-full rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1'>
                <div className='flex h-full w-full items-center justify-center bg-secondary_bg_color back'>
                  <h1 className='py-2 px-4 font-black text-white uppercase'>
                    Blogs
                  </h1>
                </div>
              </div>
            </div>
            <div className='bg-secondary_bg_color flex items-center justify-start w-full text-left pl-4'>
              <p className='text-slate-300'>Quality blogs written for you</p>
            </div>
          </div>
          <div className='grid grid-rows-2 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 w-full'>
            <Link
              href={`/blog/${posts[0].id}`}
              className='relative min-h-[400px] text-white xl:row-span-2'
            >
              <img
                src={posts[0].image}
                alt=''
                className='absolute w-full h-full object-cover'
              />
              <span className='absolute top-4 right-4 px-4 py-2 text-xs bg-primary_bg_color text-white uppercase z-10'>
                {posts[0].tag}
              </span>
              <div className='absolute bottom-0 left-0 px-6 py-8 z-10 bg-transparent_dark_color w-full'>
                <div className='flex items-center gap-4 text-sm mb-8'>
                  <span>{posts[0].date}</span>
                  <span className='w-2 h-2 bg-slate-300 rotate-45'></span>
                  <span>{posts[0].read} Min read</span>
                </div>
                <h3 className='text-white text-2xl text-left'>
                  {posts[0].title.slice(0, 50) + '...'}
                </h3>
              </div>
            </Link>
            <Link
              href={`/blog/${posts[1].id}`}
              className='relative min-h-[400px] text-white'
            >
              <img
                src={posts[1].image}
                alt={posts[1].title}
                className='absolute w-full h-full object-cover'
              />
              <span className='absolute top-4 right-4 px-4 py-2 text-xs bg-primary_bg_color text-white uppercase z-10'>
                {posts[1].tag}
              </span>
              <div className='absolute bottom-0 left-0 px-6 py-8 z-10 bg-transparent_dark_color w-full'>
                <div className='flex items-center gap-4 text-sm mb-8'>
                  <span>{posts[1].date}</span>
                  <span className='w-2 h-2 bg-slate-300 rotate-45'></span>
                  <span>{posts[1].read} Min read</span>
                </div>
                <h3 className='text-white text-2xl text-left'>
                  {posts[1].title.slice(0, 50) + '...'}
                </h3>
              </div>
            </Link>
            <Link
              href={`/blog/${posts[0].id}`}
              className='hidden md:block relative min-h-[400px] text-white'
            >
              <img
                src={posts[0].image}
                alt={posts[0].title}
                className='absolute w-full h-full object-cover'
              />
              <span className='absolute top-4 right-4 px-4 py-2 text-xs bg-primary_bg_color text-white uppercase z-10'>
                {posts[0].tag}
              </span>
              <div className='absolute bottom-0 left-0 px-6 py-8 z-10 bg-transparent_dark_color w-full'>
                <div className='flex items-center gap-4 text-sm mb-8'>
                  <span>{posts[0].date}</span>
                  <span className='w-2 h-2 bg-slate-300 rotate-45'></span>
                  <span>{posts[0].read} Min read</span>
                </div>
                <h3 className='text-white text-2xl text-left'>
                  {posts[0].title.slice(0, 50) + '...'}
                </h3>
              </div>
            </Link>
            <Link
              href={`/blog/${posts[1].id}`}
              className='hidden md:block relative min-h-[400px] text-white xl:col-span-2'
            >
              <img
                src={posts[1].image}
                alt={posts[1].title}
                className='absolute w-full h-full object-cover'
              />
              <span className='absolute top-4 right-4 px-4 py-2 text-xs bg-primary_bg_color text-white uppercase z-10'>
                {posts[1].tag}
              </span>
              <div className='absolute bottom-0 left-0 px-6 py-8 z-10 bg-transparent_dark_color w-full'>
                <div className='flex items-center gap-4 text-sm mb-8'>
                  <span>{posts[1].date}</span>
                  <span className='w-2 h-2 bg-slate-300 rotate-45'></span>
                  <span>{posts[1].read} Min read</span>
                </div>
                <h3 className='text-white text-2xl text-left'>
                  {posts[1].title}
                </h3>
              </div>
            </Link>
          </div>
        </div>

        <Link href='/blog' className='uppercase text-white mt-4'>
          <div className='flex items-center justify-center'>
            <div className='w-full rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1'>
              <div className='flex h-full w-full items-center justify-center bg-secondary_bg_color back rounded-full'>
                <h1 className='py-2 px-4 font-bold text-white uppercase text-sm'>
                  read more blogs
                </h1>
              </div>
            </div>
          </div>
        </Link>
      </section>

      {/* Notes */}
      <section className='flex flex-col justify-center items-center bg-primary_bg_color px-4 py-32 text-center'>
        <span className='bg-gradient-to-r from-slate-500 via-slate-300 to-slate-500 mt-2 rounded-full px-4 py-1 shadow-[0px_50px_1000px_200px_rgba(59,_130,_246,_0.15)]'>
          <p className='text-black text-xs font-medium'>Study Material</p>
        </span>
        <h1 className='bg-gradient-to-r from-slate-200 via-slate-300 to-slate-500 inline-block text-transparent bg-clip-text text-3xl font-extrabold text-center mt-4'>
          Enhance your preparation <br /> with Study Material provided by us
        </h1>
        <p className='text-slate-400 mt-4'>
          We provide material used by{' '}
          <span className='bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 inline-block text-transparent bg-clip-text'>
            9 CGPA holders
          </span>
          . Includes Previous Years Questions (PYQs), YouTube <br /> unit wise
          playlists, syllabus and other resources
        </p>
        <img
          src='/notes.png'
          alt='gpamaster notes'
          className='max-w-6xl w-full mt-4 shadow-[0px_0px_200px_0px_rgba(255,_255,_255,_0.5)]'
        />
        <span className='flex gap-2'>
          <Link href='/pricing' className='uppercase text-white mt-4'>
            <div className='flex items-center justify-center'>
              <div className='w-full rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1'>
                <div className='flex h-full w-full items-center justify-center bg-secondary_bg_color back rounded-full'>
                  <h1 className='py-2 px-4 font-bold text-white uppercase text-base'>
                    pricing
                  </h1>
                </div>
              </div>
            </div>
          </Link>
          <Link href='/notes' className='uppercase text-white mt-4'>
            <div className='flex items-center justify-center'>
              <div className='w-full rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1'>
                <div className='flex h-full w-full items-center justify-center bg-secondary_bg_color back rounded-full'>
                  <h1 className='py-2 px-4 font-bold text-white uppercase text-base'>
                    view notes
                  </h1>
                </div>
              </div>
            </div>
          </Link>
        </span>
      </section>

      {/* Discuss */}
      <section className='flex justify-center items-center flex-col-reverse lg:flex-row gap-4 bg-primary_bg_color px-4 py-32 text-center'>
        <img src='/undraw_messaging_1s2k.svg' alt='' />
        <div className='flex flex-col'>
          <h1 className='bg-gradient-to-r from-slate-200 via-slate-300 to-slate-500 inline-block text-transparent bg-clip-text text-3xl font-extrabold mt-4'>
            GPA Master now is also a platform <br /> for student community and
            discussion
          </h1>
          <p className='text-slate-400 mt-4 mb-4'>
            Write posts, doubts, questions and discussions <br /> and let your
            fellow-mates guide you
          </p>
          <div className='flex justify-center items-center'>
            <Link href='/discuss/new' className='uppercase text-white'>
              <div className='flex items-center justify-center'>
                <div className='w-full rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1'>
                  <div className='flex h-full w-full items-center justify-center bg-secondary_bg_color back rounded-full'>
                    <h1 className='py-2 px-4 font-bold text-white uppercase text-base'>
                      write post
                    </h1>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className='flex justify-center items-center bg-primary_bg_color px-4 py-32 text-center'>
        <main className='max-w-[1280px] w-full flex flex-col items-start'>
          <h1 className='bg-gradient-to-r from-slate-200 via-slate-300 to-slate-500 inline-block text-transparent bg-clip-text text-4xl font-extrabold'>
            Testimonial
          </h1>
          <p className='text-slate-400 mt-3 text-left'>
            Do&apos;nt just take our word for it - see what <br />
            actual users of our service have to say about their experience.
          </p>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full mt-8'>
            <div className='flex flex-col justify-between items-center bg-secondary_bg_color p-4 rounded-xl hover:-translate-y-2 transition'>
              <p className='text-slate-300 mb-4'>
                GPA Master has been a lifesaver for my studies! The handwritten
                notes and previous year questions helped me prepare efficiently
                for my exams. I wish I had discovered this platform earlier!
              </p>
              <div className='flex flex-col justify-center items-center'>
                <div className='relative h-16 w-16 rounded-full mb-2'>
                  <img
                    src='/images/pratham.jpg'
                    alt=''
                    className='absolute w-full h-full object-cover rounded-full'
                  />
                </div>
                <h3 className='font-extrabold text-slate-300'>Pratham</h3>
                <p className='text-slate-400'>2nd year</p>
              </div>
            </div>
            <div className='flex flex-col justify-between items-center bg-secondary_bg_color p-4 rounded-xl hover:-translate-y-2 transition'>
              <p className='text-slate-300 mb-4'>
                As a new user, I was amazed by how easy it is to find exactly
                what I need on GPA Master. The interface is clean, and the
                resources are well-organized. It&apos;s like having a personal
                academic assistant!
              </p>
              <div className='flex flex-col justify-center items-center'>
                <div className='relative h-16 w-16 rounded-full mb-2'>
                  <img
                    src='/images/unknown.jpg'
                    alt=''
                    className='absolute w-full h-full object-cover rounded-full'
                  />
                </div>
                <h3 className='font-extrabold text-slate-300'>Ayush</h3>
                <p className='text-slate-400'>2nd year</p>
              </div>
            </div>
            <div className='flex flex-col justify-between items-center bg-secondary_bg_color p-4 rounded-xl hover:-translate-y-2 transition'>
              <p className='text-slate-300 mb-4'>
                What sets GPA Master apart is its vibrant community. I&apos;ve
                connected with fellow students, shared study tips, and even
                found solutions to my doubts in the discuss section. It&apos;s
                more than just a website—it&apos;s a support system!
              </p>
              <div className='flex flex-col justify-center items-center'>
                <div className='relative h-16 w-16 rounded-full mb-2'>
                  <img
                    src='/images/shivam.png'
                    alt=''
                    className='absolute w-full h-full object-cover rounded-full'
                  />
                </div>
                <h3 className='font-extrabold text-slate-300'>Shivam</h3>
                <p className='text-slate-400'>2nd year</p>
              </div>
            </div>
            <div className='flex flex-col justify-between items-center bg-secondary_bg_color p-4 rounded-xl hover:-translate-y-2 transition'>
              <p className='text-slate-300 mb-4'>
                The blogging section on GPA Master is a fantastic addition! It
                allows me to share my study strategies and learn from
                others&apos; experiences. The platform truly fosters
                collaboration and growth among students.
              </p>
              <div className='flex flex-col justify-center items-center'>
                <div className='relative h-16 w-16 rounded-full mb-2'>
                  <img
                    src='/images/unknown.jpg'
                    alt=''
                    className='absolute w-full h-full object-cover rounded-full'
                  />
                </div>
                <h3 className='font-extrabold text-slate-300'>Aryan</h3>
                <p className='text-slate-400'>2nd year</p>
              </div>
            </div>
          </div>
        </main>
      </section>

      {/* GPA Master */}
      <section className='flex justify-center items-center bg-primary_bg_color px-4 py-32 text-center p-32 pb-64'>
        <h1 className='bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 inline-block text-transparent bg-clip-text text-5xl md:text-7xl lg:text-9xl font-extrabold'>
          For students, by the students.
        </h1>
      </section>
    </>
  )
}
