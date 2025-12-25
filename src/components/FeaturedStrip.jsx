import ProductCard from './ProductCard'

export default function FeaturedStrip({ products, onProductClick }) {
  const featuredProducts = products.filter(p => p.featured).slice(0, 3)
  
  if (featuredProducts.length === 0) return null
  
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-luxury-800/50 to-luxury-900 relative overflow-hidden">
      {/* Subtle sparkle overlay */}
      <div className="absolute inset-0 sparkle-bg opacity-20 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <p className="text-accent-pink text-sm font-medium tracking-widest uppercase mb-3">✨ Handcrafted with Love</p>
          <h2 className="text-3xl md:text-5xl font-display font-semibold mb-4">
            <span className="text-gradient">Featured Creations</span>
          </h2>
          <p className="text-white/60 max-w-lg mx-auto text-lg">
            Each phone case is a unique work of art, designed and bedazzled by hand
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {featuredProducts.map((product, index) => (
            <ProductCard 
              key={index} 
              product={product} 
              onClick={() => onProductClick(product)}
              featured
            />
          ))}
        </div>
      </div>
    </section>
  )
}
