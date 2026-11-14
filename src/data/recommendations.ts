/** Tips live on each emotion; this helper exposes them by id. */
import { getEmotionById, type Localized } from './emotions'

export function getTipsForEmotion(emotionId: string): Localized[] {
  return getEmotionById(emotionId)?.tips ?? []
}
