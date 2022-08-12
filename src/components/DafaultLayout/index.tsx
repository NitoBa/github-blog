import { Outlet } from 'react-router-dom'
import { Container, Effect1, Effect2, HeaderContainer, Logo } from './styles'
import effect1 from '../../assets/effect1.svg'
import effect2 from '../../assets/effect2.svg'
import logo from '../../assets/logo.svg'

export function DefaultLayout() {
  return (
    <Container>
      <HeaderContainer>
        <Effect1 src={effect1} alt="" />
        <Logo src={logo} alt="" />
        <Effect2 src={effect2} alt="" />
      </HeaderContainer>
      <Outlet />
    </Container>
  )
}
