import { useState, useMemo } from 'react'
import Hero from '../components/Hero'
import Modal from '../components/Modal'
import { getProducts } from '../utils/loadContent'

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState(null)
  
  const { products, error } = useMemo(() => {
    try {
      return { products: getProducts(), error: null }
    } catch (e) {
      console.error('Failed to load products:', e)
      return { products: [], error: e.message }
    }
  }, [])
  
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-luxury-900 text-white">
        <div className="text-center p-8">
          <h1 className="text-2xl mb-4">Something went wrong</h1>
          <p className="text-white/60">{error}</p>
        </div>
      </div>
    )
  }
  
  return (
    <>
      <Hero 
        products={products} 
        onProductClick={setSelectedProduct} 
      />
      
      {selectedProduct && (
        <Modal 
          product={selectedProduct} 
          onClose={() => setSelectedProduct(null)} 
        />
      )}
    </>
  )
}
