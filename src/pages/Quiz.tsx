import { useMemo, useState } from 'react'
import { ProgressBar } from '../components/ProgressBar'
import { emotionFamilies } from '../data/emotions'
import { questions } from '../data/questions'
import { useI18n } from '../i18n/I18nContext'
import {
  buildTieOptions,
  scoreAnswers,
  type AnswerMap,
} from '../lib/scoreEmotion'
import type { Emotion } from '../data/emotions'

type Props = {
  onBack: () => void
  onComplete: (emotion: Emotion, familyId: string) => void
}

export function Quiz({ onBack, onComplete }: Props) {
  const { t, localize } = useI18n()
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<AnswerMap>({})
  const [tieMode, setTieMode] = useState(false)
  const [tieFamilyIds, setTieFamilyIds] = useState<string[]>([])

  const totalSteps = questions.length
  const currentQuestion = questions[step]
  const familyAccent = useMemo(() => {
    const preview = scoreAnswers(answers)
    const fam = emotionFamilies.find((f) => f.id === preview.familyId)
    return fam?.color ?? '#1f7a6c'
  }, [answers])

  const tieOptions = useMemo(
    () => (tieMode ? buildTieOptions(tieFamilyIds) : []),
    [tieMode, tieFamilyIds],
  )

  const selectOption = (optionId: string) => {
    if (tieMode) {
      const nextAnswers = { ...answers, tie: optionId }
      setAnswers(nextAnswers)
      const result = scoreAnswers(nextAnswers)
      onComplete(result.emotion, result.familyId)
      return
    }

    const question = questions[step]
    const nextAnswers = { ...answers, [question.id]: optionId }
    setAnswers(nextAnswers)

    if (step < totalSteps - 1) {
      setStep((s) => s + 1)
      return
    }

    const result = scoreAnswers(nextAnswers)
    if (result.needsTieBreak) {
      setTieFamilyIds(result.topFamilyIds)
      setTieMode(true)
      return
    }
    onComplete(result.emotion, result.familyId)
  }

  const goBack = () => {
    if (tieMode) {
      setTieMode(false)
      return
    }
    if (step === 0) {
      onBack()
      return
    }
    setStep((s) => s - 1)
  }

  return (
    <section className="quiz-stage" style={{ ['--family-color' as string]: familyAccent }}>
      <div className="nav-row">
        <button type="button" className="btn btn-text" onClick={goBack}>
          {t.back}
        </button>
      </div>

      {!tieMode && <ProgressBar current={step + 1} total={totalSteps} />}

      <h1 className="question-prompt">
        {tieMode ? t.tieHint : localize(currentQuestion.prompt)}
      </h1>

      <div className="options">
        {(tieMode ? tieOptions : currentQuestion.options).map((option) => (
          <button
            key={option.id}
            type="button"
            className="option"
            onClick={() => selectOption(option.id)}
          >
            {localize(option.label)}
          </button>
        ))}
      </div>
    </section>
  )
}
