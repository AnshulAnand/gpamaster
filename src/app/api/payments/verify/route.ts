import connect from '@/lib/db'
import User from '@/lib/models/user.model'
import { NextRequest, NextResponse } from 'next/server'
import { headers } from 'next/headers'
import crypto from 'crypto'
import dayjs from 'dayjs'

export const POST = async (request: NextRequest) => {
  const userId = (await headers()).get('userId')
  const foundUser = await User.findById(userId)

  const originalUrl =
    request.nextUrl.protocol +
    request.headers.get('host') +
    request.nextUrl.pathname

  if (!foundUser) return NextResponse.redirect(new URL('/auth', originalUrl))

  try {
    await connect()

    // getting the details back from our font-end
    const {
      orderCreationId,
      razorpayPaymentId,
      razorpayOrderId,
      razorpaySignature,
    } = await request.json()

    // Creating our own digest
    // The format should be like this:
    // digest = hmac_sha256(orderCreationId + "|" + razorpayPaymentId, secret);
    const shasum = crypto.createHmac('sha256', process.env.RAZORPAY_SECRET!)

    shasum.update(`${orderCreationId}|${razorpayPaymentId}`)

    const digest = shasum.digest('hex')

    // comaparing our digest with the actual signature
    if (digest !== razorpaySignature)
      return new NextResponse(
        JSON.stringify({ message: 'Transaction not legit!' }),
        {
          status: 400,
        }
      )

    // THE PAYMENT IS LEGIT & VERIFIED
    // SAVE THE DETAILS IN YOUR DATABASE

    foundUser.paymentStatus = true
    foundUser.lastPaymentDate = dayjs().format('YYYY-DD-MM')
    foundUser.paymentId = razorpayPaymentId

    await foundUser.save()

    return new NextResponse(
      JSON.stringify({
        message: 'success',
        orderId: razorpayOrderId,
        paymentId: razorpayPaymentId,
      }),
      { status: 200 }
    )
  } catch (error: any) {
    return new NextResponse('Error in verifying purchase' + error.message, {
      status: 500,
    })
  }
}
