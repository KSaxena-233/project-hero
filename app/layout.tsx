import './globals.css'
import { Inter, Montserrat } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' })

export const metadata = {
  title: 'Project H.E.R.O. – Helping Everyone Reach Out',
  description: 'Connecting UNC students with individuals who need Direct Support Professionals (DSPs)',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <body className="min-h-screen flex flex-col">
        <header className="bg-unc-navy text-white">
          <nav className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <Link href="/" className="text-2xl font-display font-bold">
                Project H.E.R.O.
              </Link>
              <div className="space-x-6">
                <Link href="/" className="hover:text-unc-blue transition-colors">
                  Home
                </Link>
                <Link href="/about" className="hover:text-unc-blue transition-colors">
                  About
                </Link>
                <Link href="/find-match" className="hover:text-unc-blue transition-colors">
                  Find a Match
                </Link>
                <Link href="/contact" className="hover:text-unc-blue transition-colors">
                  Contact
                </Link>
              </div>
            </div>
          </nav>
        </header>
        <main className="flex-grow container mx-auto px-4 py-8">
          {children}
        </main>
        <footer className="bg-unc-navy text-white py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-display font-bold mb-4">Project H.E.R.O.</h3>
                <p className="text-sm">Helping Everyone Reach Out</p>
              </div>
              <div>
                <h3 className="text-xl font-display font-bold mb-4">Leadership Team</h3>
                <ul className="text-sm space-y-2">
                  <li>Keshav Saxena</li>
                  <li>Shruti Madhav</li>
                  <li>Dr. Robert Christian</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-display font-bold mb-4">Contact</h3>
                <p className="text-sm">Email: samdhav@unc.edu</p>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-unc-blue text-center text-sm">
              <p>© {new Date().getFullYear()} Project H.E.R.O. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
} 