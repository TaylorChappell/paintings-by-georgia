export default function HeroCollage({ images, size = 'large' }) {
  const isLarge = size === 'large'

  // Positions for a 4-image collage
  const layouts = [
    { top: '0%', left: '8%', width: isLarge ? '52%' : '50%', rotate: '-3deg', zIndex: 3 },
    { top: '5%', right: '0%', width: isLarge ? '44%' : '42%', rotate: '4deg', zIndex: 2 },
    { top: '42%', left: '0%', width: isLarge ? '45%' : '42%', rotate: '3deg', zIndex: 4 },
    { top: '40%', right: '5%', width: isLarge ? '46%' : '44%', rotate: '-2deg', zIndex: 3 },
  ]

  const smallLayouts = [
    { top: '0%', left: '5%', width: '48%', rotate: '-3deg', zIndex: 3 },
    { top: '3%', right: '0%', width: '44%', rotate: '4deg', zIndex: 2 },
  ]

  const useLayouts = images.length === 2 ? smallLayouts : layouts
  const imgs = images.slice(0, useLayouts.length)

  return (
    <div className="hero-collage" aria-hidden="true">
      {imgs.map((src, i) => {
        const layout = useLayouts[i]
        return (
          <div
            key={i}
            className="collage-img"
            style={{
              top: layout.top,
              left: layout.left,
              right: layout.right,
              width: layout.width,
              zIndex: layout.zIndex,
              transform: `rotate(${layout.rotate})`,
              aspectRatio: '4/5',
            }}
          >
            <img
              src={src.url}
              alt={src.alt}
              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px' }}
            />
          </div>
        )
      })}

      {/* Soft floral background behind collage */}
      <div style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        background: 'radial-gradient(ellipse at center, rgba(245,214,221,0.25) 0%, transparent 70%)',
      }} />
    </div>
  )
}
