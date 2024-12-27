import connect from '@/lib/db'
import Comment from '@/lib/models/comment.model'
import { NextRequest, NextResponse } from 'next/server'

export const GET = async (request: NextRequest) => {
  const searchParams = request.nextUrl.searchParams
  const user = searchParams.get('userId') as string
  const post = searchParams.get('postId') as string
  const page = parseInt(searchParams.get('page') as string)
  const limit = parseInt(searchParams.get('limit') as string)
  const skip = (page - 1) * limit

  console.log({ user, post, page, limit, skip })

  type SearchQuery = {
    user?: string
    post: string
  }

  const searchQuery: SearchQuery = { post }

  if (user) searchQuery.user = user

  console.log({ searchQuery })

  try {
    await connect()
    const comments = await Comment.find(searchQuery)
      .sort({ _id: -1 })
      .limit(limit)
      .skip(skip)
      .exec()
    return new NextResponse(JSON.stringify(comments), { status: 200 })
  } catch (error: any) {
    return new NextResponse('Error in fetching users' + error.message, {
      status: 500,
    })
  }
}
