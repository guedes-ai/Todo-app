import { HeaderWrapper, Logo, ThemeToggle } from '../styles/components/Header.styles'

function Header({ tema, alternarTema }) {
  return (
    <HeaderWrapper>
      <Logo>✅ Minhas Tarefas</Logo>
      <ThemeToggle onClick={alternarTema}>
        {tema === 'light' ? '🌙' : '☀️'}
      </ThemeToggle>
    </HeaderWrapper>
  )
}

export default Header