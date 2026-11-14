import { useI18n } from '../i18n/I18nContext'
import type { Localized } from '../data/emotions'

type Props = {
  tips: Localized[]
}

export function TipList({ tips }: Props) {
  const { t, localize } = useI18n()

  return (
    <section className="panel">
      <h2 className="tips-title">{t.tipsTitle}</h2>
      <ul className="tips">
        {tips.map((tip) => (
          <li key={localize(tip)}>{localize(tip)}</li>
        ))}
      </ul>
    </section>
  )
}
