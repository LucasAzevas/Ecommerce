import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import clsx from 'clsx'
import { ClerkProvider } from '@clerk/nextjs'
import { ptBR } from '@clerk/localizations'


const inter = Inter({ subsets: ['latin'] })
export const metadata: Metadata = {
  title: 'Next Ecommerce',
  description: 'Next Ecommerce',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider localization={ptBR}>
    <html lang="en">
      <body className={clsx(inter.className, 'bg-slate-700')}>
        <Navbar></Navbar>
        <main className='bg-slate-700 h-screen p-16'>{children}</main>
        </body>
    </html>
    </ClerkProvider>
  )
}
