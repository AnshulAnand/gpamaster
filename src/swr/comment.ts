'use client'

import useSWR from 'swr'
import useSWRMutation from 'swr/mutation'
import { DELETE, GET, PATCH, POST } from '@/lib/fetch'
import { IComment } from '@/types'

// GET Comments
export function useComments(
  page: number,
  limit: number,
  postId: string,
  user?: string
) {
  const URL = !user
    ? `/api/comment?page=${page}&limit=${limit}&postId=${postId}`
    : `/api/comment?page=${page}&limit=${limit}&postId=${postId}&user=${user}`

  const { data, error, isLoading } = useSWR(URL, GET)

  return {
    data: data as Array<IComment>,
    isLoading,
    isError: error,
  }
}

// POST Comment
export function useMutateComment() {
  const { trigger, isMutating, data, error } = useSWRMutation(
    `/api/comment/create`,
    POST
  )
  return {
    triggerCommentMutate: trigger,
    commentError: error,
    isCommentMutating: isMutating,
  }
}
