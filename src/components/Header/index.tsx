import LogoImg from '../../assets/logo.svg'
import * as Dialog from '@radix-ui/react-dialog'

import { NewTransactionModal } from '../NewTransactionModal'

import * as S from './styles'

export function Header() {
  return (
    <S.HeaderContainer>
      <S.HeaderContent>
        <img src={LogoImg} alt="DT Money" />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <S.NewTransactionButton>Nova transação</S.NewTransactionButton>
          </Dialog.Trigger>

          <NewTransactionModal />
        </Dialog.Root>
      </S.HeaderContent>
    </S.HeaderContainer>
  )
}
