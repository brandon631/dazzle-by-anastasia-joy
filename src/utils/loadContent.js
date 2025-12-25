// Browser-safe frontmatter parser (no Node.js dependencies)
function parseFrontmatter(content) {
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---/)
  if (!match) return {}
  
  const frontmatter = match[1]
  const data = {}
  
  frontmatter.split('\n').forEach(line => {
    const colonIndex = line.indexOf(':')
    if (colonIndex === -1) return
    
    const key = line.slice(0, colonIndex).trim()
    let value = line.slice(colonIndex + 1).trim()
    
    // Remove quotes
    if ((value.startsWith('"') && value.endsWith('"')) || 
        (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1)
    }
    
    // Parse booleans
    if (value === 'true') value = true
    else if (value === 'false') value = false
    
    data[key] = value
  })
  
  return data
}

// Import all markdown files from the products folder
const productFiles = import.meta.glob('/src/content/products/*.md', { 
  eager: true, 
  query: '?raw',
  import: 'default'
})

export function getProducts() {
  try {
    const products = Object.entries(productFiles).map(([path, content]) => {
      const data = parseFrontmatter(content)
      return {
        title: data.title || 'Untitled',
        description: data.description || '',
        price: data.price || null,
        featured: data.featured === true,
        image: data.image || '/uploads/placeholder.jpg',
        createdDate: data.createdDate ? new Date(data.createdDate) : new Date(),
        slug: path.split('/').pop().replace('.md', '')
      }
    })
    
    // Sort by createdDate descending (newest first)
    return products.sort((a, b) => b.createdDate - a.createdDate)
  } catch (error) {
    console.error('Error loading products:', error)
    return []
  }
}

export function getFeaturedProducts() {
  return getProducts().filter(p => p.featured)
}
