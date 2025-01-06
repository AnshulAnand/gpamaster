'use client'

import { returnDate } from '@/lib/utils'
import useCurrentUser, { useUserById } from '@/swr/user'
import UserProfileSkeleton from '../Skeletons/UserProfileSkeleton'
import { LuPencil } from 'react-icons/lu'
import Link from 'next/link'

const Profile = ({ id }: { id: string }) => {
  const currentUser = useCurrentUser()
  const { user, isError, isLoading } = useUserById(id, 'username')

  console.log({ user })

  if (isLoading) return <UserProfileSkeleton />

  return (
    <div className='bg-secondary_bg_color p-4 md:p-6 pt-[120px] mt-[30px] rounded-[10px]'>
      {currentUser.currentUser ? (
        <Link
          href='/user/update'
          className='absolute top-10 right-4 flex justify-center items-center bg-primary_bg_color p-4 rounded-full hover:scale-105 transition'
        >
          <LuPencil className='text-slate-300 text-lg' />
        </Link>
      ) : null}

      <div className='absolute top-0 left-1/2 -translate-x-1/2'>
        <div className='relative h-[130px] w-[130px] rounded-[8px]'>
          <img
            src={user.avatar}
            alt={user.name}
            className='absolute w-full h-full object-cover rounded-[8px]'
          />
        </div>
      </div>
      <h1 className='md:mt-24 font-bold text-xl'>
        {user.name}{' '}
        {user.paymentStatus && (
          <span className='bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 inline-block text-transparent bg-clip-text font-extrabold border border-yellow-300 rounded-xl px-2'>
            PRO
          </span>
        )}
      </h1>
      <div className='grid md:grid-cols-2 gap-6 mt-8 md:mx-28'>
        <div className='flex flex-col md:justify-end md:items-end gap-3'>
          <span>
            <span className='font-bold mr-2'>Username:</span>@{user.username}
          </span>
          <span>
            <span className='font-bold mr-2'>Joined:</span>
            {returnDate(user)}
          </span>
          <span>
            <span className='font-bold mr-2'>No.of posts made:</span>
            {user.posts}
          </span>
          <span>
            <span className='font-bold mr-2'>Total views:</span>
            {user.views}
          </span>
        </div>
        <div className='md:text-left'>
          <p className='font-bold'>Bio:</p>
          <p className='whitespace-pre-wrap'>
            {user.bio ? user.bio : 'This account has no bio...'}
          </p>
        </div>
      </div>
    </div>
  )
}
export default Profile
