import type { Locale } from '../data/emotions'

export type CheckIn = {
  id: string
  emotionId: string
  familyId: string
  source: 'quiz' | 'wheel'
  createdAt: string
  locale: Locale
}

const KEY = 'siento.checkins'
const LANG_KEY = 'siento.locale'

export function loadCheckIns(): CheckIn[] {
  try {
    const raw = localStorage.getItem(KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw) as CheckIn[]
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

export function saveCheckIn(checkIn: Omit<CheckIn, 'id' | 'createdAt'>): CheckIn {
  const entry: CheckIn = {
    ...checkIn,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
  }
  const all = [entry, ...loadCheckIns()].slice(0, 40)
  localStorage.setItem(KEY, JSON.stringify(all))
  return entry
}

export function clearCheckIns() {
  localStorage.removeItem(KEY)
}

export function loadLocale(): Locale {
  const stored = localStorage.getItem(LANG_KEY)
  if (stored === 'es' || stored === 'en') return stored
  const nav = navigator.language?.toLowerCase() ?? 'es'
  return nav.startsWith('es') ? 'es' : 'en'
}

export function saveLocale(locale: Locale) {
  localStorage.setItem(LANG_KEY, locale)
}
