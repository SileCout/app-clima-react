# QA de front-end — App de Clima

Revisão em 08/10/2026. Escopo: chance de chuva, Lua, README e barras de rolagem.

## Diagnóstico e correções

- `src/index.css` continha estilos do template Vite: altura mínima de viewport no root somada ao padding do body, bordas, cores e títulos conflitantes. Removidos em favor dos estilos do app.
- Elementos decorativos absolutos ultrapassavam a página. Agora estão fixos, sem interação, e a área horizontal da página é limitada com `overflow-x: clip`.
- Input flexível sem `min-width: 0` podia exceder a largura do formulário. Corrigido, com quebra de linha em telas pequenas.
- A faixa semanal mantém `overflow-x: auto` e itens legíveis. Pode receber foco e rolar pelas setas do teclado. A página mantém a rolagem vertical quando o conteúdo supera a janela.
- O gradiente acompanha toda a altura do conteúdo. Animações respeitam a preferência por movimento reduzido.

## Verificações executadas

| Verificação | Resultado |
| --- | --- |
| `npm run lint` | Passou |
| `npm run build` | Passou |
| Consulta real à Open-Meteo em Juiz de Fora | Retornou sete valores de `precipitation_probability_max`, com timezone `America/Sao_Paulo` |
| Chuva de 65%, 0% e valor ausente | Exibição correta; ausência não vira 0% |
| Lua nova em 08/04/2024 às 18:21 UTC | Identificada como Nova |
| Lua cheia em 25/03/2024 às 07:00 UTC | Identificada como Cheia |
| Cidade não encontrada e HTTP 503 na previsão | Mensagem de erro; resultado anterior removido |
| Erros JavaScript no navegador | Nenhum nos cenários executados |
| Setas do teclado na faixa em 320 e 375 px | Rolagem horizontal funcionou |

### Medidas no Chromium

Viewport de 667 px de altura, exceto desktop com 900 px. Dados meteorológicos simulados para resultados reproduzíveis.

| Largura da janela | Largura da página | Faixa: conteúdo / área visível | Rolagem vertical |
| --- | --- | --- | --- |
| 320 px | 320 px | 804 / 286 px | Necessária |
| 375 px | 375 px | 804 / 341 px | Necessária |
| 768 px | 768 px | 820 / 718 px | Necessária |
| 1440 px | 1440 px | 898 / 898 px | Necessária |

A página não apresentou excesso horizontal nas quatro larguras. Em desktop, os sete dias cabem sem rolagem horizontal; nas demais larguras, somente a faixa semanal rola. A rolagem vertical é comportamento esperado para mostrar todo o conteúdo.

## Capturas e limites

Capturas em `screenshots/` e no README: tela inicial, resultado desktop e celular. Inspeção visual em Chromium headless, com movimento reduzido. Os valores meteorológicos são simulados, não previsão ao vivo.

Não foram testados Safari, Firefox nem aparelho físico. A forma e visibilidade da barra de rolagem dependem do sistema operacional. A fase lunar é estimada e o emoji é ilustrativo. A primeira cidade retornada pela busca pode ser ambígua. A publicação em produção não faz parte desta revisão.
