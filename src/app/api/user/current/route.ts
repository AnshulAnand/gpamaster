import connect from '@/lib/db'
import User from '@/lib/models/user.model'
import { NextRequest, NextResponse } from 'next/server'
import { headers } from 'next/headers'

export const GET = async (request: NextRequest) => {
  const userId = (await headers()).get('userId')
  console.log({ userId })
  try {
    await connect()
    const user = await User.findById(userId)
    return new NextResponse(JSON.stringify(user), { status: 200 })
  } catch (error: any) {
    return new NextResponse('Error in fetching users' + error.message, {
      status: 500,
    })
  }
}
