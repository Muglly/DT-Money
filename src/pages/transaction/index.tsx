import { useContext } from "react";
import { TransactionsContext } from "../../contexts/TransactionsContext";

import { Header } from "../../components/Header";
import { Sammury } from "../../components/Sammury";
import { SearchForm } from "./components/SearchForm";

import * as S from "./styles";
import { dateFormatter, priceFormatter } from "../../utils/formatter";

export function Transaction() {
  const { transactions } = useContext(TransactionsContext);

  return (
    <>
      <Header />
      <Sammury />

      <S.TransactionContainer>
        <SearchForm />

        <S.TransactionTable>
          <tbody>
            {transactions.map((transaction) => {
              return (
                <tr key={`transaction${transaction.id}`}>
                  <td width="50%">{transaction.description}</td>
                  <td>
                    <S.PriceHighLight variant={transaction.type}>
                      {transaction.type === "outcome" && "- "}
                      {priceFormatter.format(transaction.price)}
                    </S.PriceHighLight>
                  </td>
                  <td>{transaction.category}</td>
                  <td>
                    {dateFormatter.format(new Date(transaction.createdAt))}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </S.TransactionTable>
      </S.TransactionContainer>
    </>
  );
}
