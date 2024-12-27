import connect from '@/lib/db'
import User from '@/lib/models/user.model'
import { NextResponse, type NextRequest } from 'next/server'
import { cookies } from 'next/headers'
import axios from 'axios'
import qs from 'qs'
import jwt from 'jsonwebtoken'
import { IUser } from '@/types'

export const GET = async (request: NextRequest) => {
  try {
    await connect()
    // get code from qs
    const searchParams = request.nextUrl.searchParams
    const code = searchParams.get('code')
    console.log({ code })
    // get id and acess token
    const url = 'https://oauth2.googleapis.com/token'
    const values = {
      code: code,
      client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      client_secret: process.env.GOOGLECLIENTSECRET,
      redirect_uri: process.env.NEXT_PUBLIC_GOOGLE_OAUTH_REDIRECT_URL,
      grant_type: 'authorization_code',
    }
    const result = await axios.post(url, qs.stringify(values), {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    })
    console.log({ data: result.data })
    // const { id_token, access_token } = result.data
    const { id_token } = result.data
    // get user with tokens
    const user = jwt.decode(id_token) as any
    const duplicateEmail = (await User.findOne({
      email: user.email,
    }).lean()) as IUser

    if (duplicateEmail) {
      const JWT = jwt.sign(
        {
          userId: duplicateEmail._id,
          username: duplicateEmail.username,
        },
        process.env.JWT_SECRET!,
        { expiresIn: process.env.JWT_TTL }
      )

      const cookieStore = await cookies()
      cookieStore.set({
        name: 'jwt',
        value: JWT,
        httpOnly: true,
        sameSite: 'lax',
        maxAge: 30 * 24 * 60 * 60,
      })

      // res.cookie('jwt', JWT, {
      //   httpOnly: true,
      //   sameSite: 'lax',
      //   maxAge: 30 * 24 * 60 * 60 * 1000,
      // })

      // res.redirect('/')
      // return
      return NextResponse.redirect(new URL('/', request.url))
    }

    const userObject = {
      name: user.name as string,
      email: user.email as string,
      avatar: user.picture as string,
      username: `${user.email.match(/^([^@]*)@/)[1]}`,
    }
    const newUser = await User.create(userObject)
    if (!newUser) {
      return new NextResponse(
        JSON.stringify({
          message: 'Invalid user data received, could not create user',
        }),
        { status: 400 }
      )
    }
    const JWT = jwt.sign(
      {
        userId: newUser._id,
        username: userObject.username,
      },
      process.env.JWT_SECRET!,
      {
        expiresIn: process.env.JWT_TTL,
      }
    )

    const cookieStore = await cookies()
    cookieStore.set({
      name: 'jwt',
      value: JWT,
      httpOnly: true,
      sameSite: 'lax',
      maxAge: 30 * 24 * 60 * 60,
    })
    return NextResponse.redirect(new URL('/', request.url))
  } catch (error: any) {
    return new NextResponse('Error in fetching users' + error.message, {
      status: 500,
    })
  }
}
