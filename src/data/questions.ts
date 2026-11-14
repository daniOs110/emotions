import type { Locale } from './emotions'

export type QuestionOption = {
  id: string
  label: Record<Locale, string>
  /** Weights toward emotion family ids */
  weights: Record<string, number>
}

export type Question = {
  id: string
  prompt: Record<Locale, string>
  options: QuestionOption[]
}

export const questions: Question[] = [
  {
    id: 'energy',
    prompt: {
      es: '¿Cómo está tu energía ahora?',
      en: 'How is your energy right now?',
    },
    options: [
      {
        id: 'energy-high',
        label: { es: 'Alta, inquieta o intensa', en: 'High, restless, or intense' },
        weights: { anger: 2, fear: 1, surprise: 1, joy: 1 },
      },
      {
        id: 'energy-up',
        label: { es: 'Ligera y agradable', en: 'Light and pleasant' },
        weights: { joy: 3, surprise: 1 },
      },
      {
        id: 'energy-mid',
        label: { es: 'En el medio, irregular', en: 'In the middle, uneven' },
        weights: { fear: 1, surprise: 1, disgust: 1 },
      },
      {
        id: 'energy-low',
        label: { es: 'Baja, pesada o apagada', en: 'Low, heavy, or flat' },
        weights: { sadness: 3, disgust: 1 },
      },
    ],
  },
  {
    id: 'valence',
    prompt: {
      es: 'En general, ¿se siente agradable o desagradable?',
      en: 'Overall, does it feel pleasant or unpleasant?',
    },
    options: [
      {
        id: 'valence-pleasant',
        label: { es: 'Más agradable', en: 'More pleasant' },
        weights: { joy: 3, surprise: 1 },
      },
      {
        id: 'valence-mixed',
        label: { es: 'Mezclado / no sé', en: 'Mixed / not sure' },
        weights: { surprise: 2, fear: 1, sadness: 1 },
      },
      {
        id: 'valence-unpleasant',
        label: { es: 'Más desagradable', en: 'More unpleasant' },
        weights: { sadness: 1, anger: 1, fear: 1, disgust: 1 },
      },
    ],
  },
  {
    id: 'body',
    prompt: {
      es: '¿Dónde lo notas más en el cuerpo?',
      en: 'Where do you notice it most in your body?',
    },
    options: [
      {
        id: 'body-chest',
        label: { es: 'Pecho o corazón', en: 'Chest or heart' },
        weights: { sadness: 2, joy: 1, fear: 1 },
      },
      {
        id: 'body-stomach',
        label: { es: 'Estómago o garganta', en: 'Stomach or throat' },
        weights: { fear: 3, disgust: 1 },
      },
      {
        id: 'body-jaw',
        label: { es: 'Mandíbula, puños o calor', en: 'Jaw, fists, or heat' },
        weights: { anger: 3 },
      },
      {
        id: 'body-skin',
        label: { es: 'Piel de gallina o sobresalto', en: 'Goosebumps or a jolt' },
        weights: { surprise: 3, fear: 1 },
      },
      {
        id: 'body-heavy',
        label: { es: 'Todo el cuerpo pesado', en: 'Whole body feels heavy' },
        weights: { sadness: 3, disgust: 1 },
      },
    ],
  },
  {
    id: 'impulse',
    prompt: {
      es: '¿Qué te dan ganas de hacer?',
      en: 'What do you feel like doing?',
    },
    options: [
      {
        id: 'impulse-approach',
        label: { es: 'Acercarme, compartir, crear', en: 'Move closer, share, create' },
        weights: { joy: 3 },
      },
      {
        id: 'impulse-withdraw',
        label: { es: 'Retirarme, esconderme, parar', en: 'Withdraw, hide, stop' },
        weights: { sadness: 2, fear: 2, disgust: 1 },
      },
      {
        id: 'impulse-push',
        label: { es: 'Empujar, discutir, marcar un límite', en: 'Push back, argue, set a boundary' },
        weights: { anger: 3, disgust: 1 },
      },
      {
        id: 'impulse-freeze',
        label: { es: 'Quedarme quieto/a o vigilar', en: 'Stay still or stay on alert' },
        weights: { fear: 3, surprise: 1 },
      },
      {
        id: 'impulse-look',
        label: { es: 'Mirar de nuevo, entender qué pasó', en: 'Look again, make sense of it' },
        weights: { surprise: 3 },
      },
    ],
  },
  {
    id: 'trigger',
    prompt: {
      es: '¿Qué se parece más a lo que está pasando?',
      en: 'What is closest to what is going on?',
    },
    options: [
      {
        id: 'trigger-good',
        label: { es: 'Algo salió bien o me siento bien', en: 'Something went well or I feel good' },
        weights: { joy: 3 },
      },
      {
        id: 'trigger-loss',
        label: { es: 'Una pérdida, distancia o decepción', en: 'A loss, distance, or disappointment' },
        weights: { sadness: 3 },
      },
      {
        id: 'trigger-threat',
        label: { es: 'Incertidumbre o posible amenaza', en: 'Uncertainty or a possible threat' },
        weights: { fear: 3 },
      },
      {
        id: 'trigger-unfair',
        label: { es: 'Una injusticia o un límite cruzado', en: 'An injustice or a crossed boundary' },
        weights: { anger: 3 },
      },
      {
        id: 'trigger-reject',
        label: { es: 'Algo que rechazo o me incomoda mucho', en: 'Something I reject or that really puts me off' },
        weights: { disgust: 3 },
      },
      {
        id: 'trigger-sudden',
        label: { es: 'Algo inesperado o brusco', en: 'Something unexpected or abrupt' },
        weights: { surprise: 3 },
      },
    ],
  },
  {
    id: 'need',
    prompt: {
      es: 'Si pudieras pedirle algo a este sentimiento, ¿qué pediría?',
      en: 'If this feeling could ask for something, what would it ask for?',
    },
    options: [
      {
        id: 'need-celebrate',
        label: { es: 'Celebrar o disfrutar', en: 'To celebrate or savor' },
        weights: { joy: 3 },
      },
      {
        id: 'need-comfort',
        label: { es: 'Consuelo y lentitud', en: 'Comfort and slowness' },
        weights: { sadness: 3 },
      },
      {
        id: 'need-safety',
        label: { es: 'Seguridad y claridad', en: 'Safety and clarity' },
        weights: { fear: 3 },
      },
      {
        id: 'need-respect',
        label: { es: 'Respeto o un cambio', en: 'Respect or a change' },
        weights: { anger: 2, disgust: 2 },
      },
      {
        id: 'need-space',
        label: { es: 'Distancia de lo tóxico', en: 'Distance from what feels toxic' },
        weights: { disgust: 3 },
      },
      {
        id: 'need-orient',
        label: { es: 'Tiempo para orientarme', en: 'Time to get oriented' },
        weights: { surprise: 3 },
      },
    ],
  },
]

/** Optional tie-breaker when top families are close */
export const tieBreakerQuestion: Question = {
  id: 'tie',
  prompt: {
    es: 'Entre estas, ¿cuál se siente más cercana?',
    en: 'Between these, which feels closest?',
  },
  options: [], // filled dynamically
}
