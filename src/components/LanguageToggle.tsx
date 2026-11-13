import { useI18n } from '../i18n/I18nContext'

export function LanguageToggle() {
  const { locale, setLocale, t } = useI18n()

  return (
    <div className="lang-toggle" role="group" aria-label="Language">
      <button
        type="button"
        aria-pressed={locale === 'es'}
        onClick={() => setLocale('es')}
      >
        {t.langEs}
      </button>
      <button
        type="button"
        aria-pressed={locale === 'en'}
        onClick={() => setLocale('en')}
      >
        {t.langEn}
      </button>
    </div>
  )
}
