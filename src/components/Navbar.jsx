import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const HamburgerIcon = ({ open }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
    <line
      x1="3" y1="6" x2="21" y2="6"
      style={{
        transformOrigin: '12px 6px',
        transform: open ? 'translateY(6px) rotate(45deg)' : 'none',
        transition: 'transform 0.3s ease',
      }}
    />
    <line
      x1="3" y1="12" x2="21" y2="12"
      style={{
        opacity: open ? 0 : 1,
        transition: 'opacity 0.2s ease',
      }}
    />
    <line
      x1="3" y1="18" x2="21" y2="18"
      style={{
        transformOrigin: '12px 18px',
        transform: open ? 'translateY(-6px) rotate(-45deg)' : 'none',
        transition: 'transform 0.3s ease',
      }}
    />
  </svg>
)

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    { to: '/', label: 'Home' },
    { to: '/portfolio', label: 'Portfolio' },
    { to: '/commissions', label: 'Commissions' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ]

  return (
    <nav className="navbar" role="navigation" aria-label="Main navigation">
      <div className="navbar-inner">
        <NavLink to="/" className="navbar-brand" aria-label="Paintings by Georgia - Home">
          <img src="/assets/flower-small.png" alt="" aria-hidden="true" style={{ width: 60, height: 60, objectFit: 'contain' }} />
          <span className="navbar-logo-text">Paintings by Georgia</span>
        </NavLink>

        <ul className="navbar-links">
          {links.map(({ to, label }) => (
            <li key={to}>
              <NavLink to={to} className={({ isActive }) => isActive ? 'active' : ''} end={to === '/'}>
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        <button
          className="navbar-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <HamburgerIcon open={menuOpen} />
        </button>
      </div>

      <div className={`navbar-mobile ${menuOpen ? 'open' : ''}`} role="menu">
        {links.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) => isActive ? 'active' : ''}
            end={to === '/'}
            onClick={() => setMenuOpen(false)}
            role="menuitem"
          >
            {label}
          </NavLink>
        ))}
      </div>
    </nav>
  )
}