import { emotionFamilies, getEmotionById, type Emotion } from '../data/emotions'
import { questions, type QuestionOption } from '../data/questions'

export type AnswerMap = Record<string, string>

export type ScoreResult = {
  familyId: string
  emotion: Emotion
  scores: Record<string, number>
  runnerUpFamilyId?: string
  needsTieBreak: boolean
  topFamilyIds: string[]
}

/** Map specific quiz options to preferred secondary/tertiary emotion ids within a family */
const secondaryHints: Record<string, Partial<Record<string, string>>> = {
  joy: {
    'energy-up': 'joy-content',
    'impulse-approach': 'joy-excited',
    'need-celebrate': 'joy-proud',
    'trigger-good': 'joy-proud',
    'body-chest': 'joy-content',
  },
  sadness: {
    'energy-low': 'sad-lonely',
    'impulse-withdraw': 'sad-lonely',
    'trigger-loss': 'sad-grief',
    'need-comfort': 'sad-hurt',
    'body-heavy': 'sad-grief',
    'body-chest': 'sad-hurt',
  },
  fear: {
    'body-stomach': 'fear-anxious',
    'impulse-freeze': 'fear-scared',
    'trigger-threat': 'fear-anxious',
    'need-safety': 'fear-insecure',
    'energy-high': 'fear-anxious',
  },
  anger: {
    'body-jaw': 'anger-mad',
    'impulse-push': 'anger-frustrated',
    'trigger-unfair': 'anger-resentful',
    'need-respect': 'anger-frustrated',
    'energy-high': 'anger-mad',
  },
  disgust: {
    'trigger-reject': 'disgust-aversion',
    'need-space': 'disgust-aversion',
    'impulse-withdraw': 'disgust-disapproval',
    'body-stomach': 'disgust-embarrassed',
  },
  surprise: {
    'body-skin': 'surprise-startled',
    'impulse-look': 'surprise-confused',
    'trigger-sudden': 'surprise-startled',
    'need-orient': 'surprise-confused',
    'valence-mixed': 'surprise-confused',
    'energy-high': 'surprise-amazed',
  },
}

function pickSecondary(familyId: string, answers: AnswerMap): Emotion {
  const family = emotionFamilies.find((f) => f.id === familyId)
  if (!family) return emotionFamilies[0]

  const hints = secondaryHints[familyId] ?? {}
  const votes = new Map<string, number>()

  for (const optionId of Object.values(answers)) {
    const hinted = hints[optionId]
    if (hinted) votes.set(hinted, (votes.get(hinted) ?? 0) + 1)
  }

  let secondaryId: string | undefined
  let best = 0
  for (const [id, count] of votes) {
    if (count > best) {
      best = count
      secondaryId = id
    }
  }

  const secondary =
    family.children.find((c) => c.id === secondaryId) ?? family.children[0]

  if (!secondary) return family

  // Prefer a tertiary when body/impulse answers are strong
  const wantsSpecific =
    Boolean(answers.body) || Boolean(answers.impulse) || Boolean(answers.need)
  if (wantsSpecific && secondary.children?.length) {
    const tertiaryIndex =
      (answers.body?.length ?? 0) % secondary.children.length
    return secondary.children[tertiaryIndex] ?? secondary
  }

  return secondary
}

export function scoreAnswers(answers: AnswerMap): ScoreResult {
  const scores: Record<string, number> = {
    joy: 0,
    sadness: 0,
    fear: 0,
    anger: 0,
    disgust: 0,
    surprise: 0,
  }

  for (const question of questions) {
    const optionId = answers[question.id]
    if (!optionId) continue
    const option = question.options.find((o) => o.id === optionId)
    if (!option) continue
    for (const [family, weight] of Object.entries(option.weights)) {
      scores[family] = (scores[family] ?? 0) + weight
    }
  }

  if (answers.tie) {
    scores[answers.tie] = (scores[answers.tie] ?? 0) + 4
  }

  const ranked = Object.entries(scores).sort((a, b) => b[1] - a[1])
  const topScore = ranked[0]?.[1] ?? 0
  const topFamilyIds = ranked.filter(([, s]) => s === topScore).map(([id]) => id)
  const needsTieBreak = topFamilyIds.length > 1 && !answers.tie

  const familyId = topFamilyIds[0] ?? 'sadness'
  const emotion = pickSecondary(familyId, answers)

  return {
    familyId,
    emotion,
    scores,
    runnerUpFamilyId: ranked[1]?.[0],
    needsTieBreak,
    topFamilyIds,
  }
}

export function buildTieOptions(familyIds: string[]): QuestionOption[] {
  return familyIds.map((id) => {
    const family = getEmotionById(id)
    return {
      id,
      label: family?.name ?? { es: id, en: id },
      weights: { [id]: 4 },
    }
  })
}

export function resolveEmotionFromWheel(emotionId: string): Emotion | undefined {
  return getEmotionById(emotionId)
}
