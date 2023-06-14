import './globals.css'
import { Roboto } from 'next/font/google'

const font = Roboto({
  weight: ['300', '400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="main">
      <body className={font.className}>{children}</body>
    </html>
  )
}
