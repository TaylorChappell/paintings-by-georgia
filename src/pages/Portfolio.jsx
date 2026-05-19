import { useState } from 'react'
import { Link } from 'react-router-dom'
import FloralDecor from '../components/FloralDecor'

const portfolioItems = [
  { src: '/assets/dog-portrait.png', alt: 'Watercolour spaniel dog portrait', category: 'Pets', height: 'tall' },
  { src: '/assets/horse-painting.png', alt: 'Equestrian jockey and horse painting', category: ['Pets', 'Mixed Media'], height: 'tall' },
  { src: '/assets/red-portrait.png', alt: 'Portrait study on red background', category: 'Portraits', height: 'tall' },
  { src: '/assets/male-portrait.png', alt: 'Male portrait study', category: 'Portraits', height: 'tall' },
  { src: '/assets/distressed-cardboard-dog.png', alt: 'Dog portrait on distressed cardboard texture', category: ['Pets', 'Mixed Media'], height: 'medium' },
]

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All')
  const filters = ['All', 'Pets', 'Portraits', 'Mixed Media']

  const filtered = activeFilter === 'All'
    ? portfolioItems
    : portfolioItems.filter(item =>
        Array.isArray(item.category)
          ? item.category.includes(activeFilter)
          : item.category === activeFilter
      )

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
            A curated collection of pet portraits, portrait studies, and expressive pieces.
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
              {filtered.slice(0, 1).map((item, i) => (
                <div key={i} className="portfolio-item tall">
                  <img src={item.src} alt={item.alt} style={{ width: '100%', height: 380, objectFit: 'cover' }} />
                </div>
              ))}
              {filtered.length > 3 && (
                <div className="portfolio-item medium">
                  <img src={filtered[3].src} alt={filtered[3].alt} style={{ width: '100%', height: 260, objectFit: 'cover' }} />
                </div>
              )}
            </div>

            {/* Column 2 */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {filtered.slice(1, 2).map((item, i) => (
                <div key={i} className="portfolio-item tall">
                  <img src={item.src} alt={item.alt} style={{ width: '100%', height: 420, objectFit: 'cover' }} />
                </div>
              ))}
              {filtered.length > 4 && (
                <div className="portfolio-item short">
                  <img src={filtered[4].src} alt={filtered[4].alt} style={{ width: '100%', height: 200, objectFit: 'cover' }} />
                </div>
              )}
            </div>

            {/* Column 3 */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {filtered.slice(2, 3).map((item, i) => (
                <div key={i} className="portfolio-item tall">
                  <img src={item.src} alt={item.alt} style={{ width: '100%', height: 380, objectFit: 'cover' }} />
                </div>
              ))}
              {/* Featured piece card */}
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