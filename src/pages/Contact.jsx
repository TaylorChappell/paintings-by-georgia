import { useState } from 'react'
import FloralDecor from '../components/FloralDecor'
import FloralDivider from '../components/FloralDivider'

const MailIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="4" width="20" height="16" rx="2"/>
    <polyline points="2,4 12,13 22,4"/>
  </svg>
)

const ClockIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12 6 12 12 16 14"/>
  </svg>
)

const ShopIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
    <line x1="3" y1="6" x2="21" y2="6"/>
    <path d="M16 10a4 4 0 01-8 0"/>
  </svg>
)

const HeartIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
  </svg>
)

const GlobeIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10"/>
    <line x1="2" y1="12" x2="22" y2="12"/>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
  </svg>
)

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      {/* HERO */}
      <section style={{ padding: '4rem 0 3rem', position: 'relative' }}>
        <FloralDecor position="top-right" size={200} opacity={0.4} />
        <FloralDecor position="bottom-left" size={180} opacity={0.35} />

        <div className="container">
          <div className="hero-two-col" style={{ display: 'flex', alignItems: 'center', gap: '3rem' }}>
            <div style={{ flex: '0 0 48%', maxWidth: '48%' }}>
              <h1 className="heading-xl underline-accent">
                Get in <span className="rose">Touch</span>
              </h1>
              <div style={{ width: 80, height: 2.5, background: 'var(--rose)', borderRadius: 2, margin: '1.4rem 0 1.6rem' }} />
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.8, maxWidth: 380 }}>
                Tell me about your idea, your pet, or the piece you would love to commission.
              </p>
            </div>

            <div style={{ flex: 1 }}>
              {/* Small 2-image collage */}
              <div style={{ position: 'relative', height: 340 }}>
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: '5%',
                  width: '55%',
                  transform: 'rotate(-3deg)',
                  zIndex: 2,
                  borderRadius: 12,
                  overflow: 'hidden',
                  border: '3px solid #fff',
                  boxShadow: '0 8px 32px rgba(47,41,39,0.15)',
                  aspectRatio: '4/5',
                }}>
                  <img src="/assets/dog-portrait.png" alt="Dog portrait" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{
                  position: 'absolute',
                  top: '10%',
                  right: '0%',
                  width: '50%',
                  transform: 'rotate(4deg)',
                  zIndex: 3,
                  borderRadius: 12,
                  overflow: 'hidden',
                  border: '3px solid #fff',
                  boxShadow: '0 8px 32px rgba(47,41,39,0.15)',
                  aspectRatio: '4/5',
                }}>
                  <img src="/assets/TwoDogs-Painting.png" alt="Horse painting" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{
                  position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none',
                  background: 'radial-gradient(ellipse at center, rgba(245,214,221,0.2) 0%, transparent 70%)',
                }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FORM + DETAILS */}
      <section style={{ padding: '0 0 4rem' }}>
        <div className="container">
          <div className="contact-form-layout" style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: '1.5rem', alignItems: 'start' }}>
            {/* Form card */}
            <div className="card" style={{ padding: '2.5rem' }}>
              {!submitted ? (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      autoComplete="name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                      autoComplete="email"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      placeholder="What is this about?"
                      value={form.subject}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Tell me more about your idea..."
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                    />
                  </div>
                  <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', fontSize: '1rem', padding: '1rem' }}>
                    Send Message
                  </button>
                </form>
              ) : (
                <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>
                    <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="var(--rose)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ margin: '0 auto' }}>
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                      <polyline points="22 4 12 14.01 9 11.01"/>
                    </svg>
                  </div>
                  <h3 className="heading-md" style={{ marginBottom: '0.75rem' }}>Thank you!</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                    Your message is ready to send. I look forward to connecting with you.
                  </p>
                  <button
                    className="btn-outline"
                    style={{ marginTop: '1.5rem' }}
                    onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: '', message: '' }) }}
                  >
                    Send another message
                  </button>
                </div>
              )}
            </div>

            {/* Details card */}
            <div className="card" style={{ padding: '2rem' }}>
              <div className="contact-detail-item">
                <div className="contact-detail-icon"><MailIcon /></div>
                <div>
                  <div className="contact-detail-label">Email</div>
                  <a href="mailto:paintingsbygeorgiauk@outlook.com" className="contact-detail-value" style={{ color: 'var(--text-muted)' }}>
                    paintingsbygeorgiauk@outlook.com
                  </a>
                </div>
              </div>
              <div className="contact-detail-item">
                <div className="contact-detail-icon"><ClockIcon /></div>
                <div>
                  <div className="contact-detail-label">Response time</div>
                  <div className="contact-detail-value">2 to 3 days</div>
                </div>
              </div>
              <div className="contact-detail-item">
                <div className="contact-detail-icon"><ShopIcon /></div>
                <div>
                  <div className="contact-detail-label">Etsy shop</div>
                  <a href="https://etsy.com/shop/PaintingsByGeorgiaUK" target="_blank" rel="noopener noreferrer" className="contact-detail-value" style={{ color: 'var(--text-muted)' }}>
                    etsy.com/shop/<br />PaintingsByGeorgiaUK
                  </a>
                </div>
              </div>

              {/* Small floral */}
              <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'center' }}>
                <FloralDivider variant={1} />
              </div>
            </div>
          </div>

          {/* Bottom strip */}
          <div className="contact-strip">
            <div className="contact-strip-item">
              <div className="contact-strip-icon"><HeartIcon /></div>
              <div>
                <div style={{ fontWeight: 700, marginBottom: '0.3rem', fontSize: '0.95rem' }}>Custom commissions welcome</div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.7 }}>
                  Collaborative, personal artwork created to celebrate what matters most to you.
                </p>
              </div>
            </div>
            <div className="contact-strip-item">
              <div className="contact-strip-icon"><GlobeIcon /></div>
              <div>
                <div style={{ fontWeight: 700, marginBottom: '0.3rem', fontSize: '0.95rem' }}>Worldwide shipping available</div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.7 }}>
                  Carefully packaged and shipped with love, wherever you are.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}