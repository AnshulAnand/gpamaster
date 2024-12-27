import connect from '@/lib/db'
import User from '@/lib/models/user.model'
import { NextRequest, NextResponse } from 'next/server'

export const GET = async (
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) => {
  const username = (await params).id
  try {
    await connect()
    const user = await User.findOne({ username })
    return new NextResponse(JSON.stringify(user), { status: 200 })
  } catch (error: any) {
    return new NextResponse('Error in fetching users' + error.message, {
      status: 500,
    })
  }
}
