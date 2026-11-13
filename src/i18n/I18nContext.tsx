import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import type { Locale } from '../data/emotions'
import { loadLocale, saveLocale } from '../lib/storage'
import { en } from './en'
import { es, type Dictionary } from './es'

type I18nContextValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: Dictionary
  format: (template: string, vars: Record<string, string | number>) => string
  localize: (value: Record<Locale, string>) => string
}

const I18nContext = createContext<I18nContextValue | null>(null)

const dictionaries: Record<Locale, Dictionary> = { es, en }

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => loadLocale())

  useEffect(() => {
    document.documentElement.lang = locale
    saveLocale(locale)
  }, [locale])

  const value = useMemo<I18nContextValue>(() => {
    const setLocale = (next: Locale) => setLocaleState(next)
    const format = (template: string, vars: Record<string, string | number>) =>
      Object.entries(vars).reduce(
        (acc, [key, val]) => acc.replaceAll(`{{${key}}}`, String(val)),
        template,
      )
    const localize = (record: Record<Locale, string>) => record[locale]
    return {
      locale,
      setLocale,
      t: dictionaries[locale],
      format,
      localize,
    }
  }, [locale])

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n must be used within I18nProvider')
  return ctx
}
