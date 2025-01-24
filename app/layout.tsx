import '../styles/globals.css'
import { Open_Sans } from 'next/font/google'

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
      <body>{children}</body>
    </html>
  )
} 