import { FaInstagram } from 'react-icons/fa6'
import { FaGithub } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer
      id='footer'
      className='flex flex-col justify-center items-center bg-secondary_bg_color px-4 py-32 text-center'
    >
      <div className='flex justify-between items-start flex-col lg:flex-row gap-8 max-w-7xl w-full'>
        <div className='text-left max-w-96'>
          <h1 className='text-slate-300 text-2xl font-semibold'>GPA Master</h1>
          <p className='text-slate-400 text-base'>
            GPA Master aims at providing help and guidance to students with
            resources and community building.
          </p>
          <div className='flex gap-2 mt-4'>
            <a
              href='https://www.instagram.com/gpamaster.in/'
              className='text-slate-400 text-xl'
              target='_blank'
            >
              <FaInstagram />
            </a>
            <a
              href='https://github.com/gpamaster'
              className='text-slate-400 text-xl'
              target='_blank'
            >
              <FaGithub />
            </a>
          </div>
        </div>
        <div className='flex flex-col md:flex-row gap-6 md:gap-16 lg:gap-12'>
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
            <a
              target='_blank'
              href='https://merchant.razorpay.com/policy/Og51W3JFp4hAAO/privacy'
            >
              Privacy Policy
            </a>
            <a
              target='_blank'
              href='https://merchant.razorpay.com/policy/Og51W3JFp4hAAO/terms'
            >
              Terms & conditions
            </a>
            <a
              target='_blank'
              href='https://merchant.razorpay.com/policy/Og51W3JFp4hAAO/refund'
            >
              Cancellation and Refund
            </a>
            <a
              target='_blank'
              href='https://merchant.razorpay.com/policy/Og51W3JFp4hAAO/shipping'
            >
              Shipping and Delivery
            </a>
            <a
              target='_blank'
              href='https://merchant.razorpay.com/policy/Og51W3JFp4hAAO/contact_us'
            >
              Contact Us
            </a>
          </ul>
          <ul className='flex flex-col text-left text-slate-400'>
            <li className='text-slate-300 font-bold'>Made with &#x1F90D; by</li>
            <a
              target='_blank'
              href='https://www.linkedin.com/in/shivam-rajput57/'
            >
              Shivam Rajput
            </a>
            <a
              target='_blank'
              href='https://www.linkedin.com/in/anshulanand02/'
            >
              Anshul Anand
            </a>
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
