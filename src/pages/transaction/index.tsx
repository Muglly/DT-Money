import { Header } from "../../components/Header";
import { Sammury } from "../../components/Sammury";
import { SearchForm } from "./components/SearchForm";

import * as S from "./styles";

export function Transaction() {
  return (
    <>
      <Header />
      <Sammury />

      <S.TransactionContainer>
        <SearchForm />

        <S.TransactionTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <td>
                <S.PriceHighLight variant="income">
                  R$ 12.000,00
                </S.PriceHighLight>
              </td>
              <td>Venda</td>
              <td>20/02/2023</td>
            </tr>

            <tr>
              <td width="50%">Hambúrguer</td>
              <td>
                <S.PriceHighLight variant="outcome">
                  - R$ 59,00
                </S.PriceHighLight>
              </td>
              <td>Alimentação</td>
              <td>11/02/2023</td>
            </tr>
          </tbody>
        </S.TransactionTable>
      </S.TransactionContainer>
    </>
  );
}
