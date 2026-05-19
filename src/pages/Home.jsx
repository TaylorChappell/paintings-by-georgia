import { Link } from 'react-router-dom'
import HeroCollage from '../components/HeroCollage'
import FloralDecor from '../components/FloralDecor'
import FloralDivider from '../components/FloralDivider'

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="5" y1="12" x2="19" y2="12"/>
    <polyline points="12 5 19 12 12 19"/>
  </svg>
)

const PawIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="11" cy="4" r="2"/>
    <circle cx="18" cy="8" r="2"/>
    <circle cx="4" cy="8" r="2"/>
    <path d="M12 17c-3 0-6-2-6-5s1.5-5 6-5 6 2 6 5-3 5-6 5z"/>
  </svg>
)

const PortraitIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="8" r="4"/>
    <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
  </svg>
)

const BrushIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M18 2l4 4-14 14H4v-4z"/>
    <path d="M4 22c0-2 1-3 2-4"/>
  </svg>
)

const HeartIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
  </svg>
)

const PaintbrushIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M18 2l4 4-14 14H4v-4z"/>
    <path d="M4 22c0-2 1-3 2-4"/>
  </svg>
)

const GiftIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="20 12 20 22 4 22 4 12"/>
    <rect x="2" y="7" width="20" height="5"/>
    <line x1="12" y1="22" x2="12" y2="7"/>
    <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/>
    <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/>
  </svg>
)

const heroImages = [
  { url: '/assets/dog-portrait.png', alt: 'Watercolour dog portrait' },
  { url: '/assets/Parrot.png', alt: 'Parrot painting' },
  { url: '/assets/horse-painting.png', alt: 'Equestrian painting' },
  { url: '/assets/MeganFox-Portrait.png', alt: 'Megan Fox portrait' },
]

const featuredCards = [
  {
    img: '/assets/dog-portrait.png',
    alt: 'Pet portrait - spaniel dog',
    icon: <PawIcon />,
    title: 'Pet Portraits',
    desc: 'Custom pet portraits that capture their spirit.',
  },
  {
    img: '/assets/MeganFox-Portrait.png',
    alt: 'Megan Fox portrait',
    icon: <PortraitIcon />,
    title: 'Portraits',
    desc: 'Watercolor portraits full of character and emotion.',
  },
  {
    img: '/assets/distressed-cardboard-dog.png',
    alt: 'Mixed media distressed cardboard dog',
    icon: <BrushIcon />,
    title: 'Mixed Media',
    desc: 'Bold, expressive paintings with vibrant energy.',
  },
  {
    img: '/assets/Daredevil-Portrait.png',
    alt: 'Daredevil portrait commission',
    icon: <HeartIcon />,
    title: 'Commissions',
    desc: 'Personalized artwork made just for you.',
  },
]

const whyBlocks = [
  {
    icon: <PaintbrushIcon />,
    title: 'Hand painted',
    desc: 'Every piece is carefully painted by hand with attention to detail.',
  },
  {
    icon: <HeartIcon />,
    title: 'Custom commissions',
    desc: 'Collaborative, personal artwork created to celebrate what matters.',
  },
  {
    icon: <GiftIcon />,
    title: 'Thoughtful presentation',
    desc: 'Professional finish with care, ready to gift or treasure.',
  },
]

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section style={{ position: 'relative', overflow: 'hidden', padding: '4rem 0 5rem' }}>
        <FloralDecor position="top-right" size={220} opacity={0.4} />
        <FloralDecor position="bottom-left" size={180} opacity={0.3} />

        <div className="container">
          <div className="hero-two-col" style={{ display: 'flex', alignItems: 'center', gap: '3rem' }}>
            {/* Left */}
            <div style={{ flex: '0 0 42%', maxWidth: '42%' }}>
              <h1 className="heading-xl underline-accent" style={{ marginBottom: '0.5rem' }}>
                Original art<br />
                with <span className="rose">heart</span> and<br />
                personality
              </h1>
              <div style={{ width: 80, height: 2.5, background: 'var(--rose)', borderRadius: 2, margin: '1.4rem 0 1.6rem' }} />
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.75, marginBottom: '2rem', maxWidth: 360 }}>
                Pet portraits, portrait studies, and expressive paintings made to feel personal and memorable.
              </p>
              <div className="hero-btn-group" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link to="/portfolio" className="btn-primary">View Portfolio</Link>
                <a href="https://etsy.com/shop/PaintingsByGeorgiaUK" target="_blank" rel="noopener noreferrer" className="btn-outline">Shop on Etsy</a>
              </div>
            </div>

            {/* Right */}
            <div style={{ flex: 1 }}>
              <HeroCollage images={heroImages} size="large" />
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED WORK */}
      <section className="section" style={{ background: '#fff' }}>
        <div className="container">
          <div className="section-heading">
            <FloralDivider variant={1} />
            <h2>Featured Work</h2>
            <span className="underline-rose" />
          </div>

          <div className="featured-work-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.25rem' }}>
            {featuredCards.map((card, i) => (
              <div key={i} className="artwork-card">
                <img src={card.img} alt={card.alt} />
                <div className="artwork-card-body">
                  <div className="artwork-card-icon">{card.icon}</div>
                  <div className="artwork-card-title">{card.title}</div>
                  <p className="artwork-card-desc">{card.desc}</p>
                  <div className="artwork-card-arrow">
                    <ArrowIcon />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY COLLECTORS */}
      <section className="section why-section">
        <FloralDecor position="bottom-left" size={160} opacity={0.3} />
        <div className="container">
          <div className="section-heading">
            <h2>Why collectors choose Georgia</h2>
            <FloralDivider variant={2} />
          </div>

          <div className="why-grid">
            {whyBlocks.map((block, i) => (
              <div key={i} className="why-block">
                <div className="why-icon">{block.icon}</div>
                <div>
                  <div className="feature-title" style={{ marginBottom: '0.5rem' }}>{block.title}</div>
                  <p className="feature-desc">{block.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}