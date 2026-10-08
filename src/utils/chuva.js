export function formatarChanceChuva(valor) {
  return Number.isFinite(valor) && valor >= 0 && valor <= 100
    ? `${Math.round(valor)}%`
    : 'Indisponível'
}
