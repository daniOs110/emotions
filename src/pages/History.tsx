import { useMemo, useState } from 'react'
import { getEmotionById } from '../data/emotions'
import { useI18n } from '../i18n/I18nContext'
import { clearCheckIns, loadCheckIns } from '../lib/storage'

type Props = {
  onBack: () => void
}

export function History({ onBack }: Props) {
  const { t, localize, locale } = useI18n()
  const [items, setItems] = useState(() => loadCheckIns())

  const formatted = useMemo(() => {
    return items.map((item) => {
      const emotion = getEmotionById(item.emotionId)
      const date = new Date(item.createdAt)
      const dateLabel = new Intl.DateTimeFormat(locale === 'es' ? 'es' : 'en', {
        dateStyle: 'medium',
        timeStyle: 'short',
      }).format(date)
      return {
        ...item,
        name: emotion ? localize(emotion.name) : item.emotionId,
        color: emotion?.color ?? '#1f7a6c',
        dateLabel,
      }
    })
  }, [items, locale, localize])

  const handleClear = () => {
    clearCheckIns()
    setItems([])
  }

  return (
    <section className="history-stage">
      <div className="nav-row">
        <button type="button" className="btn btn-text" onClick={onBack}>
          {t.back}
        </button>
        {items.length > 0 && (
          <button type="button" className="btn btn-text" onClick={handleClear}>
            {t.historyClear}
          </button>
        )}
      </div>

      <h1 className="question-prompt">{t.historyTitle}</h1>

      {formatted.length === 0 ? (
        <p className="disclaimer">{t.historyEmpty}</p>
      ) : (
        <ul className="history-list">
          {formatted.map((item) => (
            <li key={item.id} className="history-item" style={{ borderLeft: `4px solid ${item.color}` }}>
              <div>
                <strong>{item.name}</strong>
                <div className="history-meta">
                  {item.source === 'quiz' ? t.sourceQuiz : t.sourceWheel}
                </div>
              </div>
              <div className="history-meta">{item.dateLabel}</div>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
