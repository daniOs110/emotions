export type Locale = 'es' | 'en'

export type Localized = Record<Locale, string>

export type Emotion = {
  id: string
  name: Localized
  description: Localized
  tips: Localized[]
  color: string
  children?: Emotion[]
}

export type EmotionFamily = Emotion & {
  children: Emotion[]
}

export const emotionFamilies: EmotionFamily[] = [
  {
    id: 'joy',
    name: { es: 'Alegría', en: 'Joy' },
    description: {
      es: 'Una sensación cálida de bienestar, apertura y energía agradable.',
      en: 'A warm sense of wellbeing, openness, and pleasant energy.',
    },
    tips: [
      {
        es: 'Anota tres cosas concretas que te hicieron bien hoy.',
        en: 'Note three concrete things that went well today.',
      },
      {
        es: 'Comparte un momento bueno con alguien de confianza.',
        en: 'Share a good moment with someone you trust.',
      },
      {
        es: 'Disfruta la sensación sin apurarla: respira y quédate un minuto.',
        en: 'Savor the feeling without rushing: breathe and stay with it for a minute.',
      },
    ],
    color: '#E8A54B',
    children: [
      {
        id: 'joy-content',
        name: { es: 'Contento/a', en: 'Content' },
        description: {
          es: 'Una calma agradable, como estar en paz con el momento.',
          en: 'A pleasant calm, like being at peace with the moment.',
        },
        tips: [
          {
            es: 'Protege un rato sin pantallas para sostener esa calma.',
            en: 'Protect a screen-free stretch to hold onto that calm.',
          },
          {
            es: 'Haz algo sencillo que te guste (música, té, caminata corta).',
            en: 'Do something simple you enjoy (music, tea, a short walk).',
          },
        ],
        color: '#F0C06A',
        children: [
          {
            id: 'joy-peaceful',
            name: { es: 'En paz', en: 'Peaceful' },
            description: {
              es: 'Tranquilidad suave, sin urgencia.',
              en: 'Gentle quiet, without urgency.',
            },
            tips: [
              {
                es: 'Cierra los ojos un minuto y nombra lo que escuchas.',
                en: 'Close your eyes for a minute and name what you hear.',
              },
            ],
            color: '#F5D48A',
          },
          {
            id: 'joy-satisfied',
            name: { es: 'Satisfecho/a', en: 'Satisfied' },
            description: {
              es: 'Sensación de “esto está bien como está”.',
              en: 'A sense that “this is okay as it is.”',
            },
            tips: [
              {
                es: 'Reconoce el esfuerzo que te trajo hasta aquí.',
                en: 'Acknowledge the effort that got you here.',
              },
            ],
            color: '#EBB85C',
          },
        ],
      },
      {
        id: 'joy-excited',
        name: { es: 'Emocionado/a', en: 'Excited' },
        description: {
          es: 'Energía alta y ganas de moverte hacia algo.',
          en: 'High energy and eagerness to move toward something.',
        },
        tips: [
          {
            es: 'Canaliza la energía en un paso pequeño hacia lo que te entusiasma.',
            en: 'Channel the energy into one small step toward what excites you.',
          },
          {
            es: 'Si te sientes acelerado/a, exhala más lento que inhalas.',
            en: 'If you feel rushed, exhale longer than you inhale.',
          },
        ],
        color: '#F09A3A',
        children: [
          {
            id: 'joy-eager',
            name: { es: 'Ansioso/a (con ganas)', en: 'Eager' },
            description: {
              es: 'Impulso positivo por algo que viene.',
              en: 'A positive pull toward something ahead.',
            },
            tips: [
              {
                es: 'Escribe qué es exactamente lo que esperas.',
                en: 'Write down exactly what you are looking forward to.',
              },
            ],
            color: '#F4AE55',
          },
          {
            id: 'joy-playful',
            name: { es: 'Juguetón/a', en: 'Playful' },
            description: {
              es: 'Ganas de bromear, crear o probar sin presión.',
              en: 'Wanting to joke, create, or try without pressure.',
            },
            tips: [
              {
                es: 'Permítete 10 minutos de algo sin “productividad”.',
                en: 'Allow yourself 10 minutes of something without “productivity.”',
              },
            ],
            color: '#E8892E',
          },
        ],
      },
      {
        id: 'joy-proud',
        name: { es: 'Orgulloso/a', en: 'Proud' },
        description: {
          es: 'Valoración positiva de algo que hiciste o de quién eres.',
          en: 'Positive regard for something you did or who you are.',
        },
        tips: [
          {
            es: 'Di en voz alta (o por escrito) qué lograste y por qué importa.',
            en: 'Say out loud (or write) what you achieved and why it matters.',
          },
        ],
        color: '#D9923F',
        children: [
          {
            id: 'joy-confident',
            name: { es: 'Seguro/a', en: 'Confident' },
            description: {
              es: 'Confianza en tus capacidades en este momento.',
              en: 'Trust in your abilities in this moment.',
            },
            tips: [
              {
                es: 'Usa esa seguridad para un paso que venías postergando.',
                en: 'Use that confidence for one step you have been putting off.',
              },
            ],
            color: '#C97E2F',
          },
        ],
      },
    ],
  },
  {
    id: 'sadness',
    name: { es: 'Tristeza', en: 'Sadness' },
    description: {
      es: 'Una bajada de energía y peso emocional; a menudo pide cuidado y lentitud.',
      en: 'A drop in energy and emotional weight; it often asks for care and slowness.',
    },
    tips: [
      {
        es: 'Date permiso de sentir sin “arreglarlo” de inmediato.',
        en: 'Give yourself permission to feel without fixing it right away.',
      },
      {
        es: 'Contacta a alguien de confianza o escribe lo que pesa.',
        en: 'Reach out to someone you trust or write down what feels heavy.',
      },
      {
        es: 'Haz algo suave: agua, manta, luz tenue, una caminata corta.',
        en: 'Do something gentle: water, a blanket, soft light, a short walk.',
      },
    ],
    color: '#5B8FB9',
    children: [
      {
        id: 'sad-lonely',
        name: { es: 'Solo/a', en: 'Lonely' },
        description: {
          es: 'Sensación de distancia o falta de conexión.',
          en: 'A sense of distance or lack of connection.',
        },
        tips: [
          {
            es: 'Envía un mensaje breve a alguien; no hace falta explicar todo.',
            en: 'Send a short message to someone; you do not need to explain everything.',
          },
          {
            es: 'Si no quieres hablar, busca presencia: café, podcast, mascota.',
            en: 'If you do not want to talk, seek presence: coffee, a podcast, a pet.',
          },
        ],
        color: '#6FA0C4',
        children: [
          {
            id: 'sad-isolated',
            name: { es: 'Aislado/a', en: 'Isolated' },
            description: {
              es: 'Como si estuvieras aparte del resto.',
              en: 'As if you are set apart from others.',
            },
            tips: [
              {
                es: 'Sal un momento al exterior, aunque sea al balcón o la puerta.',
                en: 'Step outside for a moment, even just to a balcony or doorway.',
              },
            ],
            color: '#7BAFD0',
          },
          {
            id: 'sad-abandoned',
            name: { es: 'Abandonado/a', en: 'Abandoned' },
            description: {
              es: 'Dolor por sentir que alguien o algo no está ahí.',
              en: 'Pain from feeling that someone or something is not there.',
            },
            tips: [
              {
                es: 'Nombra la necesidad detrás (“quiero cercanía”) sin juzgarte.',
                en: 'Name the need underneath (“I want closeness”) without judging yourself.',
              },
            ],
            color: '#4A7A9E',
          },
        ],
      },
      {
        id: 'sad-hurt',
        name: { es: 'Herido/a', en: 'Hurt' },
        description: {
          es: 'Dolor emocional tras algo que te afectó.',
          en: 'Emotional pain after something that affected you.',
        },
        tips: [
          {
            es: 'Pon una mano en el pecho y di: “esto duele, y está bien notarlo”.',
            en: 'Place a hand on your chest and say: “this hurts, and it is okay to notice.”',
          },
        ],
        color: '#4E7FA8',
        children: [
          {
            id: 'sad-disappointed',
            name: { es: 'Decepcionado/a', en: 'Disappointed' },
            description: {
              es: 'Expectativa que no se cumplió.',
              en: 'An expectation that was not met.',
            },
            tips: [
              {
                es: 'Separa lo que controlas de lo que no; elige un siguiente paso pequeño.',
                en: 'Separate what you can control from what you cannot; pick one small next step.',
              },
            ],
            color: '#3F6E96',
          },
        ],
      },
      {
        id: 'sad-grief',
        name: { es: 'Duelo', en: 'Grief' },
        description: {
          es: 'Tristeza profunda por una pérdida o cambio grande.',
          en: 'Deep sadness from a loss or major change.',
        },
        tips: [
          {
            es: 'Honra lo perdido con un ritual mínimo (foto, carta, silencio).',
            en: 'Honor what was lost with a small ritual (photo, letter, silence).',
          },
          {
            es: 'Si el peso es grande, considera apoyo profesional.',
            en: 'If the weight is heavy, consider professional support.',
          },
        ],
        color: '#3A668C',
        children: [
          {
            id: 'sad-empty',
            name: { es: 'Vacío/a', en: 'Empty' },
            description: {
              es: 'Sensación de hueco o falta de sentido.',
              en: 'A hollow feeling or lack of meaning.',
            },
            tips: [
              {
                es: 'Haz una acción mínima con cuerpo: estirarte, beber agua, abrir una ventana.',
                en: 'Do one minimal body action: stretch, drink water, open a window.',
              },
            ],
            color: '#2F5578',
          },
        ],
      },
    ],
  },
  {
    id: 'fear',
    name: { es: 'Miedo', en: 'Fear' },
    description: {
      es: 'Alerta ante una amenaza real o imaginada; el cuerpo se prepara para protegerte.',
      en: 'Alertness to a real or imagined threat; the body prepares to protect you.',
    },
    tips: [
      {
        es: 'Nombra el miedo en una frase concreta: “me preocupa que…”.',
        en: 'Name the fear in one concrete sentence: “I am worried that…”.',
      },
      {
        es: 'Ancla al presente: 5 cosas que ves, 4 que tocas, 3 que oyes.',
        en: 'Anchor in the present: 5 things you see, 4 you touch, 3 you hear.',
      },
      {
        es: 'Reduce la amenaza a un paso manejable.',
        en: 'Shrink the threat into one manageable step.',
      },
    ],
    color: '#7A6B8A',
    children: [
      {
        id: 'fear-anxious',
        name: { es: 'Ansioso/a', en: 'Anxious' },
        description: {
          es: 'Inquietud anticipatoria; la mente salta al “qué pasa si”.',
          en: 'Anticipatory unease; the mind jumps to “what if.”',
        },
        tips: [
          {
            es: 'Escribe las preocupaciones y marca cuáles son accionables hoy.',
            en: 'Write the worries and mark which ones are actionable today.',
          },
          {
            es: 'Exhala contando hasta 6, tres veces.',
            en: 'Exhale counting to 6, three times.',
          },
        ],
        color: '#8B7B9C',
        children: [
          {
            id: 'fear-worried',
            name: { es: 'Preocupado/a', en: 'Worried' },
            description: {
              es: 'Pensamientos repetitivos sobre algo incierto.',
              en: 'Repetitive thoughts about something uncertain.',
            },
            tips: [
              {
                es: 'Define una “hora de preocupación” de 10 minutos y luego cierra el tema.',
                en: 'Set a 10-minute “worry window,” then close the topic.',
              },
            ],
            color: '#9A8AAB',
          },
          {
            id: 'fear-nervous',
            name: { es: 'Nervioso/a', en: 'Nervous' },
            description: {
              es: 'Tensión corporal ante algo próximo.',
              en: 'Bodily tension ahead of something soon.',
            },
            tips: [
              {
                es: 'Suelta hombros y mandíbula; camina un poco si puedes.',
                en: 'Drop your shoulders and jaw; walk a bit if you can.',
              },
            ],
            color: '#6D5E7D',
          },
        ],
      },
      {
        id: 'fear-scared',
        name: { es: 'Asustado/a', en: 'Scared' },
        description: {
          es: 'Miedo más inmediato o intenso.',
          en: 'More immediate or intense fear.',
        },
        tips: [
          {
            es: 'Si estás a salvo, dilo en voz alta: “ahora estoy seguro/a”.',
            en: 'If you are safe, say it out loud: “I am safe right now.”',
          },
        ],
        color: '#655874',
        children: [
          {
            id: 'fear-helpless',
            name: { es: 'Impotente', en: 'Helpless' },
            description: {
              es: 'Sensación de no poder influir en lo que pasa.',
              en: 'A sense of not being able to influence what is happening.',
            },
            tips: [
              {
                es: 'Elige una micro-acción: beber agua, pedir ayuda, cambiar de habitación.',
                en: 'Choose a micro-action: drink water, ask for help, change rooms.',
              },
            ],
            color: '#544966',
          },
        ],
      },
      {
        id: 'fear-insecure',
        name: { es: 'Inseguro/a', en: 'Insecure' },
        description: {
          es: 'Duda sobre ti, tu lugar o tu valor.',
          en: 'Doubt about yourself, your place, or your worth.',
        },
        tips: [
          {
            es: 'Recuerda una evidencia reciente de que puedes con algo.',
            en: 'Recall recent evidence that you can handle something.',
          },
        ],
        color: '#73657F',
        children: [
          {
            id: 'fear-inadequate',
            name: { es: 'Inadecuado/a', en: 'Inadequate' },
            description: {
              es: 'Sensación de “no soy suficiente”.',
              en: 'A feeling of “I am not enough.”',
            },
            tips: [
              {
                es: 'Cambia “no puedo” por “aún estoy aprendiendo esto”.',
                en: 'Swap “I can’t” for “I am still learning this.”',
              },
            ],
            color: '#5E516A',
          },
        ],
      },
    ],
  },
  {
    id: 'anger',
    name: { es: 'Enojo', en: 'Anger' },
    description: {
      es: 'Energía que señala un límite cruzado, una injusticia o una necesidad bloqueada.',
      en: 'Energy that signals a crossed boundary, an injustice, or a blocked need.',
    },
    tips: [
      {
        es: 'Antes de responder, baja la intensidad: camina, exhala, cuenta hasta 10.',
        en: 'Before responding, lower the intensity: walk, exhale, count to 10.',
      },
      {
        es: 'Pregúntate: ¿qué límite o necesidad está detrás?',
        en: 'Ask yourself: what boundary or need is underneath?',
      },
      {
        es: 'Expresa con “me siento… porque… necesito…”.',
        en: 'Express with “I feel… because… I need…”.',
      },
    ],
    color: '#C45C48',
    children: [
      {
        id: 'anger-frustrated',
        name: { es: 'Frustrado/a', en: 'Frustrated' },
        description: {
          es: 'Bloqueo al intentar avanzar o lograr algo.',
          en: 'Blocked while trying to move forward or achieve something.',
        },
        tips: [
          {
            es: 'Divide el problema en un solo siguiente paso concreto.',
            en: 'Break the problem into one concrete next step.',
          },
          {
            es: 'Cambia de tarea 10 minutos y vuelve con frescor.',
            en: 'Switch tasks for 10 minutes, then return fresh.',
          },
        ],
        color: '#D06B55',
        children: [
          {
            id: 'anger-irritated',
            name: { es: 'Irritado/a', en: 'Irritated' },
            description: {
              es: 'Molestia baja pero constante.',
              en: 'Low but constant annoyance.',
            },
            tips: [
              {
                es: 'Identifica el estímulo (ruido, hambre, interrupciones) y ajústalo si puedes.',
                en: 'Identify the trigger (noise, hunger, interruptions) and adjust it if you can.',
              },
            ],
            color: '#DA7A64',
          },
          {
            id: 'anger-stuck',
            name: { es: 'Atascado/a', en: 'Stuck' },
            description: {
              es: 'Sensación de no poder mover la situación.',
              en: 'A sense of not being able to move the situation.',
            },
            tips: [
              {
                es: 'Pregunta: ¿qué pediría si pudiera pedir ayuda sin vergüenza?',
                en: 'Ask: what would I request if I could ask for help without shame?',
              },
            ],
            color: '#B84E3C',
          },
        ],
      },
      {
        id: 'anger-mad',
        name: { es: 'Enfadado/a', en: 'Mad' },
        description: {
          es: 'Enojo claro y activado.',
          en: 'Clear, activated anger.',
        },
        tips: [
          {
            es: 'Descarga física segura: apretar una pelota, ejercicio corto, gritar a una almohada.',
            en: 'Safe physical release: squeeze a ball, short exercise, yell into a pillow.',
          },
        ],
        color: '#B34736',
        children: [
          {
            id: 'anger-betrayed',
            name: { es: 'Traicionado/a', en: 'Betrayed' },
            description: {
              es: 'Dolor + enojo por una confianza rota.',
              en: 'Hurt + anger from broken trust.',
            },
            tips: [
              {
                es: 'No tomes decisiones grandes en caliente; escribe lo ocurrido primero.',
                en: 'Do not make big decisions while hot; write what happened first.',
              },
            ],
            color: '#9E3C2E',
          },
        ],
      },
      {
        id: 'anger-resentful',
        name: { es: 'Resentido/a', en: 'Resentful' },
        description: {
          es: 'Enojo acumulado por algo que se repite o no se resolvió.',
          en: 'Built-up anger from something repeated or unresolved.',
        },
        tips: [
          {
            es: 'Nombra la cuenta pendiente en una frase y decide si quieres conversarla.',
            en: 'Name the unfinished score in one sentence and decide if you want to talk it through.',
          },
        ],
        color: '#A85242',
        children: [
          {
            id: 'anger-bitter',
            name: { es: 'Amargado/a', en: 'Bitter' },
            description: {
              es: 'Sabor ácido de injusticia sostenida.',
              en: 'A sour taste of sustained unfairness.',
            },
            tips: [
              {
                es: 'Cuida tu cuerpo hoy; el resentimiento se asienta más con agotamiento.',
                en: 'Care for your body today; resentment settles more with exhaustion.',
              },
            ],
            color: '#8F4335',
          },
        ],
      },
    ],
  },
  {
    id: 'disgust',
    name: { es: 'Asco', en: 'Disgust' },
    description: {
      es: 'Rechazo fuerte hacia algo que sientes tóxico, injusto o fuera de tus valores.',
      en: 'Strong rejection of something that feels toxic, unfair, or against your values.',
    },
    tips: [
      {
        es: 'Aleja un poco la fuente del rechazo (espacio, pausa, mute).',
        en: 'Create a little distance from the source (space, pause, mute).',
      },
      {
        es: 'Clarifica tu valor: “esto no encaja conmigo porque…”.',
        en: 'Clarify your value: “this does not fit me because…”.',
      },
      {
        es: 'Limpia algo concreto (manos, escritorio, bandeja) para resetear el cuerpo.',
        en: 'Clean something concrete (hands, desk, inbox) to reset the body.',
      },
    ],
    color: '#6E8B57',
    children: [
      {
        id: 'disgust-aversion',
        name: { es: 'Aversión', en: 'Aversion' },
        description: {
          es: 'Querer alejarte de algo o alguien.',
          en: 'Wanting to move away from something or someone.',
        },
        tips: [
          {
            es: 'Respeta la señal: no tienes que forzar cercanía ahora.',
            en: 'Respect the signal: you do not have to force closeness right now.',
          },
        ],
        color: '#7E9B66',
        children: [
          {
            id: 'disgust-repelled',
            name: { es: 'Repelido/a', en: 'Repelled' },
            description: {
              es: 'Impulso intenso de rechazo.',
              en: 'An intense impulse to reject.',
            },
            tips: [
              {
                es: 'Cambia de ambiente un minuto; luego decide con más calma.',
                en: 'Change environments for a minute; then decide with more calm.',
              },
            ],
            color: '#8DAB74',
          },
        ],
      },
      {
        id: 'disgust-disapproval',
        name: { es: 'Desaprobación', en: 'Disapproval' },
        description: {
          es: 'Juicio de que algo está mal o no es correcto.',
          en: 'A judgment that something is wrong or not right.',
        },
        tips: [
          {
            es: 'Separa el hecho del juicio; decide si actuar o soltar.',
            en: 'Separate the fact from the judgment; decide whether to act or let go.',
          },
        ],
        color: '#5F7A4A',
        children: [
          {
            id: 'disgust-judgmental',
            name: { es: 'Crítico/a', en: 'Judgmental' },
            description: {
              es: 'Evaluación dura hacia ti u otros.',
              en: 'Harsh evaluation toward yourself or others.',
            },
            tips: [
              {
                es: 'Prueba una frase más precisa y menos absoluta.',
                en: 'Try a more precise, less absolute sentence.',
              },
            ],
            color: '#516B3F',
          },
        ],
      },
      {
        id: 'disgust-embarrassed',
        name: { es: 'Avergonzado/a', en: 'Embarrassed' },
        description: {
          es: 'Incomodidad por cómo te viste o te percibieron.',
          en: 'Discomfort about how you looked or were perceived.',
        },
        tips: [
          {
            es: 'Recuerda: un momento incómodo no define todo tu valor.',
            en: 'Remember: one awkward moment does not define your whole worth.',
          },
        ],
        color: '#6A8252',
        children: [
          {
            id: 'disgust-ashamed',
            name: { es: 'Apenado/a', en: 'Ashamed' },
            description: {
              es: 'Peso de sentir que “hay algo mal en mí”.',
              en: 'The weight of feeling “there is something wrong with me.”',
            },
            tips: [
              {
                es: 'Habla con alguien seguro o escribe sin editar; la vergüenza se reduce con conexión.',
                en: 'Talk to someone safe or write without editing; shame shrinks with connection.',
              },
            ],
            color: '#475C36',
          },
        ],
      },
    ],
  },
  {
    id: 'surprise',
    name: { es: 'Sorpresa', en: 'Surprise' },
    description: {
      es: 'Una interrupción de lo esperado; el sistema se reinicia para entender qué pasó.',
      en: 'An interruption of what was expected; the system resets to make sense of what happened.',
    },
    tips: [
      {
        es: 'Pausa un segundo antes de reaccionar; deja que la información aterrice.',
        en: 'Pause a second before reacting; let the information land.',
      },
      {
        es: 'Nombra qué cambió: “esperaba X, pasó Y”.',
        en: 'Name what changed: “I expected X, Y happened.”',
      },
      {
        es: 'Si la sorpresa es buena, celébrala; si no, busca un ancla estable.',
        en: 'If the surprise is good, celebrate it; if not, find a stable anchor.',
      },
    ],
    color: '#2F9E9E',
    children: [
      {
        id: 'surprise-amazed',
        name: { es: 'Asombrado/a', en: 'Amazed' },
        description: {
          es: 'Maravilla ante algo inesperado.',
          en: 'Wonder at something unexpected.',
        },
        tips: [
          {
            es: 'Quédate con la sensación; no la reduzcas de inmediato a palabras.',
            en: 'Stay with the feeling; do not shrink it into words right away.',
          },
        ],
        color: '#3BB0B0',
        children: [
          {
            id: 'surprise-awe',
            name: { es: 'Admirado/a', en: 'Awe' },
            description: {
              es: 'Asombro profundo, casi reverente.',
              en: 'Deep, almost reverent wonder.',
            },
            tips: [
              {
                es: 'Captura el momento (foto, frase, nota) para recordarlo.',
                en: 'Capture the moment (photo, phrase, note) so you can remember it.',
              },
            ],
            color: '#4CC0C0',
          },
        ],
      },
      {
        id: 'surprise-confused',
        name: { es: 'Confundido/a', en: 'Confused' },
        description: {
          es: 'No encaja lo que ves con lo que esperabas.',
          en: 'What you see does not match what you expected.',
        },
        tips: [
          {
            es: 'Haz una pregunta concreta o pide un resumen de los hechos.',
            en: 'Ask one concrete question or request a summary of the facts.',
          },
        ],
        color: '#278C8C',
        children: [
          {
            id: 'surprise-disoriented',
            name: { es: 'Desorientado/a', en: 'Disoriented' },
            description: {
              es: 'Sensación de perder el mapa mental.',
              en: 'A sense of losing your mental map.',
            },
            tips: [
              {
                es: 'Vuelve a lo básico: hora, lugar, siguiente tarea mínima.',
                en: 'Return to basics: time, place, next minimal task.',
              },
            ],
            color: '#1F7777',
          },
        ],
      },
      {
        id: 'surprise-startled',
        name: { es: 'Sobresaltado/a', en: 'Startled' },
        description: {
          es: 'Reacción brusca del sistema nervioso.',
          en: 'A sharp nervous-system reaction.',
        },
        tips: [
          {
            es: 'Respiración lenta y pies en el suelo hasta que baje el pico.',
            en: 'Slow breathing and feet on the floor until the spike settles.',
          },
        ],
        color: '#2A9494',
        children: [
          {
            id: 'surprise-shocked',
            name: { es: 'Impactado/a', en: 'Shocked' },
            description: {
              es: 'Impacto fuerte que deja poco margen para pensar.',
              en: 'A strong impact that leaves little room to think.',
            },
            tips: [
              {
                es: 'No decidas nada grande ahora; busca agua, calor y compañía segura.',
                en: 'Do not decide anything big now; seek water, warmth, and safe company.',
              },
            ],
            color: '#186666',
          },
        ],
      },
    ],
  },
]

const byId = new Map<string, Emotion>()

function indexEmotions(list: Emotion[]) {
  for (const emotion of list) {
    byId.set(emotion.id, emotion)
    if (emotion.children) indexEmotions(emotion.children)
  }
}

indexEmotions(emotionFamilies)

export function getEmotionById(id: string): Emotion | undefined {
  return byId.get(id)
}

export function getFamilyIdForEmotion(id: string): string | undefined {
  for (const family of emotionFamilies) {
    if (family.id === id) return family.id
    for (const secondary of family.children) {
      if (secondary.id === id) return family.id
      if (secondary.children?.some((t) => t.id === id)) return family.id
    }
  }
  return undefined
}

export function flattenEmotions(): Emotion[] {
  const out: Emotion[] = []
  const walk = (list: Emotion[]) => {
    for (const e of list) {
      out.push(e)
      if (e.children) walk(e.children)
    }
  }
  walk(emotionFamilies)
  return out
}
