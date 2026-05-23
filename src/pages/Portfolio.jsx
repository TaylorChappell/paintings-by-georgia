import { useState } from 'react'
import FloralDecor from '../components/FloralDecor'

// ============================================================
// PORTFOLIO IMAGES - Edit everything here
// ============================================================
// src          - filename in /public/assets/
// alt          - description (for accessibility)
// category     - 'Pets' | 'Portraits' | 'Mixed Media' | 'Canvas'
//                use an array for multiple: ['Pets', 'Mixed Media']
// height       - how tall the image box is in pixels
// objectPos    - which part of the image to show
//                examples: 'center', 'top', 'bottom',
//                          'center 20%' (20% from top),
//                          'left top', 'right bottom'
// ============================================================

const portfolioItems = [
  {
    src:       '/assets/dog-portrait.png',
    alt:       'Watercolour spaniel dog portrait',
    category:  'Pets',
    height:    380,
    objectPos: 'center',
  },
  {
    src:       '/assets/horse-painting.png',
    alt:       'Equestrian jockey and horse painting',
    category:  ['Pets', 'Mixed Media'],
    height:    420,
    objectPos: 'center',
  },
  {
    src:       '/assets/MeganFox-Portrait.png',
    alt:       'Megan Fox portrait',
    category:  'Portraits',
    height:    450,
    objectPos: 'center',
  },
  {
    src:       '/assets/distressed-cardboard-dog.png',
    alt:       'Dog portrait on distressed cardboard texture',
    category:  ['Pets', 'Mixed Media'],
    height:    350,
    objectPos: 'center 80%',
  },
  {
    src:       '/assets/Parrot.png',
    alt:       'Parrot painting',
    category:  'Pets',
    height:    400,
    objectPos: 'center 70%',
  },
  {
    src:       '/assets/TwoDogs-Painting.png',
    alt:       'Parrot painting',
    category:  'Pets',
    height:    400,
    objectPos: 'center 70%',
  },
  {
    src:       '/assets/Daredevil-Portrait.png',
    alt:       'Daredevil portrait on canvas',
    category:  ['Portraits', 'Canvas'],
    height:    400,
    objectPos: 'center 70%',
  },
  {
    src:       '/assets/red-portrait.png',
    alt:       'Portrait study on red background',
    category:  'Portraits',
    height:    300,
    objectPos: 'center 70%',
  },
  {
    src:       '/assets/male-portrait.png',
    alt:       'Male portrait study',
    category:  'Portraits',
    height:    350,
    objectPos: 'center 60%',
  },
]

// ============================================================

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All')
  const filters = ['All', 'Pets', 'Portraits', 'Mixed Media', 'Canvas']

  const filtered = activeFilter === 'All'
    ? portfolioItems
    : portfolioItems.filter(item =>
        Array.isArray(item.category)
          ? item.category.includes(activeFilter)
          : item.category === activeFilter
      )

  const col1 = filtered.filter((_, i) => i % 3 === 0)
  const col2 = filtered.filter((_, i) => i % 3 === 1)
  const col3 = filtered.filter((_, i) => i % 3 === 2)

  const renderItem = (item, i) => (
    <div key={i} className="portfolio-item">
      <img
        src={item.src}
        alt={item.alt}
        style={{
          width: '100%',
          height: item.height,
          objectFit: 'cover',
          objectPosition: item.objectPos,
        }}
      />
    </div>
  )

  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      <FloralDecor position="top-right" size={200} opacity={0.4} />
      <FloralDecor position="bottom-left" size={150} opacity={0.3} />

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

      <section style={{ paddingBottom: '5rem' }}>
        <div className="container">
          <div className="portfolio-grid">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {col1.map(renderItem)}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {col2.map(renderItem)}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {col3.map(renderItem)}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}