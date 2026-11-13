import { useState } from 'react'
import { EmotionWheel } from '../components/EmotionWheel'
import type { Emotion } from '../data/emotions'
import { useI18n } from '../i18n/I18nContext'

type Props = {
  onBack: () => void
  onComplete: (emotion: Emotion, familyId: string) => void
}

export function WheelExplore({ onBack, onComplete }: Props) {
  const { t, localize } = useI18n()
  const [path, setPath] = useState<Emotion[]>([])

  const current = path[path.length - 1]
  const familyId = path[0]?.id ?? current?.id ?? 'joy'
  const accent = current?.color ?? path[0]?.color ?? '#1f7a6c'
  const canConfirm = Boolean(current)

  const select = (emotion: Emotion) => {
    if (emotion.children?.length) {
      setPath((p) => [...p, emotion])
      return
    }
    setPath((p) => [...p, emotion])
  }

  const jumpTo = (index: number) => {
    if (index < 0) {
      setPath([])
      return
    }
    setPath((p) => p.slice(0, index + 1))
  }

  const confirm = () => {
    if (!current) return
    onComplete(current, familyId)
  }

  return (
    <section className="wheel-stage" style={{ ['--family-color' as string]: accent }}>
      <div className="nav-row">
        <button type="button" className="btn btn-text" onClick={onBack}>
          {t.back}
        </button>
      </div>

      <nav className="breadcrumb" aria-label="Breadcrumb">
        <button type="button" onClick={() => jumpTo(-1)}>
          {t.wheelBreadcrumbRoot}
        </button>
        {path.map((emotion, i) => (
          <span key={emotion.id}>
            <span aria-hidden="true"> / </span>
            <button type="button" onClick={() => jumpTo(i)}>
              {localize(emotion.name)}
            </button>
          </span>
        ))}
      </nav>

      <p className="disclaimer">{t.wheelHint}</p>

      <div className="wheel-layout">
        {current && !current.children?.length ? (
          <div className="panel result-emotion">
            <p className="result-kicker">{t.resultFromWheel}</p>
            <h1 className="result-name">{localize(current.name)}</h1>
            <p className="result-desc">{localize(current.description)}</p>
          </div>
        ) : (
          <EmotionWheel path={path} onSelect={select} />
        )}

        {canConfirm && (
          <button type="button" className="btn btn-primary btn-block" onClick={confirm}>
            {t.wheelConfirm}
          </button>
        )}
      </div>
    </section>
  )
}
