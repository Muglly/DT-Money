import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Sammury } from "../../components/Sammury";
import { SearchForm } from "./components/SearchForm";

import * as S from "./styles";

interface Transaction {
  id: number;
  description: string;
  type: "income" | "autcome";
  category: string;
  price: number;
  createdAt: string;
}

export function Transaction() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  async function loadTransactions() {
    const response = await fetch("http://localhost:3333/transactions");
    const data = await response.json();

    setTransactions(data);
  }

  useEffect(() => {
    loadTransactions();
  }, []);

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
                      R$ {transaction.price}
                    </S.PriceHighLight>
                  </td>
                  <td>{transaction.category}</td>
                  <td>{transaction.createdAt}</td>
                </tr>
              );
            })}
          </tbody>
        </S.TransactionTable>
      </S.TransactionContainer>
    </>
  );
}
