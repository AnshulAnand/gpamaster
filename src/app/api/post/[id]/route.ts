import connect from '@/lib/db'
import User from '@/lib/models/user.model'
import Post from '@/lib/models/post.model'
import { NextRequest, NextResponse } from 'next/server'

export const GET = async (
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) => {
  const id = (await params).id

  try {
    await connect()
    const post = await Post.findById(id)

    if (!post)
      return new NextResponse(JSON.stringify({ message: 'Post not found' }), {
        status: 400,
      })

    await User.findByIdAndUpdate(post.user, {
      $inc: { views: 1 },
    }).exec()

    post.views += 1
    await post.save()

    return new NextResponse(JSON.stringify(post), { status: 200 })
  } catch (error: any) {
    return new NextResponse('Error in fetching post' + error.message, {
      status: 500,
    })
  }
}
