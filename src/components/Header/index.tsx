import {
  HeaderContainer,
  HeaderContent,
  LogoWithName,
  NewTransactionButton,
} from './styles'
import logoImg from '../../assets/Ignite-logo.svg'
import * as Dialog from '@radix-ui/react-dialog'
import { NewTransactionModal } from '../NewTransactionModal'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <LogoWithName>
          <img src={logoImg} alt="" />
          <span>DT Money</span>
        </LogoWithName>
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton>New transaction</NewTransactionButton>
          </Dialog.Trigger>
          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
