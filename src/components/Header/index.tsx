import LogoImg from "../../assets/logo.svg";

import * as S from "./styles";

export function Header() {
  return (
    <S.HeaderContainer>
      <S.HeaderContent>
        <img src={LogoImg} alt="DT Money" />

        <S.NewTransactionButton>Nova transação</S.NewTransactionButton>
      </S.HeaderContent>
    </S.HeaderContainer>
  );
}
