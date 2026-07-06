// Códigos de chuva/tempestade da API (padrão meteorológico internacional)
const CODIGOS_CHUVA = [51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82, 95, 96, 99]
const CODIGOS_NEVE = [71, 73, 75, 77, 85, 86]

export function getCategoria(temperatura, weatherCode) {
  if (CODIGOS_CHUVA.includes(weatherCode)) {
    return { chave: 'chuva', emoji: '🌧️', texto: 'Chuvoso' }
  }
  if (CODIGOS_NEVE.includes(weatherCode)) {
    return { chave: 'frio', emoji: '❄️', texto: 'Neve' }
  }
  if (temperatura >= 28) {
    return { chave: 'quente', emoji: '☀️', texto: 'Quente' }
  }
  if (temperatura < 18) {
    return { chave: 'frio', emoji: '🥶', texto: 'Frio' }
  }
  return { chave: 'ameno', emoji: '🌤️', texto: 'Ameno' }
}

export function getIconeDia(weatherCode) {
  if (CODIGOS_CHUVA.includes(weatherCode)) return '🌧️'
  if (CODIGOS_NEVE.includes(weatherCode)) return '❄️'
  if (weatherCode === 0) return '☀️'
  if ([1, 2, 3].includes(weatherCode)) return '⛅'
  if ([45, 48].includes(weatherCode)) return '🌫️'
  return '🌤️'
}

export const TEMAS = {
  quente: { titulo: 'Para dias quentes', itens: ['☀️', '🏖️', '🍹'] },
  chuva: { titulo: 'Para dias de chuva', itens: ['🌧️', '☔', '🌂'] },
  frio: { titulo: 'Para dias frios', itens: ['🧥', '🧣', '☕'] },
  ameno: { titulo: 'Dia agradável', itens: ['🌤️', '🍃', '😊'] },
}