'use client'

import axios from 'axios'
import { GiFullPizza } from 'react-icons/gi'
import { useRouter } from 'next/navigation'
import useCurrentUser from '@/swr/user'
import dayjs from 'dayjs'

const Page = () => {
  const { push } = useRouter()

  const { currentUser, isError, isLoading } = useCurrentUser()

  console.log({ currentUser })

  if (isLoading) return <p>loading...</p>

  if (!currentUser) {
    push('/auth')
    return
  }

  const date1 = dayjs(dayjs().format('YYYY-DD-MM'))
  const dateDiff = date1.diff(currentUser.lastPaymentDate, 'day')

  if (currentUser.paymentStatus && dateDiff < 120) {
    push('/')
    return
  }

  function loadScript(src: string) {
    return new Promise(resolve => {
      const script = document.createElement('script')
      script.src = src
      script.onload = () => {
        resolve(true)
      }
      script.onerror = () => {
        resolve(false)
      }
      document.body.appendChild(script)
    })
  }

  async function displayRazorpay() {
    const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

    if (!res) {
      alert('Razorpay SDK failed to load. Are you online?')
      return
    }

    // creating a new order
    const result = await axios.post('/api/payments/orders', {
      withCredentials: true,
    })

    if (!result) {
      alert('Server error. Are you online?')
      return
    }

    console.log({ result: result.data })

    // Getting the order details back
    const { amount, id: order_id, currency, name, email, key_id } = result.data

    const options = {
      key: key_id, // Enter the Key ID generated from the Dashboard
      amount: amount.toString(),
      currency: currency,
      name: 'GPA Master',
      description: 'GPA Master PRO',
      order_id: order_id,
      handler: async function (response: {
        razorpay_payment_id: any
        razorpay_order_id: any
        razorpay_signature: any
      }) {
        const data = {
          orderCreationId: order_id,
          razorpayPaymentId: response.razorpay_payment_id,
          razorpayOrderId: response.razorpay_order_id,
          razorpaySignature: response.razorpay_signature,
        }

        const result = await axios.post('/api/payments/verify', data, {
          withCredentials: true,
        })

        push('/')
      },
      prefill: {
        name: name,
        email: email,
        contact: '',
      },
      theme: {
        color: '#F37254',
      },
    }

    // @ts-ignore
    const rzp = new window.Razorpay(options)
    rzp.open()
  }
  return (
    <section className='flex flex-col justify-center items-center bg-primary_bg_color px-4 py-24 mt-[64px] text-center'>
      <div className='text-slate-300 flex justify-center gap-2 mb-4'>
        <span className='text-4xl mt-1'>&#8377;</span>
        <h1 className='bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 inline-an cblock text-transparent bg-clip-text text-7xl font-extrabold'>
          199
        </h1>
        <h2 className='font-bold text-red-500 text-5xl ml-2 mt-3 line-through'>
          249
        </h2>
      </div>
      <div className='text-slate-300 flex flex-col lg:flex-row justify-center items-center'>
        <span className='text-slate-300 flex justify-center items-center'>
          <p className='text-slate-300'>Just at the cost of one single pizza</p>
          <GiFullPizza className='text-4xl mx-1 text-orange-400' />
        </span>
        <p className='text-slate-300'>
          (which you&apos;ll probably devour in weekend ;)
        </p>
      </div>
      <main className='grid lg:grid-cols-3 gap-14 max-w-5xl w-full text-slate-300 bg-secondary_bg_color p-8 rounded-[8px] mt-6'>
        <div className='flex flex-col justify-between'>
          <h2 className='text-left bg-gradient-to-r from-slate-300 to-slate-400 inline-block text-transparent bg-clip-text text-4xl font-bold'>
            GPA Master <br />
            <span className='bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 inline-block text-transparent bg-clip-text text-8xl lg:text-9xl'>
              PRO.
            </span>
          </h2>
          <button
            onClick={displayRazorpay}
            className='hidden lg:flex items-center justify-center rounded'
          >
            <div className='w-full rounded bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1'>
              <div className='flex h-full w-full items-center justify-center bg-secondary_bg_color back rounded'>
                <span className='flex justify-center items-center gap-2 p-2 font-black text-white uppercase w-full rounded'>
                  become a pro
                </span>
              </div>
            </div>
          </button>
        </div>

        <div className='col-span-2 lg:border-l lg:border-l-slate-700 lg:pl-8'>
          <div className='flex justify-start items-center gap-4 mb-4 text-left'>
            <span className='bg-slate-300 py-4 px-6 rounded-full text-black font-bold'>
              1
            </span>
            <p>
              <span className='font-bold'>Subject Wise</span> Study Material
            </p>
          </div>
          <div className='flex justify-start items-center gap-4 mb-4 text-left'>
            <span className='bg-slate-300 py-4 px-6 rounded-full text-black font-bold'>
              2
            </span>
            <p>
              Notes used & prepared by <span className='font-bold'>9 SGPA</span>{' '}
              holders
            </p>
          </div>
          <div className='flex justify-start items-center gap-4 mb-4 text-left'>
            <span className='bg-slate-300 py-4 px-6 rounded-full text-black font-bold'>
              3
            </span>
            <p>Previous Year Questions (PYQs), YouTube Playlist links</p>
          </div>
          <div className='flex justify-start items-center gap-4 mb-4 text-left'>
            <span className='bg-slate-300 py-4 px-6 rounded-full text-black font-bold'>
              4
            </span>
            <p>
              One-time payment for{' '}
              <span className='font-bold'>entire semester</span> (4 months)
            </p>
          </div>
          <div className='flex justify-start items-center gap-4 text-left'>
            <span className='bg-slate-300 py-4 px-6 rounded-full text-black font-bold'>
              5
            </span>
            <p>Continuously updating and adding resources</p>
          </div>

          <button
            onClick={displayRazorpay}
            className='lg:hidden mt-16 flex items-center justify-center rounded'
          >
            <div className='w-full rounded bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1'>
              <div className='flex h-full w-full items-center justify-center bg-secondary_bg_color back rounded'>
                <span className='flex justify-center items-center gap-2 py-2 px-1 font-black text-white uppercase w-full rounded'>
                  become a pro
                </span>
              </div>
            </div>
          </button>
        </div>
      </main>
    </section>
  )
}
export default Page
