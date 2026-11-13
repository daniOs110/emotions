import { useI18n } from '../i18n/I18nContext'

type Props = {
  onQuiz: () => void
  onWheel: () => void
  onHistory: () => void
}

export function Home({ onQuiz, onWheel, onHistory }: Props) {
  const { t } = useI18n()

  return (
    <section className="hero">
      <h1>{t.brand}</h1>
      <p className="tagline">{t.tagline}</p>
      <p className="subtitle">{t.subtitle}</p>
      <div className="cta-row">
        <button type="button" className="btn btn-primary" onClick={onQuiz}>
          {t.ctaQuiz}
        </button>
        <button type="button" className="btn btn-ghost" onClick={onWheel}>
          {t.ctaWheel}
        </button>
        <button type="button" className="btn btn-text" onClick={onHistory}>
          {t.ctaHistory}
        </button>
      </div>
      <p className="disclaimer">{t.disclaimer}</p>
    </section>
  )
}
