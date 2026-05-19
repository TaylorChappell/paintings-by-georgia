import { Link } from 'react-router-dom'
import HeroCollage from '../components/HeroCollage'
import FloralDecor from '../components/FloralDecor'
import FloralDivider from '../components/FloralDivider'

const ShopBagIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
    <line x1="3" y1="6" x2="21" y2="6"/>
    <path d="M16 10a4 4 0 01-8 0"/>
  </svg>
)

const EtsyCircleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10"/>
    <path d="M8 12h8"/>
    <path d="M12 8v8"/>
  </svg>
)

const LockIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
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

const MessageIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
  </svg>
)

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="5" y1="12" x2="19" y2="12"/>
    <polyline points="12 5 19 12 12 19"/>
  </svg>
)

const heroImages = [
  { url: '/assets/dog-portrait.png', alt: 'Dog portrait print' },
  { url: '/assets/red-portrait.png', alt: 'Portrait print' },
  { url: '/assets/horse-painting.png', alt: 'Horse painting print' },
  { url: '/assets/male-portrait.png', alt: 'Portrait study print' },
]

const products = [
  {
    img: '/assets/dog-portrait.png',
    alt: 'Dog portrait giclée print',
    title: 'Dog Portrait Print',
    desc: 'High quality giclée print of an original watercolour painting.',
    price: '£28.00+',
  },
  {
    img: '/assets/horse-painting.png',
    alt: 'Horse painting archival print',
    title: 'Horse Painting Print',
    desc: 'Vibrant equestrian art print on archival paper.',
    price: '£32.00+',
  },
  {
    img: '/assets/male-portrait.png',
    alt: 'Portrait study print',
    title: 'Portrait Study',
    desc: 'Watercolour portrait study print from an original piece.',
    price: '£28.00+',
  },
  {
    img: '/assets/red-portrait.png',
    alt: 'Custom commission painting',
    title: 'Custom Commission',
    desc: 'Custom hand painted portraits made just for you.',
    price: '£150.00+',
  },
]

const trustItems = [
  { icon: <LockIcon />, title: 'Secure checkout', desc: "Shop confidently with Etsy's secure payment system." },
  { icon: <GiftIcon />, title: 'Gift ready options', desc: 'Many items arrive ready to gift with care.' },
  { icon: <MessageIcon />, title: 'Message me on Etsy', desc: 'Have a question or request? I am here to help.' },
]

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
  </svg>
)

const PinterestIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 2C6.48 2 2 6.48 2 12c0 4.24 2.65 7.86 6.39 9.29-.09-.78-.17-1.98.04-2.83.18-.76 1.22-5.16 1.22-5.16s-.31-.63-.31-1.56c0-1.46.85-2.55 1.9-2.55.9 0 1.33.67 1.33 1.48 0 .9-.57 2.26-.87 3.51-.25 1.05.52 1.9 1.55 1.9 1.86 0 3.11-2.4 3.11-5.23 0-2.16-1.46-3.67-3.56-3.67-2.42 0-3.84 1.82-3.84 3.7 0 .73.28 1.52.63 1.95.07.08.08.15.06.23-.06.27-.21.85-.24.97-.04.16-.13.19-.3.11-1.13-.52-1.83-2.17-1.83-3.49 0-2.84 2.06-5.44 5.94-5.44 3.12 0 5.55 2.22 5.55 5.19 0 3.1-1.95 5.59-4.65 5.59-.91 0-1.76-.47-2.05-1.03l-.56 2.08c-.2.78-.75 1.76-1.12 2.35.84.26 1.74.4 2.67.4 5.52 0 10-4.48 10-10S17.52 2 12 2z"/>
  </svg>
)

const EmailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="4" width="20" height="16" rx="2"/>
    <polyline points="2,4 12,13 22,4"/>
  </svg>
)

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/commissions', label: 'Commissions' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
  { to: '/etsy', label: 'Etsy' },
]

export default function Etsy() {
  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      {/* HERO */}
      <section style={{ padding: '4rem 0 4rem', position: 'relative' }}>
        <FloralDecor position="top-right" size={210} opacity={0.4} />
        <FloralDecor position="bottom-left" size={160} opacity={0.3} />

        <div className="container">
          <div className="hero-two-col" style={{ display: 'flex', alignItems: 'center', gap: '3rem' }}>
            <div style={{ flex: '0 0 42%', maxWidth: '42%' }}>
              <h1 className="heading-xl underline-accent">
                Shop on <span className="rose">Etsy</span>
              </h1>
              <div style={{ width: 80, height: 2.5, background: 'var(--rose)', borderRadius: 2, margin: '1.4rem 0 1.6rem' }} />
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem', marginBottom: '2rem', lineHeight: 1.75 }}>
                Browse original art, prints, and commission options in my Etsy shop.
              </p>

              <a
                href="https://etsy.com/shop/PaintingsByGeorgiaUK"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ marginBottom: '1.2rem', display: 'inline-flex' }}
              >
                <ShopBagIcon />
                Visit Etsy Shop
              </a>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--rose)', fontSize: '0.9rem' }}>
                <EtsyCircleIcon />
                <a href="https://etsy.com/shop/PaintingsByGeorgiaUK" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--rose)' }}>
                  etsy.com/shop/PaintingsByGeorgiaUK
                </a>
              </div>
            </div>

            <div style={{ flex: 1 }}>
              <HeroCollage images={heroImages} size="large" />
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED ON ETSY */}
      <section className="section" style={{ background: '#fff' }}>
        <div className="container">
          <div className="section-heading">
            <FloralDivider variant={2} />
            <h2>Featured on Etsy</h2>
            <span className="underline-rose" />
          </div>

          <div className="etsy-products-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.25rem' }}>
            {products.map((prod, i) => (
              <div key={i} className="product-card">
                <img src={prod.img} alt={prod.alt} />
                <div className="product-card-body">
                  <div className="product-card-title">{prod.title}</div>
                  <p className="product-card-desc">{prod.desc}</p>
                  <div className="product-card-price">{prod.price}</div>
                  <a
                    href="https://etsy.com/shop/PaintingsByGeorgiaUK"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline"
                    style={{ width: '100%', justifyContent: 'center', fontSize: '0.875rem', padding: '0.6rem 1rem' }}
                  >
                    View on Etsy
                    <ArrowIcon />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section style={{ padding: '0 0 5rem' }}>
        <div className="container">
          <div className="trust-strip">
            {trustItems.map((item, i) => (
              <div key={i} className="trust-item">
                <div className="trust-icon">{item.icon}</div>
                <div>
                  <div style={{ fontWeight: 700, marginBottom: '0.3rem', fontSize: '0.95rem' }}>{item.title}</div>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', lineHeight: 1.7 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXTENDED FOOTER FOR ETSY PAGE */}
      <section style={{ background: 'var(--rose-pale)', borderTop: '1px solid var(--border)', padding: '3rem 0', position: 'relative', overflow: 'hidden' }}>
        <FloralDecor position="bottom-left" size={140} opacity={0.3} />
        <FloralDecor position="bottom-right" size={130} opacity={0.25} />
        <div className="container">
          <div className="etsy-footer-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '3rem', flexWrap: 'wrap' }}>
            {/* Brand */}
            <div>
              <div style={{ fontFamily: 'var(--font-script)', fontSize: '1.5rem', marginBottom: '0.6rem' }}>Paintings by Georgia</div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', lineHeight: 1.75, marginBottom: '0.4rem' }}>Original art with heart and personality.</p>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Thank you for supporting handmade.</p>
            </div>

            {/* Quick links */}
            <div>
              <div style={{ fontWeight: 700, marginBottom: '1rem', fontSize: '0.95rem' }}>Quick Links</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {navLinks.map(({ to, label }) => (
                  <Link key={to} to={to} style={{ fontSize: '0.875rem', color: 'var(--text-muted)', transition: 'color 0.2s' }}
                    onMouseEnter={e => e.target.style.color = 'var(--rose)'}
                    onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Connect */}
            <div>
              <div style={{ fontWeight: 700, marginBottom: '1rem', fontSize: '0.95rem' }}>Let's Connect</div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '1rem', lineHeight: 1.7 }}>
                Follow along for new artwork, behind the scenes, and more.
              </p>
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="Instagram"><InstagramIcon /></a>
                <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="Pinterest"><PinterestIcon /></a>
                <a href="mailto:hello@paintingsbygeorgia.com" className="social-btn" aria-label="Email"><EmailIcon /></a>
              </div>
            </div>
          </div>

          <div style={{ borderTop: '1px solid var(--border)', marginTop: '2.5rem', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem' }}>
            <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>hello@paintingsbygeorgia.com</span>
            <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>etsy.com/shop/PaintingsByGeorgiaUK</span>
          </div>
        </div>
      </section>
    </div>
  )
}