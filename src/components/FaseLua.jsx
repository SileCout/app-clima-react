import { useEffect, useState } from 'react'
import { obterFaseLua } from '../utils/lua'

export default function FaseLua() {
  const [lua, setLua] = useState(() => obterFaseLua())
  useEffect(() => {
    const timer = setInterval(() => setLua(obterFaseLua()), 60_000)
    return () => clearInterval(timer)
  }, [])
  return (
    <div className="fase-lua">
      <span className="lua-icone" aria-hidden="true">{lua.icone}</span>
      <div>
        <strong>Lua {lua.nome.toLowerCase()}</strong>
        <p>{lua.iluminacao}% iluminada · estimativa astronômica</p>
      </div>
    </div>
  )
}
