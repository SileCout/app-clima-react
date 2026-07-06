import { getIconeDia } from '../utils/clima'

function formatarDia(dataString) {
  const data = new Date(dataString + 'T00:00:00')
  return data.toLocaleDateString('pt-BR', { weekday: 'short', day: '2-digit' })
}

function PrevisaoSemana({ previsao }) {
  return (
    <div className="previsao-semana">
      {previsao.map((dia) => (
        <div className="dia-previsao" key={dia.data}>
          <span className="dia-label">{formatarDia(dia.data)}</span>
          <span className="dia-icone">{getIconeDia(dia.weatherCode)}</span>
          <span className="dia-max">{Math.round(dia.tempMax)}°</span>
          <span className="dia-min">{Math.round(dia.tempMin)}°</span>
        </div>
      ))}
    </div>
  )
}

export default PrevisaoSemana