import connect from '@/lib/db'
import User from '@/lib/models/user.model'
import { NextRequest, NextResponse } from 'next/server'
import { headers } from 'next/headers'
import Razorpay from 'razorpay'

export const POST = async (request: NextRequest) => {
  const userId = (await headers()).get('userId')

  try {
    await connect()

    const foundUser = await User.findById(userId)

    const originalUrl =
      request.nextUrl.protocol +
      request.headers.get('host') +
      request.nextUrl.pathname

    if (!foundUser) return NextResponse.redirect(new URL('/auth', originalUrl))

    const instance = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID!,
      key_secret: process.env.RAZORPAY_SECRET!,
    })

    const options = {
      amount: 147 * 100, // amount in smallest currency unit
      currency: 'INR',
      receipt: userId!,
    }

    const order = await instance.orders.create(options)

    if (!order)
      return new NextResponse(
        JSON.stringify({ message: 'Something went wrong!' }),
        { status: 500 }
      )

    const response = {
      success: true,
      msg: 'Order Created',
      order_id: order.id,
      key_id: process.env.RAZORPAY_KEY_ID!,
      product_name: 'PRO',
      contact: '',
      name: foundUser.name || userId,
      email: foundUser.email || userId,
      ...order,
    }

    return new NextResponse(JSON.stringify(response), { status: 200 })
  } catch (error: any) {
    console.log({ error })
    return new NextResponse('Error in creating order' + error.message, {
      status: 500,
    })
  }
}
