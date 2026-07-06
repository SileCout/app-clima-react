function FormularioBusca({ cidade, setCidade, onBuscar }) {
  return (
    <div>
      <p className="instrucao">Digite o nome de uma cidade para ver o clima atual e a previsão dos próximos dias</p>
      <form onSubmit={onBuscar}>
        <input
          type="text"
          value={cidade}
          onChange={(e) => setCidade(e.target.value)}
          placeholder="Ex: Juiz de Fora"
          autoFocus
        />
        <button type="submit">Buscar</button>
      </form>
    </div>
  )
}

export default FormularioBusca