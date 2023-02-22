import styled from "styled-components";

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;

  input {
    flex: 1;
    border-radius: 6px;
    border: 0;
    background: ${({ theme }) => theme.colors.gray[900]};
    color: ${({ theme }) => theme.colors.gray[300]};
    padding: 1rem;

    &::placeholder {
      color: ${({ theme }) => theme.colors.gray[500]};
    }
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    cursor: pointer;

    border: 1px solid ${({ theme }) => theme.colors.green[300]};
    border-radius: 6px;
    padding: 1rem;
    background: transparent;

    color: ${({ theme }) => theme.colors.green[300]};
    font-weight: bold;

    &:disabled {
      cursor: not-allowed;
      opacity: 0.3;
    }

    &:not(:disabled):hover {
      border-color: ${({ theme }) => theme.colors.green[500]};
      background-color: ${({ theme }) => theme.colors.green[500]};
      color: ${({ theme }) => theme.colors.white};
      transition: backgound-color 0.3s, color 0.3s, border-color 0.3s;
    }
  }
`;
