import Link from 'next/link'

const NavBar = () => {
  return (
    <header className='flex bg-secondary_bg_color p-4 fixed top-0 left-0 w-screen z-[999]'>
      <nav className='flex items-center justify-between text-white max-w-7xl w-full mx-auto'>
        <Link href=''>
          <h2 className='text-2xl font-bold'>GPA Master</h2>
        </Link>
        <div>
          <ul className='flex items-center justify-between gap-6'>
            <li>
              <Link href=''>Notes</Link>
            </li>
            <li className='text-slate-400'>
              <Link href=''>Discuss</Link>
            </li>
            <li className='text-slate-400'>
              <Link href=''>Tags</Link>
            </li>
            <li className='text-slate-400'>
              <Link href=''>Blog</Link>
            </li>
            <li className='text-slate-400'>
              <Link href=''>Contact</Link>
            </li>
            <li className='text-slate-400'>
              <Link href=''>About</Link>
            </li>
          </ul>
        </div>

        <div>
          <Link href={''}>Sign Up</Link>
        </div>
      </nav>
    </header>
  )
}
export default NavBar
