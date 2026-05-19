export default function FloralDivider({ variant = 1 }) {
  const src = variant === 2 ? '/assets/flower-divider2.png' : '/assets/flower-divider.png'

  return (
    <div className="floral-divider" aria-hidden="true" style={{ display: 'flex', justifyContent: 'center', margin: '0.5rem 0 1.5rem' }}>
      <img
        src={src}
        alt=""
        style={{ width: 280, height: 114, objectFit: 'contain', opacity: 0.85 }}
      />
    </div>
  )
}