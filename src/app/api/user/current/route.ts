import connect from '@/lib/db'
import User from '@/lib/models/user.model'
import { NextRequest, NextResponse } from 'next/server'
import { headers } from 'next/headers'

export const GET = async (request: NextRequest) => {
  const userId = (await headers()).get('userId')
  try {
    await connect()
    const user = await User.findById(userId)
    return new NextResponse(JSON.stringify(user), { status: 200 })
  } catch (error: any) {
    return new NextResponse('Error in fetching user' + error.message, {
      status: 500,
    })
  }
}

export const POST = async (request: NextRequest) => {
  const userId = (await headers()).get('userId')
  const body = await request.json()

  if (!body.name || !body.bio || !userId)
    return new NextResponse(
      JSON.stringify({ message: 'Name, Bio and UserID not received' }),
      { status: 400 }
    )

  try {
    await connect()

    const user = await User.findById(userId)

    if (!user)
      return new NextResponse(
        JSON.stringify({ message: 'Could not find user, try again later' }),
        { status: 400 }
      )

    user.name = body.name
    user.bio = body.bio

    const updatedUser = await user.save()

    return new NextResponse(JSON.stringify(updatedUser), { status: 200 })
  } catch (error: any) {
    return new NextResponse('Error in updating user' + error.message, {
      status: 500,
    })
  }
}
