import {
  HeaderContainer,
  HeaderContent,
  LogoWithName,
  NewTransactionButton,
} from './styles'
import logoImg from '../../assets/Ignite-logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <LogoWithName>
          <img src={logoImg} alt="" />
          <span>DT Money</span>
        </LogoWithName>
        <NewTransactionButton>New transaction</NewTransactionButton>
      </HeaderContent>
    </HeaderContainer>
  )
}
