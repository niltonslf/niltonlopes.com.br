import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nilton Lopes',
  description: 'Front-end developer',
}

type RootLayoutProps  = {
children: React.ReactNode
}

export default function RootLayout({ children}: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
