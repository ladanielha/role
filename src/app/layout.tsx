import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Halalku-Rekomendasi Wisata Cirebon',
  description: 'Rekomnedasi Wisata Cirebon',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navbar/>
        {children}
      <Footer/>  
        </body>
    </html>
  )
}
