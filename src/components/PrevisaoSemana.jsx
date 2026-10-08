import { formatarChanceChuva } from '../utils/chuva'
import { getIconeDia } from '../utils/clima'

function formatarDia(dataString) {
  const data = new Date(dataString + 'T00:00:00')
  return data.toLocaleDateString('pt-BR', { weekday: 'short', day: '2-digit' })
}

function PrevisaoSemana({ previsao }) {
  return (
    <section className="semana" aria-labelledby="titulo-previsao">
      <h2 id="titulo-previsao">Previsão dos próximos 7 dias</h2>
      <p className="dica-rolagem">Deslize ou use as setas do teclado para ver todos os dias.</p>
      <div className="previsao-semana" tabIndex={0} role="region" aria-label="Previsão semanal com rolagem horizontal">
      {previsao.map((dia) => (
        <div className="dia-previsao" key={dia.data}>
          <span className="dia-label">{formatarDia(dia.data)}</span>
          <span className="dia-icone">{getIconeDia(dia.weatherCode)}</span>
          <span className="dia-max">{Math.round(dia.tempMax)}°</span>
          <span className="dia-min">{Math.round(dia.tempMin)}°</span>
          <span className="dia-chuva" title="Probabilidade máxima de precipitação no dia">🌧️ {formatarChanceChuva(dia.chanceChuva)}</span>
        </div>
      ))}
      </div>
    </section>
  )
}

export default PrevisaoSemana