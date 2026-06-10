import { useState } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
`

const Input = styled.input`
  flex: 1;
  padding: 0.75rem 1rem;
  border-radius: 12px;
  border: 2px solid ${({ theme }) => theme.border};
  background-color: ${({ theme }) => theme.surface};
  color: ${({ theme }) => theme.text};
  outline: none;

  &:focus { border-color: ${({ theme }) => theme.primary}; }
`

const Botao = styled.button`
  padding: 0.75rem 1.25rem;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.primary};
  color: white;
  font-weight: 600;

  &:hover { background-color: ${({ theme }) => theme.primaryHover}; }
  &:disabled { opacity: 0.5; cursor: not-allowed; }
`

function FormularioTarefa({ onAdicionar }) {
  const [texto, setTexto] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    if (!texto.trim()) return
    onAdicionar(texto.trim())
    setTexto('')
  }

  return (
    <Wrapper as="form" onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Adicionar nova tarefa..."
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />
      <Botao type="submit" disabled={!texto.trim()}>+ Adicionar</Botao>
    </Wrapper>
  )
}

export default FormularioTarefa