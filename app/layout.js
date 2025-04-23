import './globals.css'
import { Inter } from 'next/font/google'
import Nav from './components/Nav';
import Footer from './components/Footer';
// RANDOM COMMENT why stop

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Klein Construction',
  description: 'Klein Construction',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
      <Nav />
        {children}
        <Footer />
        </body>
    </html>
  )
}
