import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";

import { TransactionsProvider } from "./contexts/TransactionsContext";
import { AuthProvider } from "./contexts/AuthContext";
import { AppRoutes } from "./Routes";

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <AuthProvider>
        <TransactionsProvider>
          <AppRoutes/>
        </TransactionsProvider>
      </AuthProvider>

    </ThemeProvider>
  )


}
