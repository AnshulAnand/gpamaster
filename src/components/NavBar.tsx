'use client'

import Link from 'next/link'
import useCurrentUser from '@/swr/user'
import { usePathname } from 'next/navigation'

const NavBar = () => {
  const { currentUser, isError, isLoading } = useCurrentUser()
  const pathname = usePathname()

  console.log({ currentUser, pathname })

  return (
    <header className='flex bg-secondary_bg_color p-4 fixed top-0 left-0 w-screen z-[999]'>
      <nav className='flex items-center justify-between text-white max-w-7xl w-full mx-auto'>
        <Link href='/'>
          <h2 className='text-2xl font-bold'>GPA Master</h2>
        </Link>
        <div>
          <ul className='flex items-center justify-between gap-6 text-slate-400'>
            <li className={`${pathname === '/' ? 'text-slate-100' : ''}`}>
              <Link href='/'>Home</Link>
            </li>
            <li
              className={`${pathname === '/discuss' ? 'text-slate-100' : ''}`}
            >
              <Link href='/discuss'>Discuss</Link>
            </li>
            <li className={`${pathname === '/notes' ? 'text-slate-100' : ''}`}>
              <Link href='/notes'>Notes</Link>
            </li>
            <li className={`${pathname === '/blog' ? 'text-slate-100' : ''}`}>
              <Link href='/blog'>Blog</Link>
            </li>
            <li
              className={`${pathname === '/pricing' ? 'text-slate-100' : ''}`}
            >
              <Link href='/pricing'>PRO</Link>
            </li>
            <li className={`${pathname === '/footer' ? 'text-slate-100' : ''}`}>
              <Link href='#footer'>Contact</Link>
            </li>
          </ul>
        </div>

        <div>
          {currentUser ? (
            <Link
              className='flex justify-center items-center gap-2 text-slate-300'
              href={`/user/${currentUser.username}`}
            >
              <span className='text-right'>
                <p className='text-xs text-slate-300'>Hello</p>
                <p className='text-sm text-slate-300'>{currentUser.name}</p>
              </span>
              <div className='relative h-10 w-10 rounded border border-slate-600'>
                <img
                  src={currentUser.avatar}
                  className='absolute w-full h-full object-cover rounded'
                  alt=''
                />
              </div>
            </Link>
          ) : (
            <Link href={'/auth'}>Sign Up</Link>
          )}
        </div>
      </nav>
    </header>
  )
}
export default NavBar
