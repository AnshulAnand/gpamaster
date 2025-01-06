import { NextRequest, NextResponse } from 'next/server'
import { headers, cookies } from 'next/headers'

export const GET = async (request: NextRequest) => {
  try {
    const userId = (await headers()).get('userId')
    const cookieStore = await cookies()
    const JWT = cookieStore.get('jwt')?.value
    console.log({ userId, JWT })
    if (JWT && userId) cookieStore.delete('jwt')
    return NextResponse.redirect(new URL('/', request.url))
  } catch (error: any) {
    return new NextResponse(
      'Error in logging out the session' + error.message,
      {
        status: 500,
      }
    )
  }
}
