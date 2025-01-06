const UserProfileSkeleton = () => {
  return (
    <div role='status' className='animate-pulse my-16'>
      <div className='flex flex-col gap-2 items-center justify-center mb-4'>
        <svg
          className='w-28 h-28 text-gray-700 md:me-4'
          aria-hidden='true'
          xmlns='http://www.w3.org/2000/svg'
          fill='currentColor'
          viewBox='0 0 20 20'
        >
          <path d='M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z' />
        </svg>
        <div className='w-40 h-2.5 rounded-full bg-gray-700 md:me-3'></div>
        <div className='w-52 h-2.5 rounded-full bg-gray-700'></div>
      </div>
      <div className='h-2.5 rounded-full bg-gray-700 w-full mb-2.5 mx-auto'></div>
      <div className='h-2.5 rounded-full bg-gray-700 w-full mb-2.5 mx-auto'></div>
      <div className='h-2.5 mx-auto rounded-full bg-gray-700 max-w-[600px]'></div>

      <span className='sr-only'>Loading...</span>
    </div>
  )
}
export default UserProfileSkeleton
