import connect from '@/lib/db'
import Post from '@/lib/models/post.model'
import { NextRequest, NextResponse } from 'next/server'

export const GET = async (request: NextRequest) => {
  const searchParams = request.nextUrl.searchParams
  const user = searchParams.get('userId')
  const page = parseInt(searchParams.get('page') as string)
  const limit = parseInt(searchParams.get('limit') as string)
  const skip = (page - 1) * limit

  console.log({ user, page, limit, skip })

  type SearchQuery = {
    user?: string
  }

  const searchQuery: SearchQuery = {}

  if (user) searchQuery.user = user

  console.log({ searchQuery })

  try {
    await connect()
    const posts = await Post.find(searchQuery)
      .sort({ _id: -1 })
      .limit(limit)
      .skip(skip)
      .exec()

    return new NextResponse(JSON.stringify(posts), { status: 200 })
  } catch (error: any) {
    return new NextResponse('Error in fetching posts' + error.message, {
      status: 500,
    })
  }
}
