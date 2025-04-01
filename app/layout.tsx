import '../globals.css'
import Header from '../src/components/Header'
import Footer from '../src/components/Footer'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-brand-black text-brand-white">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}