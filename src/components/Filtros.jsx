import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`

const Botao = styled.button`
  padding: 0.4rem 1rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
  border: 2px solid ${({ theme, $ativo }) => $ativo ? theme.primary : theme.border};
  background-color: ${({ theme, $ativo }) => $ativo ? theme.primary : 'transparent'};
  color: ${({ theme, $ativo }) => $ativo ? 'white' : theme.textMuted};
  transition: all 0.2s ease;

  &:hover { border-color: ${({ theme }) => theme.primary}; }
`

const opcoes = [
  { valor: 'todas', label: 'Todas' },
  { valor: 'ativas', label: 'Ativas' },
  { valor: 'concluidas', label: 'Concluídas' },
]

function Filtros({ filtroAtivo, onFiltrar }) {
  return (
    <Wrapper>
      {opcoes.map(op => (
        <Botao key={op.valor} $ativo={filtroAtivo === op.valor} onClick={() => onFiltrar(op.valor)}>
          {op.label}
        </Botao>
      ))}
    </Wrapper>
  )
}

export default Filtros