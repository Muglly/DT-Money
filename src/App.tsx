import { GlobalStyle } from "./styles/global";
import { ThemeProvider } from "styled-components";
import { defaultThemes } from "./styles/theme/default";

export function App() {
  return (
    <ThemeProvider theme={defaultThemes}>
      <GlobalStyle />
      <div>
        <h1>Olá mundo</h1>
      </div>
    </ThemeProvider>
  );
}
