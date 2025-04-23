import { HeaderContainer, HeaderContent, NewTransactionButton, SignOutButton } from "./styles";

import logoImg from '../../assets/logo-dt-money.svg'
import * as Dialog from '@radix-ui/react-dialog';
import { NewTransactionModal } from "../NewTransactionModal";

import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../lib/firebase";

export function Header() {
  const navigate = useNavigate()

  const handleLogout = async () => {
    await signOut(auth)
    navigate("/")
  }
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt=""/>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <NewTransactionButton>Nova transação</NewTransactionButton>
            </Dialog.Trigger>

            <NewTransactionModal />
          </Dialog.Root>

          <SignOutButton onClick={handleLogout}>
            Sair
          </SignOutButton>
        </div>
      </HeaderContent>
    </HeaderContainer>
  )
}