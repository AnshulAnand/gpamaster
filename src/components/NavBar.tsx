'use client'

import Link from 'next/link'
import useCurrentUser from '@/swr/user'
import { usePathname } from 'next/navigation'
import { RiMenu3Fill } from 'react-icons/ri'
import { RxCross1 } from 'react-icons/rx'
import { useState } from 'react'

const NavBar = () => {
  const { currentUser, isError, isLoading } = useCurrentUser()
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  console.log({ currentUser, pathname })

  return (
    <header className='flex bg-secondary_bg_color p-4 fixed top-0 left-0 w-screen z-[999]'>
      <nav className='relative flex items-center justify-between text-white max-w-7xl w-full mx-auto'>
        <Link href='/'>
          <h2 className='text-xl md:text-2xl font-bold'>GPA Master</h2>
        </Link>
        <div
          className={`${
            menuOpen ? 'block' : 'hidden'
          } absolute top-[68px] right-0 w-52 md:w-auto md:relative md:top-0`}
        >
          <ul className='flex flex-col rounded bg-secondary_bg_color md:bg-transparent md:flex-row items-center justify-between gap-6 text-slate-400 p-4 md:p-0'>
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
            {!currentUser || !currentUser.paymentStatus ? (
              <li
                className={`${pathname === '/pricing' ? 'text-slate-100' : ''}`}
              >
                <Link href='/pricing'>PRO</Link>
              </li>
            ) : (
              <></>
            )}
            <li className={`${pathname === '/footer' ? 'text-slate-100' : ''}`}>
              <Link href='#footer'>Contact</Link>
            </li>
            {currentUser && (
              <li
                className={`${pathname === '/footer' ? 'text-slate-100' : ''}`}
              >
                <a href={'/api/user/logout'}>Logout</a>
              </li>
            )}
          </ul>
        </div>

        <div className='bg-secondary_bg_color'>
          <ul className='hidden md:flex items-center justify-between gap-6 text-slate-400 p-0'>
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
            {!currentUser || !currentUser.paymentStatus ? (
              <li
                className={`${pathname === '/pricing' ? 'text-slate-100' : ''}`}
              >
                <Link href='/pricing'>PRO</Link>
              </li>
            ) : (
              <></>
            )}
            <li className={`${pathname === '/footer' ? 'text-slate-100' : ''}`}>
              <Link href='#footer'>Contact</Link>
            </li>
            {currentUser && (
              <li
                className={`${pathname === '/footer' ? 'text-slate-100' : ''}`}
              >
                <a href={'/api/user/logout'}>Logout</a>
              </li>
            )}
          </ul>
        </div>

        <div className='flex justify-center items-center gap-4'>
          {currentUser ? (
            <Link
              className='flex justify-center items-center gap-2 text-slate-300'
              href={`/user/${currentUser.username}`}
            >
              <span className='text-right hidden md:block'>
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
          <button
            onClick={() => setMenuOpen(menuOpen ? false : true)}
            className='md:hidden'
          >
            {menuOpen ? (
              <RxCross1 className='text-4xl' />
            ) : (
              <RiMenu3Fill className='text-4xl' />
            )}
          </button>
        </div>
      </nav>
    </header>
  )
}
export default NavBar
