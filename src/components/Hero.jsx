import { Link } from 'react-router-dom'
import siteSettings from '../content/site/settings.json'
import ProductCard from './ProductCard'

export default function Hero({ products = [], onProductClick }) {
  // Get featured products, or newest 4 if none featured
  const featuredProducts = products.filter(p => p.featured).slice(0, 4)
  const displayProducts = featuredProducts.length > 0 
    ? featuredProducts 
    : products.slice(0, 4)

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Ambient background orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-accent-pink/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-accent-purple/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-accent-gold/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-2/3 right-1/4 w-80 h-80 bg-accent-pink/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
      </div>

      {/* CSS Sparkle twinkle layer */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <span className="sparkle-star" style={{ top: '12%', left: '8%', animationDelay: '0s' }} />
        <span className="sparkle-star" style={{ top: '22%', left: '85%', animationDelay: '0.7s' }} />
        <span className="sparkle-star" style={{ top: '45%', left: '15%', animationDelay: '1.4s' }} />
        <span className="sparkle-star" style={{ top: '18%', left: '55%', animationDelay: '2.1s' }} />
        <span className="sparkle-star" style={{ top: '65%', left: '78%', animationDelay: '0.3s' }} />
        <span className="sparkle-star" style={{ top: '75%', left: '25%', animationDelay: '1.8s' }} />
        <span className="sparkle-star" style={{ top: '35%', left: '92%', animationDelay: '2.5s' }} />
        <span className="sparkle-star" style={{ top: '88%', left: '60%', animationDelay: '0.9s' }} />
        <span className="sparkle-star" style={{ top: '55%', left: '5%', animationDelay: '1.1s' }} />
        <span className="sparkle-star" style={{ top: '8%', left: '40%', animationDelay: '2.8s' }} />
        <span className="sparkle-star" style={{ top: '82%', left: '88%', animationDelay: '1.6s' }} />
        <span className="sparkle-star" style={{ top: '30%', left: '70%', animationDelay: '0.5s' }} />
      </div>

      {/* ========== SECTION 1: Logo Feature (integrated background mark) ========== */}
      <div className="relative z-10 flex-shrink-0 pt-24 pb-6 sm:pt-28 sm:pb-10 px-4">
        <div className="flex flex-col items-center justify-center">
          {/* Logo mark */}
          <div className="logo-integrated w-full max-w-[220px] sm:max-w-[280px] md:max-w-[360px] lg:max-w-[420px] xl:max-w-[480px]">
            {/* Sparkle overlay on logo region */}
            <div className="logo-sparkle-overlay">
              <span className="sparkle-star" style={{ top: '15%', left: '20%', animationDelay: '0.2s' }} />
              <span className="sparkle-star" style={{ top: '25%', left: '75%', animationDelay: '1.1s' }} />
              <span className="sparkle-star" style={{ top: '60%', left: '15%', animationDelay: '0.8s' }} />
              <span className="sparkle-star" style={{ top: '70%', left: '80%', animationDelay: '1.9s' }} />
              <span className="sparkle-star" style={{ top: '40%', left: '50%', animationDelay: '2.4s' }} />
              <span className="sparkle-star" style={{ top: '85%', left: '35%', animationDelay: '0.5s' }} />
            </div>
            <img
              src="/logo.png"
              alt="Dazzle by Anastasia Joy - Custom Bedazzled Creations"
              className="w-full h-auto object-contain"
              onError={(e) => { e.target.onerror = null; e.target.src = '/logo.svg'; }}
            />
          </div>
          
          {/* Tagline text below logo */}
          <p className="mt-4 sm:mt-6 text-center font-display italic text-sm sm:text-base md:text-lg lg:text-xl tracking-wide logo-tagline">
            Custom Designs by Anastasia, Age 11
          </p>
        </div>
      </div>

      {/* ========== SECTION 2: Banner Panel ========== */}
      <div className="relative z-10 flex-shrink-0 px-4 pb-12 sm:pb-16">
        <div className="max-w-4xl mx-auto">
          {/* Wide banner glass panel */}
          <div className="relative">
            {/* Glow border */}
            <div className="absolute -inset-[1px] bg-gradient-to-r from-accent-pink/50 via-accent-purple/50 to-accent-pink/50 rounded-2xl blur-sm" />
            
            {/* Glass container - wide banner style */}
            <div className="relative bg-luxury-900/60 backdrop-blur-md rounded-2xl px-6 py-8 sm:px-10 sm:py-10 md:px-16 md:py-12 border border-white/10 text-center">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 sm:mb-6 leading-tight">
                <span className="text-gradient">{siteSettings.headline}</span>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl text-white/80 mb-8 sm:mb-10 font-light max-w-2xl mx-auto leading-relaxed">
                {siteSettings.subheadline}
              </p>
              
              {/* CTA Button */}
              <div className="relative inline-block group">
                <div className="absolute -inset-1 bg-gradient-to-r from-accent-pink via-accent-purple to-accent-gold rounded-full blur opacity-40 group-hover:opacity-70 transition-opacity duration-300" />
                <Link to="/gallery" className="btn-primary relative">
                  ✨ View My Creations
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========== SECTION 3: Featured Creations Preview ========== */}
      {displayProducts.length > 0 && (
        <div className="relative z-10 flex-grow px-4 pb-16 sm:pb-20">
          <div className="max-w-6xl mx-auto">
            {/* Section header */}
            <div className="text-center mb-10">
              <p className="text-accent-pink text-xs sm:text-sm font-medium tracking-widest uppercase mb-2">✨ Handcrafted with Love</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-semibold">
                <span className="text-gradient">Featured Creations</span>
              </h2>
            </div>

            {/* Product grid */}
            <div className={`grid gap-6 sm:gap-8 ${
              displayProducts.length === 1 ? 'grid-cols-1 max-w-sm mx-auto' :
              displayProducts.length === 2 ? 'grid-cols-1 sm:grid-cols-2 max-w-2xl mx-auto' :
              displayProducts.length === 3 ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto' :
              'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
            }`}>
              {displayProducts.map((product, index) => (
                <ProductCard 
                  key={product.slug || index} 
                  product={product} 
                  onClick={() => onProductClick?.(product)}
                  featured
                />
              ))}
            </div>

            {/* View full gallery link */}
            <div className="text-center mt-10 sm:mt-12">
              <Link 
                to="/gallery" 
                className="inline-flex items-center gap-2 text-white/70 hover:text-accent-pink transition-colors duration-300 text-sm font-medium tracking-wide group"
              >
                View full gallery
                <svg 
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-luxury-900 via-luxury-900/50 to-transparent pointer-events-none" />
    </section>
  )
}
