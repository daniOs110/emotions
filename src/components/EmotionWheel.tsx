import { useMemo } from 'react'
import { emotionFamilies, type Emotion } from '../data/emotions'
import { useI18n } from '../i18n/I18nContext'

type Props = {
  path: Emotion[]
  onSelect: (emotion: Emotion) => void
}

function polar(cx: number, cy: number, r: number, angleDeg: number) {
  const rad = ((angleDeg - 90) * Math.PI) / 180
  return {
    x: cx + r * Math.cos(rad),
    y: cy + r * Math.sin(rad),
  }
}

function arcPath(
  cx: number,
  cy: number,
  innerR: number,
  outerR: number,
  startAngle: number,
  endAngle: number,
) {
  const large = endAngle - startAngle > 180 ? 1 : 0
  const p1 = polar(cx, cy, outerR, startAngle)
  const p2 = polar(cx, cy, outerR, endAngle)
  const p3 = polar(cx, cy, innerR, endAngle)
  const p4 = polar(cx, cy, innerR, startAngle)
  return [
    `M ${p1.x} ${p1.y}`,
    `A ${outerR} ${outerR} 0 ${large} 1 ${p2.x} ${p2.y}`,
    `L ${p3.x} ${p3.y}`,
    `A ${innerR} ${innerR} 0 ${large} 0 ${p4.x} ${p4.y}`,
    'Z',
  ].join(' ')
}

function shade(hex: string, amount: number) {
  const n = hex.replace('#', '')
  const num = parseInt(n, 16)
  const r = Math.min(255, Math.max(0, ((num >> 16) & 255) + amount))
  const g = Math.min(255, Math.max(0, ((num >> 8) & 255) + amount))
  const b = Math.min(255, Math.max(0, (num & 255) + amount))
  return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, '0')}`
}

export function EmotionWheel({ path, onSelect }: Props) {
  const { localize, t } = useI18n()
  const current = path[path.length - 1]
  const items: Emotion[] = useMemo(() => {
    if (current?.children?.length) return current.children
    if (!current) return emotionFamilies
    return []
  }, [current])

  const segments = useMemo(() => {
    const cx = 200
    const cy = 200
    const count = Math.max(items.length, 1)
    const slice = 360 / count
    return items.map((emotion, i) => {
      const start = i * slice
      const end = start + slice
      const mid = start + slice / 2
      const labelPos = polar(cx, cy, 128, mid)
      return {
        emotion,
        d: arcPath(cx, cy, 58, 178, start + 0.6, end - 0.6),
        labelX: labelPos.x,
        labelY: labelPos.y,
        fill: emotion.color,
      }
    })
  }, [items])

  const centerLabel = current ? localize(current.name) : t.brand

  return (
    <div className="wheel-svg-wrap">
      <svg className="wheel-svg" viewBox="0 0 400 400" role="img" aria-label={t.ctaWheel}>
        {segments.map((seg) => (
          <g key={seg.emotion.id}>
            <path
              className="wheel-segment"
              d={seg.d}
              fill={seg.fill}
              tabIndex={0}
              role="button"
              aria-label={localize(seg.emotion.name)}
              onClick={() => onSelect(seg.emotion)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  onSelect(seg.emotion)
                }
              }}
            />
            <text
              className="wheel-label"
              x={seg.labelX}
              y={seg.labelY}
              textAnchor="middle"
              dominantBaseline="middle"
            >
              {localize(seg.emotion.name)}
            </text>
          </g>
        ))}
        <circle className="wheel-center" cx="200" cy="200" r="52" fill={shade('#ffffff', 0)} />
        <text
          className="wheel-center-label"
          x="200"
          y="200"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          {centerLabel.length > 12 ? `${centerLabel.slice(0, 11)}…` : centerLabel}
        </text>
      </svg>
    </div>
  )
}
