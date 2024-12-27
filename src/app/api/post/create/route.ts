import connect from '@/lib/db'
import User from '@/lib/models/user.model'
import { NextRequest, NextResponse } from 'next/server'
import { headers } from 'next/headers'
import Post from '@/lib/models/post.model'

export const POST = async (request: NextRequest) => {
  const userId = (await headers()).get('userId')
  const body = await request.json()
  console.log({ userId, body })

  if (!body.title || !body.body || !userId)
    return new NextResponse(
      JSON.stringify({ message: 'Title, Body and UserID not received' }),
      { status: 400 }
    )

  try {
    await connect()

    const postObject = {
      user: userId,
      title: body.title,
      tags: body.tags,
      body: body.body,
      image: body.image,
    }

    const newPost = await Post.create(postObject)

    if (!newPost)
      return new NextResponse(
        JSON.stringify({ message: 'Could not create post, try again later' }),
        { status: 400 }
      )

    await User.findByIdAndUpdate(userId, {
      $inc: { posts: 1 },
    }).exec()

    return new NextResponse(JSON.stringify(newPost), { status: 200 })
  } catch (error: any) {
    return new NextResponse('Error in fetching users' + error.message, {
      status: 500,
    })
  }
}
