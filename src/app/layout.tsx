// src/app/(main)/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import Navbar from '@/components/NavMenu'
import MobileMenu from '@/components/MobileMenu'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mahmoud Gamal - Portfolio',
  description: 'Freelance Software Engineer Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}    text-white`}>
        <Navbar />
        <main className="">
        <MobileMenu />
          {children}
        </main>
      </body>
    </html>
  )
}