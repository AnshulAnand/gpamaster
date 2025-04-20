'use client'

import { FaClockRotateLeft } from 'react-icons/fa6'

type Props = {
  data: string[][]
  isPDF: boolean
  setPdfUrlFunc: (value: string) => void
  setModalOpenFunc: (value: boolean) => void
}

const Table = ({ data, isPDF, setPdfUrlFunc, setModalOpenFunc }: Props) => {
  if (data.length === 0) {
    return (
      <div className='flex justify-center items-center gap-2 text-center font-semibold text-slate-400 bg-secondary_bg_color rounded px-6 py-3 mt-2'>
        <h1>Comming soon</h1>
        <FaClockRotateLeft />
      </div>
    )
  }
  return (
    <div className='relative overflow-x-auto shadow-md rounded mt-2'>
      <table className='w-full text-sm text-left rtl:text-right text-gray-400'>
        <thead className='text-xs uppercase bg-secondary_bg_color text-gray-400'>
          <tr>
            <th scope='col' className='px-6 py-3'>
              Name
            </th>
            <th scope='col' className='px-6 py-3'>
              Type
            </th>
            <th scope='col' className='px-6 py-3'>
              Last modified
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((val, i) => (
            <tr key={i} className='bg-secondary_bg_color hover:opacity-90'>
              <th
                scope='row'
                className='px-6 py-4 font-medium whitespace-nowrap text-blue-500'
              >
                {/* <Link href={''}>{val[0]}</Link> */}
                {isPDF ? (
                  <button
                    onClick={() => {
                      setModalOpenFunc(true)
                      setPdfUrlFunc(
                        `${
                          val[3][val[3].length - 3] +
                            val[3][val[3].length - 2] +
                            val[3][val[3].length - 1] ===
                            'pdf' ||
                          val[3][val[3].length - 3] +
                            val[3][val[3].length - 2] +
                            val[3][val[3].length - 1] ===
                            'PDF'
                            ? `/study-material/${val[3]}`
                            : `/study-material/${val[3]}.pdf`
                        }`
                      )
                    }}
                  >
                    {isPDF ? val[3] : val[0]}
                  </button>
                ) : (
                  <a target='_blank' href={val[3]}>
                    {val[0] === 'lorem ipsum' ? val[3] : val[0]}
                  </a>
                )}
              </th>
              <td className='px-6 py-4'>{isPDF ? 'PDF' : 'Link'}</td>
              <td className='px-6 py-4'>{val[1]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
export default Table
