'use client'

import useSWR from 'swr'
import useSWRMutation from 'swr/mutation'
import { DELETE, GET, PATCH, POST } from '@/lib/fetch'
import { IPost } from '@/types'

// GET Posts
export function usePosts(page: number, limit: number, user?: string) {
  const URL = !user
    ? `/api/post?page=${page}&limit=${limit}`
    : `/api/post?page=${page}&limit=${limit}&user=${user}`

  const { data, error, isLoading } = useSWR(URL, GET)

  return {
    data: data as Array<IPost>,
    isLoading,
    isError: error,
  }
}
