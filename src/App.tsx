import { GlobalStyle } from "./styles/global";
import { ThemeProvider } from "styled-components";
import { defaultThemes } from "./styles/theme/default";
import { Transaction } from "./pages/transaction";
import { TransactionsProvider } from "./contexts/TransactionsContext";

export function App() {
  return (
    <ThemeProvider theme={defaultThemes}>
      <TransactionsProvider>
        <Transaction />
      </TransactionsProvider>
      <GlobalStyle />
    </ThemeProvider>
  );
}
