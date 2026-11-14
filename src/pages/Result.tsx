import { useState } from 'react'
import { TipList } from '../components/TipList'
import type { Emotion, Locale } from '../data/emotions'
import { getFamilyIdForEmotion } from '../data/emotions'
import { useI18n } from '../i18n/I18nContext'
import { saveCheckIn } from '../lib/storage'

type Props = {
  emotion: Emotion
  familyId: string
  source: 'quiz' | 'wheel'
  onHome: () => void
  onHistory: () => void
}

export function Result({ emotion, familyId, source, onHome, onHistory }: Props) {
  const { t, localize, locale } = useI18n()
  const [saved, setSaved] = useState(false)
  const accent = emotion.color
  const resolvedFamily = familyId || getFamilyIdForEmotion(emotion.id) || emotion.id

  const handleSave = () => {
    saveCheckIn({
      emotionId: emotion.id,
      familyId: resolvedFamily,
      source,
      locale: locale as Locale,
    })
    setSaved(true)
  }

  return (
    <section className="result-stage" style={{ ['--family-color' as string]: accent }}>
      <div className="result-emotion">
        <p className="result-kicker">
          {source === 'wheel' ? t.resultFromWheel : t.resultTitle}
        </p>
        <h1 className="result-name">{localize(emotion.name)}</h1>
        <p className="result-desc">{localize(emotion.description)}</p>
      </div>

      <TipList tips={emotion.tips} />

      <div className="cta-row">
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleSave}
          disabled={saved}
        >
          {saved ? t.saved : t.saveCheckIn}
        </button>
        <button type="button" className="btn btn-ghost" onClick={onHome}>
          {t.startOver}
        </button>
        <button type="button" className="btn btn-text" onClick={onHistory}>
          {t.ctaHistory}
        </button>
      </div>

      <p className="disclaimer">{t.disclaimer}</p>
    </section>
  )
}
