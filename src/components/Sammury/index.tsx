import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import { useSammury } from "../../hooks/useSammury";

import { priceFormatter } from "../../utils/formatter";

import * as S from "./styles";

export function Sammury() {
  const sammury = useSammury();

  return (
    <S.SammuryContainer>
      <S.SummuryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00b37e" />
        </header>

        <strong>{priceFormatter.format(sammury.income)}</strong>
      </S.SummuryCard>

      <S.SummuryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color="#f75a68" />
        </header>

        <strong>{priceFormatter.format(sammury.outcome)}</strong>
      </S.SummuryCard>

      <S.SummuryCard variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color="#fff" />
        </header>

        <strong>{priceFormatter.format(sammury.total)}</strong>
      </S.SummuryCard>
    </S.SammuryContainer>
  );
}
