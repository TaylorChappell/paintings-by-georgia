// Pick the right PNG and transform based on position
const positionConfig = {
  'top-right': {
    top: 0, right: 0,
    transform: 'translate(10%, -5%)',
    img: '/assets/flower-corner.png',
  },
  'top-left': {
    top: 0, left: 0,
    transform: 'translate(-10%, -5%) scaleX(-1)',
    img: '/assets/flower-corner.png',
  },
  'bottom-left': {
    bottom: 0, left: 0,
    transform: 'translate(-10%, 10%) scaleX(-1)',
    img: '/assets/flower-large.png',
  },
  'bottom-right': {
    bottom: 0, right: 0,
    transform: 'translate(10%, 10%)',
    img: '/assets/flower-large.png',
  },
}

export default function FloralDecor({ position = 'top-right', size = 180, opacity = 0.5 }) {
  const config = positionConfig[position] || positionConfig['top-right']
  const { img, transform, ...pos } = config

  return (
    <img
      src={img}
      alt=""
      aria-hidden="true"
      className="floral-corner"
      style={{
        ...pos,
        width: size,
        height: size,
        opacity,
        transform,
        objectFit: 'contain',
        pointerEvents: 'none',
        userSelect: 'none',
      }}
    />
  )
}