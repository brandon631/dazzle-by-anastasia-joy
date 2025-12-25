import { useEffect } from 'react'

export default function Modal({ product, onClose }) {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleEscape)
    document.body.style.overflow = 'hidden'
    
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [onClose])
  
  if (!product) return null
  
  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-luxury-900/95 backdrop-blur-md" />
      
      {/* Modal content */}
      <div 
        className="relative max-w-4xl w-full max-h-[90vh] overflow-auto bg-luxury-800 rounded-2xl border border-white/10 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-luxury-900/80 border border-white/10 text-white/70 hover:text-white hover:border-accent-pink/50 transition-all duration-200"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <div className="grid md:grid-cols-2 gap-0">
          {/* Image */}
          <div className="aspect-square md:aspect-auto md:h-full bg-luxury-700">
            <img 
              src={product.image} 
              alt={product.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=600&fit=crop'
              }}
            />
          </div>
          
          {/* Details */}
          <div className="p-8 md:p-10 flex flex-col justify-center">
            {product.featured && (
              <span className="inline-flex items-center gap-1 px-3 py-1 text-xs font-medium bg-gradient-to-r from-accent-pink to-accent-purple rounded-full w-fit mb-4">
                ✨ Featured Piece
              </span>
            )}
            
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-gradient mb-4">
              {product.title}
            </h2>
            
            {product.price && (
              <p className="text-2xl text-accent-gold font-medium mb-6">
                {product.price}
              </p>
            )}
            
            <p className="text-white/70 leading-relaxed mb-8">
              {product.description}
            </p>
            
            <div className="pt-6 border-t border-white/10">
              <p className="text-sm text-white/40">
                Contact us to inquire about this piece
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
