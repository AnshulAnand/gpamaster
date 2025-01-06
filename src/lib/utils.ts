import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getGoogleOAuthURL() {
  const rootUrl = 'https://accounts.google.com/o/oauth2/v2/auth'

  const options = {
    redirect_uri: process.env.NEXT_PUBLIC_GOOGLE_OAUTH_REDIRECT_URL as string,
    client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string,
    access_type: 'offline',
    response_type: 'code',
    prompt: 'consent',
    scope: [
      'https://www.googleapis.com/auth/userinfo.profile',
      'https://www.googleapis.com/auth/userinfo.email',
    ].join(' '),
  }

  const qs = new URLSearchParams(options)

  return `${rootUrl}?${qs.toString()}`
}

export const returnDate = (object: any) => {
  const date = new Date(object.createdAt)
  const d = date.getDate()
  const m = date.toLocaleString('default', { month: 'short' })
  const y = date.getFullYear()
  if (d > 3 && d < 21) return `${d}th ${m} ${y}`
  switch (d % 10) {
    case 1:
      return `${d}st ${m} ${y}`
    case 2:
      return `${d}nd ${m} ${y}`
    case 3:
      return `${d}rd ${m} ${y}`
    default:
      return `${d}th ${m} ${y}`
  }
}

export default function readingTime(text: string) {
  const wpm = 300
  const words = text.trim().split(/\s+/).length
  return Math.ceil(words / wpm)
}
