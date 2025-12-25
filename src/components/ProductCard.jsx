export default function ProductCard({ product, onClick, featured = false }) {
  return (
    <article 
      onClick={onClick}
      className={`
        group cursor-pointer rounded-2xl overflow-hidden
        bg-luxury-700/50 backdrop-blur-sm
        border border-white/5 transition-all duration-500
        hover:border-accent-pink/30 hover:shadow-2xl hover:shadow-accent-pink/20
        hover:-translate-y-2
        ${featured ? 'glow-border' : ''}
      `}
    >
      {/* Image container - portrait aspect ratio for phone cases */}
      <div className="relative aspect-[3/4] overflow-hidden bg-luxury-800">
        <img 
          src={product.image} 
          alt={product.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          onError={(e) => {
            e.target.src = 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=400&h=533&fit=crop'
          }}
        />
        
        {/* Shimmer overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-tr from-accent-pink/0 via-white/10 to-accent-purple/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        
        {/* Bottom gradient for text readability */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-luxury-900 via-luxury-900/60 to-transparent" />
        
        {/* Featured badge */}
        {product.featured && (
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1.5 text-xs font-semibold bg-gradient-to-r from-accent-pink to-accent-purple rounded-full shadow-lg shadow-accent-pink/30">
              ✨ Featured
            </span>
          </div>
        )}
        
        {/* Price tag - always visible for phone cases */}
        {product.price && (
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1.5 text-sm font-semibold bg-luxury-900/80 backdrop-blur-sm rounded-full border border-accent-gold/40 text-accent-gold shadow-lg">
              {product.price}
            </span>
          </div>
        )}
        
        {/* Title overlay at bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <h3 className="text-xl font-display font-semibold text-white mb-1 drop-shadow-lg group-hover:text-accent-pink transition-colors duration-300">
            {product.title}
          </h3>
        </div>
      </div>
      
      {/* Description below */}
      <div className="p-5 pt-3">
        <p className="text-sm text-white/70 line-clamp-2 leading-relaxed">
          {product.description}
        </p>
        <p className="text-accent-pink text-xs font-medium mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Click to view details →
        </p>
      </div>
    </article>
  )
}
