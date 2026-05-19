import { useState } from 'react'
import { Link } from 'react-router-dom'
import FloralDecor from '../components/FloralDecor'

const portfolioItems = [
  { src: '/assets/dog-portrait.png', alt: 'Watercolour spaniel dog portrait', category: 'Pets' },
  { src: '/assets/horse-painting.png', alt: 'Equestrian jockey and horse painting', category: ['Pets', 'Mixed Media'] },
  { src: '/assets/red-portrait.png', alt: 'Portrait study on red background', category: 'Portraits' },
  { src: '/assets/MeganFox-Portrait.png', alt: 'Megan Fox portrait', category: 'Portraits' },
  { src: '/assets/male-portrait.png', alt: 'Male portrait study', category: 'Portraits' },
  { src: '/assets/distressed-cardboard-dog.png', alt: 'Dog portrait on distressed cardboard texture', category: ['Pets', 'Mixed Media'] },
  { src: '/assets/Daredevil-Portrait.png', alt: 'Daredevil portrait on canvas', category: ['Portraits', 'Canvases'] },
  { src: '/assets/Parrot.png', alt: 'Parrot painting', category: 'Pets' },
]

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All')
  const filters = ['All', 'Pets', 'Portraits', 'Mixed Media', 'Canvases']

  const filtered = activeFilter === 'All'
    ? portfolioItems
    : portfolioItems.filter(item =>
        Array.isArray(item.category)
          ? item.category.includes(activeFilter)
          : item.category === activeFilter
      )

  // Distribute items across 3 columns
  const col1 = filtered.filter((_, i) => i % 3 === 0)
  const col2 = filtered.filter((_, i) => i % 3 === 1)
  const col3 = filtered.filter((_, i) => i % 3 === 2)

  const heights = [380, 260, 340, 300, 380, 260, 340, 300]

  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      <FloralDecor position="top-right" size={200} opacity={0.4} />
      <FloralDecor position="bottom-left" size={150} opacity={0.3} />

      {/* PAGE HEADER */}
      <section style={{ padding: '4rem 0 2rem' }}>
        <div className="container">
          <h1 className="heading-xl underline-accent">Portfolio</h1>
          <div style={{ width: 80, height: 2.5, background: 'var(--rose)', borderRadius: 2, margin: '1.4rem 0 1.2rem' }} />
          <p style={{ color: 'var(--text-muted)', fontSize: '1rem', maxWidth: 460 }}>
            A curated collection of pet portraits, portraits, and expressive pieces.
          </p>

          <div className="filter-buttons">
            {filters.map(f => (
              <button
                key={f}
                className={`filter-btn ${activeFilter === f ? 'active' : ''}`}
                onClick={() => setActiveFilter(f)}
                aria-pressed={activeFilter === f}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* GRID */}
      <section style={{ paddingBottom: '5rem' }}>
        <div className="container">
          <div className="portfolio-grid">
            {/* Column 1 */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {col1.map((item, i) => (
                <div key={i} className="portfolio-item">
                  <img src={item.src} alt={item.alt} style={{ width: '100%', height: heights[i * 3] || 320, objectFit: 'cover' }} />
                </div>
              ))}
            </div>

            {/* Column 2 */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {col2.map((item, i) => (
                <div key={i} className="portfolio-item">
                  <img src={item.src} alt={item.alt} style={{ width: '100%', height: heights[i * 3 + 1] || 320, objectFit: 'cover' }} />
                </div>
              ))}
            </div>

            {/* Column 3 */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {col3.map((item, i) => (
                <div key={i} className="portfolio-item">
                  <img src={item.src} alt={item.alt} style={{ width: '100%', height: heights[i * 3 + 2] || 320, objectFit: 'cover' }} />
                </div>
              ))}
              {/* Featured piece card always in col 3 */}
              <div className="featured-piece-card">
                <div style={{ position: 'absolute', top: -10, right: -10, opacity: 0.25 }} aria-hidden="true">
                  <img src="/assets/flower-corner.png" alt="" style={{ width: 100, height: 100, objectFit: 'contain' }} />
                </div>
                <h3 className="heading-md" style={{ position: 'relative' }}>Featured Piece</h3>
                <div style={{ width: 50, height: 2, background: 'var(--rose)', borderRadius: 2 }} />
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.75, flex: 1 }}>
                  Expressive artwork made to feel personal, textured, and full of character.
                </p>
                <Link to="/commissions" className="btn-primary" style={{ alignSelf: 'flex-start' }}>
                  Request a Custom Piece
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}