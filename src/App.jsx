import { useState } from 'react'
import './App.css'
import FormularioBusca from './components/FormularioBusca'
import ResultadoClima from './components/ResultadoClima'
import PainelTematico from './components/PainelTematico'
import PrevisaoSemana from './components/PrevisaoSemana'


function App() {
  const [cidade, setCidade] = useState('')
  const [clima, setClima] = useState(null)
  const [carregando, setCarregando] = useState(false)
  const [erro, setErro] = useState(null)

  async function buscarClima(evento) {
    evento.preventDefault()
    if (cidade.trim() === '') return

    setCarregando(true)
    setErro(null)
    setClima(null)

    try {
      const respostaGeo = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${cidade}&count=1&language=pt&format=json`
      )
      const dadosGeo = await respostaGeo.json()

      if (!dadosGeo.results || dadosGeo.results.length === 0) {
        throw new Error('Cidade não encontrada')
      }

      const { latitude, longitude, name } = dadosGeo.results[0]

     const respostaClima = await fetch(
  `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=auto`
)
const dadosClima = await respostaClima.json()

setClima({
  cidade: name,
  temperatura: dadosClima.current.temperature_2m,
  umidade: dadosClima.current.relative_humidity_2m,
  vento: dadosClima.current.wind_speed_10m,
  weatherCode: dadosClima.current.weather_code,
  previsao: dadosClima.daily.time.map((data, i) => ({
    data,
    tempMax: dadosClima.daily.temperature_2m_max[i],
    tempMin: dadosClima.daily.temperature_2m_min[i],
    weatherCode: dadosClima.daily.weather_code[i],
  })),
})
    } catch (e) {
      setErro(e.message)
    } finally {
      setCarregando(false)
    }
  }

  return (
  <div className="tela">
    <div className="layout">
      <div className="container">
        <h1>App de Clima</h1>

        <FormularioBusca
          cidade={cidade}
          setCidade={setCidade}
          onBuscar={buscarClima}
        />

        {carregando && <p>Carregando...</p>}
        {erro && <p className="erro">Erro: {erro}</p>}
        {clima && <ResultadoClima clima={clima} />}
      </div>

      {clima && (
        <PainelTematico
          temperatura={clima.temperatura}
          weatherCode={clima.weatherCode}
        />
      )}
    </div>

    {clima && <PrevisaoSemana previsao={clima.previsao} />}
  </div>
)
}
export default App