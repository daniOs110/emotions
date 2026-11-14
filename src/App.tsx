import { useMemo, useState } from 'react'
import { LanguageToggle } from './components/LanguageToggle'
import type { Emotion } from './data/emotions'
import { emotionFamilies } from './data/emotions'
import { useI18n } from './i18n/I18nContext'
import { History } from './pages/History'
import { Home } from './pages/Home'
import { Quiz } from './pages/Quiz'
import { Result } from './pages/Result'
import { WheelExplore } from './pages/WheelExplore'

type View = 'home' | 'quiz' | 'wheel' | 'result' | 'history'

type ResultState = {
  emotion: Emotion
  familyId: string
  source: 'quiz' | 'wheel'
}

export default function App() {
  const { t } = useI18n()
  const [view, setView] = useState<View>('home')
  const [result, setResult] = useState<ResultState | null>(null)

  const accent = useMemo(() => {
    if (!result) return '#1f7a6c'
    const family = emotionFamilies.find((f) => f.id === result.familyId)
    return result.emotion.color || family?.color || '#1f7a6c'
  }, [result])

  const goHome = () => {
    setResult(null)
    setView('home')
  }

  const complete = (emotion: Emotion, familyId: string, source: 'quiz' | 'wheel') => {
    setResult({ emotion, familyId, source })
    setView('result')
  }

  return (
    <>
      <div className="atmosphere" style={{ ['--family-color' as string]: accent }} />
      <div className="app-shell" style={{ ['--family-color' as string]: accent }}>
        <header className="topbar">
          <button type="button" className="brand-mark" onClick={goHome}>
            {t.brand}
          </button>
          <LanguageToggle />
        </header>

        {view === 'home' && (
          <Home
            onQuiz={() => setView('quiz')}
            onWheel={() => setView('wheel')}
            onHistory={() => setView('history')}
          />
        )}

        {view === 'quiz' && (
          <Quiz
            onBack={goHome}
            onComplete={(emotion, familyId) => complete(emotion, familyId, 'quiz')}
          />
        )}

        {view === 'wheel' && (
          <WheelExplore
            onBack={goHome}
            onComplete={(emotion, familyId) => complete(emotion, familyId, 'wheel')}
          />
        )}

        {view === 'result' && result && (
          <Result
            emotion={result.emotion}
            familyId={result.familyId}
            source={result.source}
            onHome={goHome}
            onHistory={() => setView('history')}
          />
        )}

        {view === 'history' && <History onBack={goHome} />}
      </div>
    </>
  )
}
