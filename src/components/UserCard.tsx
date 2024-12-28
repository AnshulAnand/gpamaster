'use client'

import { useUserById } from '@/swr/user'
import Link from 'next/link'

type Props = {
  id: string
  date: string
  views: number
}

export const UserCard = ({ id, date, views }: Props) => {
  console.log({ id, date, views })

  const { user, isError, isLoading } = useUserById(id, 'id')

  console.log({ user })

  if (isLoading) return <p>loading...</p>

  return (
    <div className='flex justify-between items-center'>
      <Link href={`/user/${user.username}`} className='flex gap-4 items-center'>
        <div className='relative h-14 w-14 rounded'>
          <img
            src={user.avatar}
            alt={user.name}
            className='absolute w-full h-full object-cover rounded'
          />
        </div>
        <div>
          <p>by {user.name}</p>
          <p className='text-slate-400'>{`${date}`}</p>
        </div>
      </Link>
      <p className='text-slate-400'>{views} views</p>
    </div>
  )
}
