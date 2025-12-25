import { useState } from 'react'
import ProductCard from '../components/ProductCard'
import Modal from '../components/Modal'
import { getProducts } from '../utils/loadContent'

export default function Gallery() {
  const [selectedProduct, setSelectedProduct] = useState(null)
  const products = getProducts()
  
  return (
    <section className="pt-32 pb-24 px-6 min-h-screen">
      {/* Background effects */}
      <div className="fixed inset-0 sparkle-bg opacity-20 pointer-events-none" />
      <div className="fixed top-0 left-0 w-full h-64 bg-gradient-to-b from-accent-purple/10 to-transparent pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
            <span className="text-gradient">Our Collection</span>
          </h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Explore our handcrafted pieces, each one unique and made with love
          </p>
        </div>
        
        {/* Product grid */}
        {products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <ProductCard 
                key={index} 
                product={product} 
                onClick={() => setSelectedProduct(product)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-24">
            <p className="text-white/50 text-lg">
              No products yet. Add some via the admin panel!
            </p>
          </div>
        )}
      </div>
      
      {/* Modal */}
      {selectedProduct && (
        <Modal 
          product={selectedProduct} 
          onClose={() => setSelectedProduct(null)} 
        />
      )}
    </section>
  )
}
