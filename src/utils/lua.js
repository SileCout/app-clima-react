import { getMoonIllumination } from 'suncalc'

const FASES = [
  ['Nova', '🌑'], ['Crescente', '🌒'], ['Quarto crescente', '🌓'],
  ['Crescente gibosa', '🌔'], ['Cheia', '🌕'], ['Minguante gibosa', '🌖'],
  ['Quarto minguante', '🌗'], ['Minguante', '🌘'],
]

export function obterFaseLua(data = new Date()) {
  const { phase, fraction } = getMoonIllumination(data)
  const [nome, icone] = FASES[Math.round(phase * 8) % 8]
  return { nome, icone, iluminacao: Math.round(fraction * 100) }
}
