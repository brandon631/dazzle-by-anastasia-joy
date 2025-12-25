import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      
      {/* Discreet Admin link */}
      <a
        href="/admin"
        className="fixed bottom-4 right-4 z-50 text-xs text-white/30 hover:text-white/70 focus:text-white/70 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(255,107,157,0.5)] focus:drop-shadow-[0_0_8px_rgba(181,108,255,0.5)] focus:outline-none"
      >
        Admin
      </a>
    </div>
  )
}
