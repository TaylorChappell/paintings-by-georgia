import { Link } from 'react-router-dom'
import HeroCollage from '../components/HeroCollage'
import FloralDecor from '../components/FloralDecor'
import FloralDivider from '../components/FloralDivider'

const CameraIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
    <circle cx="12" cy="13" r="4"/>
  </svg>
)

const PaletteIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c1.1 0 2-.9 2-2v-.5c0-.28-.11-.53-.29-.71A.996.996 0 0 1 13.5 18c0-.55.45-1 1-1H17c2.76 0 5-2.24 5-5 0-5.52-4.48-10-10-10z"/>
    <circle cx="6.5" cy="11.5" r="1.5" fill="currentColor" stroke="none"/>
    <circle cx="9.5" cy="7.5" r="1.5" fill="currentColor" stroke="none"/>
    <circle cx="14.5" cy="7.5" r="1.5" fill="currentColor" stroke="none"/>
    <circle cx="17.5" cy="11.5" r="1.5" fill="currentColor" stroke="none"/>
  </svg>
)

const ChatIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
  </svg>
)

const BoxIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
    <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
    <line x1="12" y1="22.08" x2="12" y2="12"/>
  </svg>
)

const heroImages = [
  { url: '/assets/dog-portrait.png', alt: 'Dog portrait commission' },
  { url: '/assets/red-portrait.png', alt: 'Portrait commission' },
  { url: '/assets/horse-painting.png', alt: 'Horse painting commission' },
  { url: '/assets/male-portrait.png', alt: 'Male portrait commission' },
]

const steps = [
  { num: 1, icon: <CameraIcon />, title: 'Send your photo', desc: 'Share your photos and any details.' },
  { num: 2, icon: <PaletteIcon />, title: 'Choose your style', desc: 'Select the look and medium you love.' },
  { num: 3, icon: <ChatIcon />, title: 'Review the plan', desc: 'Approve the sketch, composition, and details.' },
  { num: 4, icon: <BoxIcon />, title: 'Receive your artwork', desc: 'Your finished painting is carefully packaged and shipped to you.' },
]

const commissionOptions = [
  {
    img: '/assets/dog-portrait.png',
    alt: 'Pet portrait example',
    title: 'Pet Portrait',
    desc: 'Hand painted portraits that capture your pet\'s spirit and personality.',
  },
  {
    img: '/assets/male-portrait.png',
    alt: 'Portrait study example',
    title: 'Portrait',
    desc: 'Expressive portrait studies focused on character and feeling.',
  },
  {
    img: '/assets/horse-painting.png',
    alt: 'Custom mixed media example',
    title: 'Custom Mixed Media',
    desc: 'Vibrant, energetic paintings that blend colour, texture, and movement.',
  },
]

export default function Commissions() {
  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      {/* HERO */}
      <section style={{ padding: '4rem 0 4rem', position: 'relative' }}>
        <FloralDecor position="top-right" size={200} opacity={0.4} />
        <FloralDecor position="bottom-left" size={160} opacity={0.3} />

        <div className="container">
          <div className="hero-two-col" style={{ display: 'flex', alignItems: 'center', gap: '3rem' }}>
            <div style={{ flex: '0 0 42%', maxWidth: '42%' }}>
              <h1 className="heading-xl underline-accent">
                Commission<br />
                a <span className="rose">Painting</span>
              </h1>
              <div style={{ width: 80, height: 2.5, background: 'var(--rose)', borderRadius: 2, margin: '1.4rem 0 1.6rem' }} />
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem', marginBottom: '2rem', lineHeight: 1.75 }}>
                Custom artwork created from your photos and ideas.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link to="/contact" className="btn-primary">Start Your Commission</Link>
                <Link to="/portfolio" className="btn-outline">View Portfolio</Link>
              </div>
            </div>
            <div style={{ flex: 1 }}>
              <HeroCollage images={heroImages} size="large" />
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section" style={{ background: '#fff' }}>
        <div className="container">
          <div className="section-heading">
            <FloralDivider variant={2} />
            <h2>My Commission Process</h2>
            <span className="underline-rose" />
          </div>

          <div className="process-steps">
            {steps.map((step) => (
              <div key={step.num} className="process-step">
                <div className="step-number">{step.num}</div>
                <div className="step-icon">{step.icon}</div>
                <div className="step-title">{step.title}</div>
                <p className="step-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMMISSION OPTIONS */}
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>Commission Options</h2>
            <span className="underline-rose" />
          </div>

          <div className="commission-options-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
            {commissionOptions.map((opt, i) => (
              <div key={i} className="commission-option-card">
                <img src={opt.img} alt={opt.alt} />
                <div className="commission-option-card-body">
                  <div className="commission-option-title">{opt.title}</div>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.7 }}>{opt.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ padding: '0 0 5rem' }}>
        <div className="container">
          <div className="how-it-works">
            <div>
              <h2 className="heading-md" style={{ marginBottom: '0.5rem' }}>How it works</h2>
              <div style={{ width: 50, height: 2, background: 'var(--rose)', borderRadius: 2, marginBottom: '1rem' }} />
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.8 }}>
                Every commission is discussed personally to make sure the final piece feels right for you.
              </p>
              <Link to="/contact" className="btn-primary" style={{ marginTop: '1.5rem', display: 'inline-flex' }}>
                Get in Touch
              </Link>
            </div>
            <div className="how-images">
              <img src="/assets/dog-portrait.png" alt="Dog portrait" />
              <img src="/assets/male-portrait.png" alt="Male portrait" />
              <img src="/assets/horse-painting.png" alt="Horse painting" />
              <img src="/assets/red-portrait.png" alt="Portrait study" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}