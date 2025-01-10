import { NextRequest, NextResponse } from 'next/server'
import { headers, cookies } from 'next/headers'

export const GET = async (request: NextRequest) => {
  try {
    const userId = (await headers()).get('userId')
    const cookieStore = await cookies()
    const JWT = cookieStore.get('jwt')?.value
    console.log({ userId, JWT })
    if (JWT && userId) cookieStore.delete('jwt')
    const originalUrl =
      request.nextUrl.protocol +
      request.headers.get('host') +
      request.nextUrl.pathname
    // console.log(new URL('/', request.url))
    return NextResponse.redirect(new URL('/', originalUrl))
  } catch (error: any) {
    return new NextResponse(
      'Error in logging out the session' + error.message,
      {
        status: 500,
      }
    )
  }
}
