'use client'

import { useUserById } from '@/swr/user'

const Profile = ({ id }: { id: string }) => {
  const { user, isError, isLoading } = useUserById(id, 'username')

  console.log({ user })

  if (isLoading) return <p>loading...</p>

  return (
    <div className='bg-secondary_bg_color p-6 pt-[120px] mt-[30px] rounded-[10px]'>
      <div className='absolute top-0 left-1/2 -translate-x-1/2'>
        <div className='relative h-[130px] w-[130px] rounded-[8px]'>
          <img
            src={user.avatar}
            alt={user.name}
            className='absolute w-full h-full object-cover rounded-[8px]'
          />
        </div>
      </div>
      <h1 className='font-bold text-xl'>
        {user.name}{' '}
        {user.paymentStatus && (
          <span className='bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 inline-block text-transparent bg-clip-text font-extrabold border border-yellow-300 rounded-xl px-2'>
            PRO
          </span>
        )}
      </h1>
      <div className='grid grid-cols-2 gap-6 mt-8 mx-28'>
        <div className='flex flex-col justify-end items-end gap-3'>
          <span>
            <span className='font-bold mr-2'>Username:</span>@{user.username}
          </span>
          <span>
            <span className='font-bold mr-2'>Joined:</span>
            {`${user.createdAt}`}
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
        <div className='text-left'>
          <p className='font-bold'>Bio:</p>
          <p>{user.bio ? user.bio : 'This account has no bio...'}</p>
        </div>
      </div>
      <p className='mt-8 text-center'>{user.bio}</p>
    </div>
  )
}
export default Profile
