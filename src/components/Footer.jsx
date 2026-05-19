import { Link } from 'react-router-dom'
import FloralDecor from './FloralDecor'

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

const MailSmIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="4" width="20" height="16" rx="2"/>
    <polyline points="2,4 12,13 22,4"/>
  </svg>
)

const ShopIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
    <line x1="3" y1="6" x2="21" y2="6"/>
    <path d="M16 10a4 4 0 01-8 0"/>
  </svg>
)

export default function Footer() {
  return (
    <footer className="footer">
      <FloralDecor position="bottom-left" size={140} opacity={0.35} />
      <FloralDecor position="bottom-right" size={120} opacity={0.3} />

      <div className="footer-inner">
        <div className="footer-brand">
          <span className="footer-logo">Paintings by Georgia</span>
          <span className="footer-tagline">Original art with heart and personality.</span>
        </div>

        <div className="footer-links">
          <div className="footer-link-item">
            <MailSmIcon />
            <a href="mailto:paintingsbygeorgiauk@outlook.com">paintingsbygeorgiauk@outlook.com</a>
          </div>
          <div className="footer-link-item">
            <ShopIcon />
            <a href="https://etsy.com/shop/PaintingsByGeorgiaUK" target="_blank" rel="noopener noreferrer">etsy.com/shop/PaintingsByGeorgiaUK</a>
          </div>
        </div>

        <div className="footer-social">
          <a href="https://instagram.com/Paintingsbygeorgiauk" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="Instagram">
            <InstagramIcon />
          </a>
          <a href="https://pinterest.com/Paintingsbygeorgiauk" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="Pinterest">
            <PinterestIcon />
          </a>
          <a href="mailto:paintingsbygeorgiauk@outlook.com" className="social-btn" aria-label="Email">
            <EmailIcon />
          </a>
        </div>
      </div>
    </footer>
  )
}