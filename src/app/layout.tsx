import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Providers from '@/components/ProgressBarProvider'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import Toast from '@/components/Toast'

const poppins = Poppins({
  weight: ['300', '400', '600', '700'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'GPA Master',
  description:
    'GPA Master aims at providing help and guidance to students with resources and community building.',
  openGraph: {
    images: [
      { url: 'https://gpamaster.in/images/gpamaster-home-page-img.png' },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GPA MAster',
    description:
      'GPA Master aims at providing help and guidance to students with resources and community building.',
    images: ['https://gpamaster.in/images/gpamaster-home-page-img.png'],
  },
  keywords: ['College', 'GPA Master', 'NextJS', 'React', 'Notes', 'NSUT'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' className='dark scroll-smooth'>
      <body className={poppins.className}>
        <Providers>
          <Toast />
          <NavBar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
