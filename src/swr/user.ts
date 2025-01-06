'use client'

import useSWR from 'swr'
import useSWRMutation from 'swr/mutation'
import { GET, PATCH, POST } from '@/lib/fetch'
import { IUser } from '@/types'

// GET current user
export default function useCurrentUser() {
  const { data, error, isLoading } = useSWR(`/api/user/current`, GET)
  return {
    currentUser: data as IUser,
    isLoading,
    isError: error,
  }
}

// GET user by id
export function useUserById(id: string, type: string) {
  console.log(`/api/user/${id}?type=${type}`)

  const { data, error, isLoading } = useSWR(`/api/user/${id}?type=${type}`, GET)

  return {
    user: data as IUser,
    isLoading,
    isError: error,
  }
}

// POST User
export function useMutateUser() {
  const { trigger, isMutating, data, error } = useSWRMutation(
    `/api/user/current`,
    POST
  )
  return {
    triggerUserMutate: trigger,
    userError: error,
    isUserMutating: isMutating,
  }
}
