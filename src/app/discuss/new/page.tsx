'use client'

import { useMutatePost } from '@/swr/post'
import { useRouter } from 'next/navigation'
import { SetStateAction, useEffect, useState } from 'react'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { storage } from '@/firebase'
import { IPost } from '@/types'
import { nanoid } from 'nanoid'
import toast from 'react-hot-toast'
import useCurrentUser from '@/swr/user'
import PageLoadingSkeleton from '@/components/Skeletons/PageLoadingSkeleton'

const Page = () => {
  const router = useRouter()
  const { currentUser, isError, isLoading } = useCurrentUser()
  const { triggerPostMutate, postError, isPostMutating } = useMutatePost()

  console.log({ currentUser })

  const [postData, setPostData] = useState({
    title: '',
    tag1: '',
    tag2: '',
    tag3: '',
    tag4: '',
    image: '',
  })
  const [textarea, setTextarea] = useState('')
  const [image, setImage] = useState<any>()

  useEffect(() => {
    if (!image) return

    const imgName = `images/${nanoid()}`
    const imgRef = ref(storage, imgName)
    uploadBytes(imgRef, image).then(() => {
      getDownloadURL(imgRef).then(url => {
        setPostData(prevPostData => ({ ...prevPostData, image: url }))
      })
    })
  }, [image])

  if (isLoading) return <PageLoadingSkeleton />

  if (!currentUser) {
    router.push('/auth')
    return
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name
    const value = e.target.value
    setPostData(prevPostData => ({ ...prevPostData, [name]: value }))
  }

  const handleTextareaChange = (event: {
    target: { value: SetStateAction<string> }
  }) => {
    setTextarea(event.target.value)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const result: IPost = await triggerPostMutate({
        body: {
          title: postData.title,
          body: textarea,
          image: postData.image,
          tags: [postData.tag1, postData.tag2, postData.tag3, postData.tag4],
        },
      })
      toast.success('Post created successfully')
      router.push(`/discuss/${result._id}`)
    } catch (e) {
      // error handling
      console.log(e)
      toast.error('Error, Could not create post')
      console.log('could not post')
    }
  }

  return (
    <section className='flex flex-col justify-center items-center bg-primary_bg_color px-4 pt-4 pb-16 mt-[72px] text-center text-slate-300 relative'>
      <main className='flex flex-col items-center justify-between max-w-4xl w-full mx-auto gap-6'>
        <form className='w-full'>
          <input
            type='text'
            name='title'
            value={postData.title || ''}
            onChange={handleChange}
            placeholder='Title of your post'
            className='w-full p-4 bg-secondary_bg_color text-slate-300 rounded'
          />

          {postData.image ? (
            <img
              src={postData.image}
              alt={postData.title}
              className='mt-4 rounded'
            />
          ) : (
            <div className='flex items-center justify-center w-full mt-4 rounded'>
              <label
                htmlFor='dropzone-file'
                className='flex flex-col items-center justify-center w-full h-64 border-2 border-dashed cursor-pointer dark:hover:bg-gray-800 bg-gray-700  border-gray-600 hover:border-gray-500 transition rounded'
              >
                <div className='flex flex-col items-center justify-center pt-5 pb-6 rounded'>
                  <svg
                    className='w-8 h-8 mb-4 text-gray-500 dark:text-gray-400'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 20 16'
                  >
                    <path
                      stroke='currentColor'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      d='M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2'
                    />
                  </svg>
                  <p className='mb-2 text-sm text-gray-500 dark:text-gray-400'>
                    <span className='font-semibold'>Click to upload</span> cover
                    image for post (optional)
                  </p>
                  <p className='text-xs text-gray-500 dark:text-gray-400'>
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </p>
                </div>
                <input
                  id='dropzone-file'
                  type='file'
                  className='hidden'
                  // @ts-ignore
                  onChange={e => setImage(e.target.files[0])}
                />
              </label>
            </div>
          )}

          <div className='grid grid-cols-4 gap-4 mt-4'>
            <input
              name='tag1'
              type='text'
              placeholder='Tag'
              onChange={handleChange}
              value={postData.tag1 || ''}
              className='w-full p-4 bg-secondary_bg_color text-slate-300 rounded'
            />
            <input
              name='tag2'
              type='text'
              placeholder='Tag'
              onChange={handleChange}
              value={postData.tag2 || ''}
              className='w-full p-4 bg-secondary_bg_color text-slate-300 rounded'
            />
            <input
              name='tag3'
              type='text'
              placeholder='Tag'
              onChange={handleChange}
              value={postData.tag3 || ''}
              className='w-full p-4 bg-secondary_bg_color text-slate-300 rounded'
            />
            <input
              name='tag4'
              type='text'
              placeholder='Tag'
              onChange={handleChange}
              value={postData.tag4 || ''}
              className='w-full p-4 bg-secondary_bg_color text-slate-300 rounded'
            />
          </div>

          <textarea
            rows={20}
            name='body'
            value={textarea}
            onChange={handleTextareaChange}
            placeholder='Start writing you post here...'
            className='w-full bg-secondary_bg_color text-slate-300 p-4 mt-4 rounded'
          />

          <button
            onClick={handleSubmit}
            className='bg-secondary_bg_color text-slate-400 hover:text-slate-300 transition py-2 px-4 mt-4 rounded-full'
          >
            Submit
          </button>
        </form>
      </main>
    </section>
  )
}
export default Page
