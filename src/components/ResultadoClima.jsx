function getSensacao(temp) {
  if (temp >= 28) return { emoji: '☀️', texto: 'Quente' }
  if (temp >= 18) return { emoji: '🌤️', texto: 'Ameno' }
  return { emoji: '🥶', texto: 'Frio' }
}

function ResultadoClima({ clima }) {
  const sensacao = getSensacao(clima.temperatura)

  return (
    <div className="resultado">
      <h2>{clima.cidade}</h2>
      <span className="selo-clima">
        {sensacao.emoji} {sensacao.texto}
      </span>

      <div className="grid-dados">
        <div className="dado">
          <span className="icone">🌡️</span>
          <span className="valor">{clima.temperatura}°C</span>
          <span className="label">Temperatura</span>
        </div>
        <div className="dado">
          <span className="icone">💧</span>
          <span className="valor">{clima.umidade}%</span>
          <span className="label">Umidade</span>
        </div>
        <div className="dado">
          <span className="icone">💨</span>
          <span className="valor">{clima.vento} km/h</span>
          <span className="label">Vento</span>
        </div>
      </div>
    </div>
  )
}

export default ResultadoClima