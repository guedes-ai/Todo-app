import styled from 'styled-components'

export const TarefaWrapper = styled.li`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background-color: ${({ theme }) => theme.surface};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 12px;
  padding: 1rem 1.25rem;
  transition: all 0.2s ease;

  &:hover { box-shadow: ${({ theme }) => theme.shadow}; }
`

export const Checkbox = styled.button`
  width: 22px;
  height: 22px;
  min-width: 22px;
  border-radius: 50%;
  border: 2px solid ${({ theme, $concluida }) => $concluida ? theme.success : theme.border};
  background-color: ${({ theme, $concluida }) => $concluida ? theme.success : 'transparent'};
  color: white;
  font-size: 0.7rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;

  &:hover { border-color: ${({ theme }) => theme.success}; }
`

export const TarefaTexto = styled.span`
  flex: 1;
  color: ${({ theme, $concluida }) => $concluida ? theme.textMuted : theme.text};
  text-decoration: ${({ $concluida }) => $concluida ? 'line-through' : 'none'};
`

export const BotaoRemover = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.textMuted};
  opacity: 0;
  transition: all 0.2s ease;

  ${TarefaWrapper}:hover & { opacity: 1; }

  &:hover {
    background-color: ${({ theme }) => theme.danger}22;
    color: ${({ theme }) => theme.danger};
  }
`