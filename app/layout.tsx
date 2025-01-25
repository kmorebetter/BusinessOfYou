import '../styles/globals.css'
import { Open_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['800'], // 800 is UltraBold
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={openSans.className}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
} 