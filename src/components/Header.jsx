import { Link, NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-luxury-900/90 backdrop-blur-lg border-b border-accent-pink/10">
      <div className="max-w-7xl mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="group">
            <img 
              src="/icon-d.png" 
              alt="Dazzle" 
              className="h-8 sm:h-9 md:h-10 w-auto transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_12px_rgba(255,107,157,0.6)] group-hover:drop-shadow-[0_0_20px_rgba(181,108,255,0.4)]"
              onError={(e) => { e.target.onerror = null; e.target.src = '/logo.png'; }}
            />
          </Link>
          
          <nav className="flex items-center gap-3 md:gap-4">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `nav-pill ${
                  isActive ? 'nav-pill-active' : ''
                }`
              }
            >
              Home
            </NavLink>
            <NavLink 
              to="/gallery" 
              className={({ isActive }) => 
                `nav-pill ${
                  isActive ? 'nav-pill-active' : ''
                }`
              }
            >
              Gallery
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  )
}
