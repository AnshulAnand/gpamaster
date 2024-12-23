import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='flex flex-col justify-center items-center bg-secondary_bg_color px-4 py-32 text-center'>
      <div className='flex justify-between items-start gap-8 max-w-7xl w-full'>
        <div className='text-left'>
          <h1 className='text-slate-300 text-2xl font-semibold'>GPA Master</h1>
          <p className='text-slate-400 text-base'>
            GPA Master aims at providing help and guidance to students with{' '}
            <br />
            resources and community building.
          </p>
        </div>
        <div className='flex gap-16'>
          <ul className='flex flex-col text-left text-slate-400'>
            <li className='text-slate-300 font-bold'>Contact</li>
            <li>
              Email:{' '}
              <a
                href='mailto:officialgpamaster@gmail.com'
                className='text-blue-400'
              >
                officialgpamaster@gmail.com
              </a>
            </li>
          </ul>
          <ul className='flex flex-col text-left text-slate-400'>
            <li className='text-slate-300 font-bold'>Useful Links</li>
            <Link href={''}>Privacy Policy</Link>
            <Link href={''}>Terms & conditions</Link>
            <Link href={''}>Cancellation and Refund</Link>
            <Link href={''}>Shipping and Delivery</Link>
            <Link href={''}>Contact Us</Link>
          </ul>
        </div>
      </div>

      <span className='h-[1px] bg-slate-500 w-full mx-1 mt-16' />

      <p className='text-slate-300 mt-8'>
        &copy; Copyright GPA Master {new Date().getFullYear()}. All rights
        reserved.
      </p>
    </footer>
  )
}
export default Footer
