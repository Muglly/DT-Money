import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";

import * as S from "./styles";

export function Sammury() {
  return (
    <S.SammuryContainer>
      <S.SummuryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00b37e" />
        </header>

        <strong>R$ 17.400,00</strong>
      </S.SummuryCard>

      <S.SummuryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color="#f75a68" />
        </header>

        <strong>R$ 1.259,00</strong>
      </S.SummuryCard>

      <S.SummuryCard variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color="#fff" />
        </header>

        <strong>R$ 16.141,00</strong>
      </S.SummuryCard>
    </S.SammuryContainer>
  );
}
