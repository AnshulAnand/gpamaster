'use client'

import { useRouter } from 'next/navigation'
import { SetStateAction, useState } from 'react'
import { IUser } from '@/types'
import useCurrentUser, { useMutateUser } from '@/swr/user'
import toast from 'react-hot-toast'

const Page = () => {
  const router = useRouter()

  const currentUser = useCurrentUser()

  const [userData, setUserData] = useState({
    name: currentUser.currentUser.name,
  })
  const [textarea, setTextarea] = useState(currentUser.currentUser.bio)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name
    const value = e.target.value
    setUserData(prevUserData => ({ ...prevUserData, [name]: value }))
  }

  const handleTextareaChange = (event: {
    target: { value: SetStateAction<string> }
  }) => {
    setTextarea(event.target.value)
  }

  const { triggerUserMutate, userError, isUserMutating } = useMutateUser()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const result: IUser = await triggerUserMutate({
        body: {
          name: userData.name,
          bio: textarea,
        },
      })
      toast.success('Profile updated')
      router.push(`/user/${result.username}`)
    } catch (e) {
      // error handling
      console.log('could not update user')
      console.log(e)
      toast.error('Error, Could not update profile')
    }
  }

  return (
    <section className='flex flex-col justify-center items-center bg-primary_bg_color px-4 pt-4 pb-16 mt-[72px] text-center text-slate-300 relative'>
      <main className='flex flex-col items-center justify-between max-w-4xl w-full mx-auto gap-6'>
        <form className='w-full'>
          <input
            type='text'
            name='name'
            value={userData.name || ''}
            onChange={handleChange}
            placeholder='Edit your name'
            className='w-full p-4 bg-secondary_bg_color text-slate-300 rounded'
          />
          <textarea
            rows={10}
            name='body'
            value={textarea}
            onChange={handleTextareaChange}
            placeholder='Start writing your bio here...'
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
