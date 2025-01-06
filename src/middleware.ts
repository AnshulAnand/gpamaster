import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { cookies } from 'next/headers'
// import jwt from 'jsonwebtoken'
// import { SignJWT, jwtVerify, type JWTPayload } from 'jose'
import * as jose from 'jose'

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const cookieStore = await cookies()
  const JWT = cookieStore.get('jwt')?.value

  if (!JWT) return NextResponse.redirect(new URL('/auth', request.url))

  const secret = new TextEncoder().encode(process.env.JWT_SECRET!)

  const { payload, protectedHeader } = await jose.jwtVerify(JWT, secret)

  const newHeaders = new Headers(request.headers)

  const data = payload as { userId: string; username: string }

  newHeaders.set('userId', data.userId)
  newHeaders.set('username', data.username)

  return NextResponse.next({
    request: {
      headers: newHeaders,
    },
  })

  // jwt.verify(JWT, process.env.JWT_SECRET!, (err, decoded) => {
  //   if (err) {
  //     console.log({ err })
  //     return NextResponse.redirect(new URL('/auth', request.url))
  //   }

  //   const newHeaders = new Headers(request.headers)

  //   const data = decoded as { userId: string; username: string }

  //   newHeaders.set('userId', data.userId)
  //   newHeaders.set('username', data.username)

  //   console.log({ newHeaders })

  //   return NextResponse.next({
  //     request: {
  //       headers: newHeaders,
  //     },
  //   })
  // req.user = decoded
  // next()
  // })

  return NextResponse.redirect(new URL('/home', request.url))
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/api/user/current',
    '/api/user/logout',
    '/api/post/create',
    '/api/comment/create',
    '/api/payments/orders',
    '/api/payments/verify',
  ],
}
