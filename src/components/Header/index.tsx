import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";

import logoImg from '../../assets/logo-dt-money.svg'
import * as Dialog from '@radix-ui/react-dialog';

export function Header() {
  return(
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="" />
        {/* <NewTransactionButton>Nova Transação</NewTransactionButton> */}

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova transação</NewTransactionButton>
          </Dialog.Trigger>
 
          <Dialog.Portal>
            <Dialog.Overlay />
 
            <Dialog.Content>
              <Dialog.Title>Nova Transação</Dialog.Title>
 
              <Dialog.Close />
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}