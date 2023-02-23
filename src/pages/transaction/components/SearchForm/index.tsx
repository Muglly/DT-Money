import { MagnifyingGlass } from "phosphor-react";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { useContext } from "react";
import { TransactionsContext } from "../../../../contexts/TransactionsContext";

import * as S from "./styles";

const searchFormSchema = z.object({
  query: z.string(),
});

type SearchFormInputs = z.infer<typeof searchFormSchema>;

export function SearchForm() {
  const { fetchTransactions } = useContext(TransactionsContext);

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  });

  async function handleSearchTransanctions(data: SearchFormInputs) {
    await fetchTransactions(data.query);
  }

  return (
    <S.SearchFormContainer onSubmit={handleSubmit(handleSearchTransanctions)}>
      <input
        type="text"
        placeholder="busque por transações"
        {...register("query")}
      />
      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </S.SearchFormContainer>
  );
}
