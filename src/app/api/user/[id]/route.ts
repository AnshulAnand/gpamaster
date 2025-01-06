import connect from '@/lib/db'
import User from '@/lib/models/user.model'
import { NextRequest, NextResponse } from 'next/server'

type Props = { params: Promise<{ id: string }> }

export const GET = async (request: NextRequest, { params }: Props) => {
  const searchParams = request.nextUrl.searchParams
  const typeOfIdentification = searchParams.get('type')
  const id = (await params).id

  type SearchObject = {
    _id?: string
    username?: string
  }

  const searchObject: SearchObject = {}

  if (typeOfIdentification === 'id') searchObject._id = id
  else searchObject.username = id

  try {
    await connect()
    const user = await User.findOne(searchObject)
    return new NextResponse(JSON.stringify(user), { status: 200 })
  } catch (error: any) {
    return new NextResponse('Error in fetching user' + error.message, {
      status: 500,
    })
  }
}
