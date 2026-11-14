import { useI18n } from '../i18n/I18nContext'

type Props = {
  current: number
  total: number
}

export function ProgressBar({ current, total }: Props) {
  const { t, format } = useI18n()
  const pct = Math.round((current / total) * 100)

  return (
    <div className="progress" aria-label={format(t.progress, { current, total })}>
      <div className="progress-label">{format(t.progress, { current, total })}</div>
      <div className="progress-track">
        <div className="progress-fill" style={{ width: `${pct}%` }} />
      </div>
    </div>
  )
}
