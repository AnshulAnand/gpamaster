'use client'

import { returnDate } from '@/lib/utils'
import { useUserById } from '@/swr/user'
import { IComment } from '@/types'
import Link from 'next/link'

const Profile = ({ id, comment }: { id: string; comment: IComment }) => {
  const { user, isError, isLoading } = useUserById(id, 'id')

  console.log({ user })

  if (isLoading) return <p>loading...</p>

  return (
    <Link href={`/user/${user.username}`} className='flex gap-4 items-center'>
      <div className='relative h-14 w-14 rounded'>
        <img
          src={user.avatar}
          className='absolute w-full h-full object-cover rounded'
          alt=''
        />
      </div>
      <div>
        <p>by {user.name}</p>
        <p className='text-slate-400'>{returnDate(comment)}</p>
      </div>
    </Link>
  )
}
export default Profile
