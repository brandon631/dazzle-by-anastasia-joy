// Browser-safe frontmatter parser (no Node.js dependencies)
function parseFrontmatter(content) {
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---/)
  if (!match) return {}
  
  const frontmatter = match[1]
  const data = {}
  const lines = frontmatter.split(/\r?\n/)
  
  for (let i = 0; i < lines.length; i += 1) {
    const line = lines[i]
    if (!line.trim()) continue
    
    // Skip lines that start with whitespace (they're part of a block)
    if (/^\s/.test(line)) continue
    
    const colonIndex = line.indexOf(':')
    if (colonIndex === -1) continue
    
    const key = line.slice(0, colonIndex).trim()
    let value = line.slice(colonIndex + 1).trim()
    
    const isBlockScalar = value === '|' || value === '|-' || value === '>' || value === '>-'
    const isIndentedBlock = value === '' && lines[i + 1] && /^\s+/.test(lines[i + 1])
    
    if (isBlockScalar || isIndentedBlock) {
      const isFolded = value.startsWith('>') || isIndentedBlock
      const blockLines = []
      
      // Collect all following indented lines
      let j = i + 1
      let baseIndent = null
      
      while (j < lines.length) {
        const nextLine = lines[j]
        
        // Check if this line starts a new key (no leading whitespace and has a colon)
        if (nextLine.trim() && !/^\s/.test(nextLine) && nextLine.includes(':')) {
          break
        }
        
        // Handle empty lines within the block
        if (nextLine.trim() === '') {
          blockLines.push('')
          j++
          continue
        }
        
        // Get indentation
        const indentMatch = nextLine.match(/^(\s+)/)
        if (!indentMatch) break
        
        // Set base indent from first content line
        if (baseIndent === null) {
          baseIndent = indentMatch[1].length
        }
        
        // Extract content after base indentation
        blockLines.push(nextLine.slice(baseIndent))
        j++
      }
      
      i = j - 1
      
      // Join lines: folded (>) joins with spaces, literal (|) preserves newlines
      const joiner = isFolded ? ' ' : '\n'
      // Remove trailing empty lines and join
      while (blockLines.length > 0 && blockLines[blockLines.length - 1] === '') {
        blockLines.pop()
      }
      data[key] = blockLines.join(joiner).replace(/\s+/g, ' ').trim()
      continue
    }
    
    // Remove quotes
    if ((value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1)
    }
    
    // Parse booleans
    if (value === 'true') value = true
    else if (value === 'false') value = false
    
    data[key] = value
  }
  
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
