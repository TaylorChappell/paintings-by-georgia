import { Link } from 'react-router-dom'
import HeroCollage from '../components/HeroCollage'
import FloralDecor from '../components/FloralDecor'
import FloralDivider from '../components/FloralDivider'

const BrushIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M18 2l4 4-14 14H4v-4z"/>
    <path d="M4 22c0-2 1-3 2-4"/>
  </svg>
)

const PaletteIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c1.1 0 2-.9 2-2v-.5c0-.28-.11-.53-.29-.71A.996.996 0 0 1 13.5 18c0-.55.45-1 1-1H17c2.76 0 5-2.24 5-5 0-5.52-4.48-10-10-10z"/>
    <circle cx="6.5" cy="11.5" r="1.5" fill="currentColor" stroke="none"/>
    <circle cx="9.5" cy="7.5" r="1.5" fill="currentColor" stroke="none"/>
    <circle cx="14.5" cy="7.5" r="1.5" fill="currentColor" stroke="none"/>
  </svg>
)

const HeartIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
  </svg>
)

const heroImages = [
  { url: '/assets/dog-portrait.png', alt: 'Dog portrait painting' },
  { url: '/assets/red-portrait.png', alt: 'Portrait painting' },
  { url: '/assets/horse-painting.png', alt: 'Horse painting' },
  { url: '/assets/male-portrait.png', alt: 'Male portrait painting' },
]

const infoCols = [
  {
    icon: <BrushIcon />,
    title: 'Creative Approach',
    text: 'Every painting begins with connection. I focus on capturing the unique character, feeling, and story behind each subject through expressive brushwork and thoughtful detail.',
  },
  {
    icon: <PaletteIcon />,
    title: 'Materials',
    text: 'I work primarily with professional grade watercolours and gouache on high quality paper. I love the unpredictability of watercolour and the soft, luminous layers it creates.',
  },
  {
    icon: <HeartIcon />,
    title: 'What I Love to Paint',
    text: 'Pet portraits, people, and equestrian scenes are at the heart of my work. I am drawn to personality in a glance, the energy in a moment, and the beauty in everyday connections.',
  },
]

export default function About() {
  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      {/* HERO */}
      <section style={{ padding: '4rem 0 4rem', position: 'relative' }}>
        <FloralDecor position="top-right" size={200} opacity={0.4} />

        <div className="container">
          <div className="hero-two-col" style={{ display: 'flex', alignItems: 'center', gap: '3rem' }}>
            <div style={{ flex: '0 0 48%', maxWidth: '48%' }}>
              <h1 className="heading-xl underline-accent">
                About <span className="rose">Georgia</span>
              </h1>
              <div style={{ width: 80, height: 2.5, background: 'var(--rose)', borderRadius: 2, margin: '1.4rem 0 1.8rem' }} />
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem', marginBottom: '2.5rem', lineHeight: 1.8, maxWidth: 400 }}>
                Georgia creates thoughtful paintings inspired by personality, emotion, and atmosphere.
              </p>

              {/* Quote card */}
              <div className="quote-card" style={{ maxWidth: 360, position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', bottom: -10, right: -10, opacity: 0.15 }} aria-hidden="true">
                  <img src="/assets/flower-small.png" alt="" style={{ width: 80, height: 80, objectFit: 'contain' }} />
                </div>
                <span className="quote-mark">&ldquo;</span>
                <p className="quote-text">
                  I want every piece to feel personal, expressive, and made with care.
                </p>
              </div>
            </div>

            <div style={{ flex: 1 }}>
              <HeroCollage images={heroImages} size="large" />
            </div>
          </div>
        </div>
      </section>

      {/* INFO COLUMNS */}
      <section className="section" style={{ background: '#fff' }}>
        <FloralDecor position="bottom-left" size={160} opacity={0.3} />
        <FloralDecor position="top-right" size={140} opacity={0.25} />
        <div className="container">
          <div className="info-cols">
            {infoCols.map((col, i) => (
              <div key={i}>
                <div className="info-col-icon">{col.icon}</div>
                <div className="info-col-title">{col.title}</div>
                <p className="info-col-text">{col.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '4rem 0 5rem' }}>
        <div className="container">
          <div className="about-cta">
            <div>
              <h2 className="heading-lg" style={{ marginBottom: '0.4rem' }}>
                Available for<br />
                <span className="rose">commissions</span>
              </h2>
              <div style={{ width: 60, height: 2, background: 'var(--rose)', borderRadius: 2, margin: '1rem 0 1rem' }} />
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                I would love to create something meaningful for you or someone you love.
              </p>
            </div>

            <div className="about-cta-divider" />

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '1rem' }}>
              <FloralDivider variant={1} />
              <Link to="/contact" className="btn-primary" style={{ fontSize: '1rem', padding: '1rem 2.5rem' }}>
                Get in Touch
              </Link>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem' }}>
                Let's bring your story to life in an original painting.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}