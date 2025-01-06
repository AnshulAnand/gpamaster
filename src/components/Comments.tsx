'use client'

import { useComments, useMutateComment } from '@/swr/comment'
import { IComment, IPost } from '@/types'
import { SetStateAction, useState } from 'react'
import Profile from './CommentProfile'
import { nanoid } from 'nanoid'
import useCurrentUser from '@/swr/user'
import toast from 'react-hot-toast'

type FetchPostCommentsProps = {
  page: number
  postId: string
}

const FetchPostComments = ({ page, postId }: FetchPostCommentsProps) => {
  const currentUser = useCurrentUser()
  const { data, isError, isLoading } = useComments(page, 4, postId)

  console.log({ data })
  if (isLoading) return <p>loading...</p>
  if (currentUser.isLoading) return <p>loading...</p>
  if (isError) return <h1>{isError.info.message}</h1>
  return data.map((comment: IComment, i: number) => (
    <div
      key={i}
      className={`${
        currentUser.currentUser && comment.user === currentUser.currentUser._id
          ? 'hidden'
          : 'block'
      } text-left bg-secondary_bg_color p-4 rounded mb-4`}
    >
      <div className='flex justify-between items-center'>
        <Profile id={comment.user} comment={comment} />
      </div>
      <p className='mt-4 whitespace-pre-wrap'>{comment.body}</p>
    </div>
  ))
}

type FetchUserCommentsProps = {
  page: number
  postId: string
}

const FetchUserComments = ({ page, postId }: FetchUserCommentsProps) => {
  const currentUser = useCurrentUser()
  const { data, isError, isLoading } = useComments(
    page,
    4,
    postId,
    currentUser.currentUser._id
  )

  console.log({ FetchUserComments: data })
  if (isLoading) return <p>loading...</p>
  if (currentUser.isLoading) return <p>loading...</p>
  if (isError) return <h1>{isError.info.message}</h1>
  return data.map((comment: IComment, i: number) => (
    <div key={i} className={`text-left bg-secondary_bg_color p-4 rounded mb-4`}>
      <div className='flex justify-between items-center'>
        <Profile id={comment.user} comment={comment} />
      </div>
      <p className='mt-4 whitespace-pre-wrap'>{comment.body}</p>
    </div>
  ))
}

type Props = {
  post: IPost
}

const Comments = ({ post }: Props) => {
  const [count, setCount] = useState(1)
  const [textarea, setTextarea] = useState('')
  const currentUser = useCurrentUser()
  console.log({ currentUser: currentUser.currentUser })

  const { triggerCommentMutate, commentError, isCommentMutating } =
    useMutateComment()

  const handleTextareaChange = (event: {
    target: { value: SetStateAction<string> }
  }) => {
    setTextarea(event.target.value)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const result: IComment = await triggerCommentMutate({
        body: {
          body: textarea,
          post: post._id,
        },
      })
      toast.success('Comment added successfully')
      console.log({ result })
      setTextarea('')
    } catch (e) {
      // error handling
      console.log(e)
      toast.error('Error, Could not post comment')
      console.log('could not post')
    }
  }

  const userCommentsList: Array<any> = []
  for (let i = 0; i < count; i++) {
    if (currentUser.currentUser && currentUser.currentUser._id) {
      userCommentsList.push(
        <FetchUserComments key={nanoid()} page={i + 1} postId={post._id} />
      )
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const commentsList: Array<any> = []
  for (let i = 0; i < count; i++) {
    commentsList.push(
      <FetchPostComments key={nanoid()} page={i + 1} postId={post._id} />
    )
  }

  return (
    <div className='mt-4 rounded'>
      <h2 className='text-2xl font-bold text-left mb-4'>
        Comments ({post.comments})
      </h2>
      <div className='grid md:grid-cols-6 gap-2 mb-4 rounded'>
        <textarea
          rows={5}
          name='textarea'
          value={textarea}
          onChange={handleTextareaChange}
          className='bg-secondary_bg_color p-4 text-slate-300 col-span-5 rounded'
        />
        <button
          onClick={handleSubmit}
          className='bg-blue-900 h-12 hover:bg-blue-800 transition rounded-full'
        >
          Post
        </button>
      </div>
      {userCommentsList}
      {commentsList}

      <button
        onClick={() => setCount(count + 1)}
        className='uppercase text-white hover:scale-105 transition'
      >
        <div className='flex items-center justify-center'>
          <div className='w-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1 rounded-md'>
            <div className='flex h-full w-full items-center justify-center bg-secondary_bg_color back rounded-md'>
              <h1 className='py-2 px-4 font-bold text-white uppercase text-sm'>
                load more
              </h1>
            </div>
          </div>
        </div>
      </button>
    </div>
  )
}
export default Comments
