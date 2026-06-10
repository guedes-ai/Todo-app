import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './styles/themes'
import GlobalStyle from './styles/GlobalStyle'
import Header from './components/Header'
import FormularioTarefa from './components/FormularioTarefa'
import TarefaItem from './components/TarefaItem'
import Filtros from './components/Filtros'
import styled from 'styled-components'

const Main = styled.main`
  max-width: 640px;
  margin: 2rem auto;
  padding: 0 1rem;
`

const Card = styled.div`
  background-color: ${({ theme }) => theme.surface};
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: ${({ theme }) => theme.shadowLg};
`

const Lista = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
`

let proximoId = 1

function App() {
  const [tema, setTema] = useState('light')
  const [tarefas, setTarefas] = useState([])
  const [filtro, setFiltro] = useState('todas')

  function alternarTema() {
    setTema(t => t === 'light' ? 'dark' : 'light')
  }

  function adicionarTarefa(texto) {
    setTarefas(prev => [{ id: proximoId++, texto, concluida: false }, ...prev])
  }

  function toggleTarefa(id) {
    setTarefas(prev => prev.map(t => t.id === id ? { ...t, concluida: !t.concluida } : t))
  }

  function removerTarefa(id) {
    setTarefas(prev => prev.filter(t => t.id !== id))
  }

  const tarefasFiltradas = tarefas.filter(t => {
    if (filtro === 'ativas') return !t.concluida
    if (filtro === 'concluidas') return t.concluida
    return true
  })

  return (
    <ThemeProvider theme={tema === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Header tema={tema} alternarTema={alternarTema} />
      <Main>
        <Card>
          <FormularioTarefa onAdicionar={adicionarTarefa} />
          <Filtros filtroAtivo={filtro} onFiltrar={setFiltro} />
          <Lista>
            {tarefasFiltradas.map(tarefa => (
              <TarefaItem key={tarefa.id} tarefa={tarefa} onToggle={toggleTarefa} onRemover={removerTarefa} />
            ))}
          </Lista>
        </Card>
      </Main>
    </ThemeProvider>
  )
}

export default App