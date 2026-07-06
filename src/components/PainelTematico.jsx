import { getCategoria, TEMAS } from '../utils/clima'

function PainelTematico({ temperatura, weatherCode }) {
  const categoria = getCategoria(temperatura, weatherCode)
  const tema = TEMAS[categoria.chave]

  return (
    <div className="painel-tematico">
      <p className="painel-titulo">{tema.titulo}</p>
      <div className="painel-itens">
        {tema.itens.map((emoji) => (
          <span key={emoji} className="painel-emoji">{emoji}</span>
        ))}
      </div>
    </div>
  )
}

export default PainelTematico