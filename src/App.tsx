import { GlobalStyle } from "./styles/global";
import { ThemeProvider } from "styled-components";
import { defaultThemes } from "./styles/theme/default";
import { Transaction } from "./pages/transaction";

export function App() {
  return (
    <ThemeProvider theme={defaultThemes}>
      <Transaction />
      <GlobalStyle />
    </ThemeProvider>
  );
}
