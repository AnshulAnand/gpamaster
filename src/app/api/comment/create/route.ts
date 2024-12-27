import connect from '@/lib/db'
import { NextRequest, NextResponse } from 'next/server'
import { headers } from 'next/headers'
import Post from '@/lib/models/post.model'
import Comment from '@/lib/models/comment.model'

export const POST = async (request: NextRequest) => {
  const userId = (await headers()).get('userId')
  const body = await request.json()
  console.log({ userId, body })

  if (!body.post || !body.body || !userId)
    return new NextResponse(
      JSON.stringify({ message: 'PostID, Body and UserID not received' }),
      { status: 400 }
    )

  try {
    await connect()

    const commentObject = {
      user: userId,
      post: body.post,
      body: body.body,
    }

    const newComment = await Comment.create(commentObject)

    if (!newComment)
      return new NextResponse(
        JSON.stringify({
          message: 'Could not create comment, try again later',
        }),
        { status: 400 }
      )

    await Post.findByIdAndUpdate(body.post, {
      $inc: { comments: 1 },
    }).exec()

    return new NextResponse(JSON.stringify(newComment), { status: 200 })
  } catch (error: any) {
    return new NextResponse('Error in fetching users' + error.message, {
      status: 500,
    })
  }
}
