import type { Metadata } from 'next'
import './globals.css'
import { Header } from './components'
import { inter } from './fonts'

export const metadata: Metadata = {
  title: 'Commune AI',
  description:
    'Commune AI: Revolutionizing software development with seamless connectivity, effortless code reuse, limitless scalability, and honest, unbiased voting. Join us!',
  robots: 'all',
  icons: [{ rel: "icon", url: "/commune-logo.svg" }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className={`${inter.className}`}>
      <head>
        <link rel='icon' href='/commune-logo.svg' sizes='any' />
      </head>
      <body className='relative h-full animate-fade-in-up bg-white'>

        <Header />
        {children}
      </body>
    </html>
  )
}
