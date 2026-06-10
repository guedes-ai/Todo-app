import { TarefaWrapper, Checkbox, TarefaTexto, BotaoRemover } from '../styles/components/Tarefa.styles'

function TarefaItem({ tarefa, onToggle, onRemover }) {
  return (
    <TarefaWrapper>
      <Checkbox $concluida={tarefa.concluida} onClick={() => onToggle(tarefa.id)}>
        {tarefa.concluida && '✓'}
      </Checkbox>
      <TarefaTexto $concluida={tarefa.concluida}>{tarefa.texto}</TarefaTexto>
      <BotaoRemover onClick={() => onRemover(tarefa.id)}>✕</BotaoRemover>
    </TarefaWrapper>
  )
}

export default TarefaItem